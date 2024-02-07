import { fetchPatientById } from '@/app/lib/data';
import Form from '@/app/ui/patients/edit-form';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [patient] = await Promise.all([
        fetchPatientById(id),
    ]);
    return (
        <main>
            <Form patient={patient} />
        </main>
    );
}