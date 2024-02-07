import { Suspense } from "react";
import SearchBar from "../ui/rendez-vous/searchBar";
import TablePatients from "../ui/patients/table";
import { PatientTableSkeleton } from "../ui/skeletons";
import { fetchPatientsPages } from "../lib/data";
import Pagination from "../ui/patients/pagination";
import Link from "next/link";

export default async function Page({ searchParams, }: {
    searchParams?: { query?: string; page?: string; };
}) {

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchPatientsPages(query);

    return (
        <div>
            <Link href="patient/create" className="btn mb-3 bg-green-900 rounded p-2 ms-2 hover:bg-green-700">Ajouter</Link>
            <SearchBar placeholder="Medecin" />
            <Suspense key={query + currentPage} fallback={<PatientTableSkeleton />}>
                <TablePatients query={query} currentPage={currentPage} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    )
}