import { Card } from "../ui/dashboard/card";
import NextPatient from "../ui/dashboard/nextPatient";

function Page() {
    return (
        <main className="mt-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card title="Patients" value={10} type="patients" />
                <Card title="Rendez-vous du jour" value={43} type="rdv" />
                <Card title="Medicaments restants" value={426} type="medicament" />
                <Card title="Medecins" value={39} type="medecins" />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <NextPatient />
            </div>
        </main>
    );
}

export default Page;