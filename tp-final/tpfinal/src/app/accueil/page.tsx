import { fetchCardData } from "../lib/data";
import { Card } from "../ui/dashboard/card";
import ListMedicaments from "../ui/dashboard/listMedicaments";
import NextPatient from "../ui/dashboard/nextPatient";
import { Suspense } from "react";
import { CardSkeleton, LongCardSkeleton } from "../ui/skeletons";

async function Page() {
    const {
        numberOfMedecins,
        numberOfPatients,
        numberOfMedicaments,
        numberOfRendezVous,
    } = await fetchCardData();

    return (
        <main className="mt-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardSkeleton />}>
                    <Card title="Patients" value={numberOfPatients} type="patients" />
                </Suspense>
                <Suspense fallback={<CardSkeleton />}>
                    <Card title="Rendez-vous du jour" value={numberOfRendezVous} type="rdv" />
                </Suspense>
                <Suspense fallback={<CardSkeleton />}>
                    <Card title="Medicaments restants" value={numberOfMedicaments} type="medicament" />
                </Suspense>
                <Suspense fallback={<CardSkeleton />}>
                    <Card title="Medecins" value={numberOfMedecins} type="medecins" />
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<LongCardSkeleton />}>
                    <NextPatient />
                </Suspense>
                <Suspense fallback={<LongCardSkeleton />}>
                    <ListMedicaments />
                </Suspense>
            </div>

        </main>
    );
}

export default Page;