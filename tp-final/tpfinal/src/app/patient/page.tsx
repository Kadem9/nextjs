import { Suspense } from "react";
import SearchBar from "../ui/rendez-vous/searchBar";
import TablePatients from "../ui/patients/table";
import { PatientTableSkeleton } from "../ui/skeletons";

export default async function Page({ searchParams, }: {
    searchParams?: { query?: string; page?: string; };
}) {

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    return (
        <div>
            <SearchBar placeholder="Medecin" />
            <Suspense key={query + currentPage} fallback={<PatientTableSkeleton />}>
                <TablePatients query={query} currentPage={currentPage} />
            </Suspense>
        </div>
    )
}