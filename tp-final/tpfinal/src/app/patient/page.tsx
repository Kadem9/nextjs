import { Suspense } from "react";
import SearchBar from "../ui/rendez-vous/searchBar";
import TablePatients from "../ui/patients/table";
import { PatientTableSkeleton } from "../ui/skeletons";
import { fetchPatientsPages } from "../lib/data";
import Pagination from "../ui/patients/pagination";

export default async function Page({ searchParams, }: {
    searchParams?: { query?: string; page?: string; };
}) {

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchPatientsPages(query);

    return (
        <div>
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