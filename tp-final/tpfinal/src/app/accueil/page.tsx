import { fetchCardData } from "../lib/data";
import { Card } from "../ui/dashboard/card";
import NextPatient from "../ui/dashboard/nextPatient";

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
                <Card title="Patients" value={numberOfPatients} type="patients" />
                <Card title="Rendez-vous du jour" value={numberOfRendezVous} type="rdv" />
                <Card title="Medicaments restants" value={numberOfMedicaments} type="medicament" />
                <Card title="Medecins" value={numberOfMedecins} type="medecins" />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <NextPatient />
            </div>
        </main>
    );
}

export default Page;