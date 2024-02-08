'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updatePatient } from '@/app/lib/actions';
import { PatientForm } from '@/app/lib/definition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faSquareEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

export default function EditInvoiceForm({
    patient,
}: {
    patient: PatientForm;
}) {
    const updatePatientWithId = updatePatient.bind(null, patient.id);


    return (
        <form action={updatePatientWithId}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4">
                    <label htmlFor="nameClient" className="mb-2 block text-sm font-medium text-black">
                        Nom du client
                    </label>
                    <div className="relative">
                        <FontAwesomeIcon icon={faUser} className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />

                        <input id="nameClient" name="nameClient" type="text" defaultValue={patient.name} placeholder="Nom du client" className="text-black peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" required />

                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="mailClient" className="mb-2 block text-sm font-medium text-black">
                        Mail du client
                    </label>
                    <div className="relative">
                        <FontAwesomeIcon icon={faSquareEnvelope} className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                        <input id="mailClient" name="mailClient" type="text" defaultValue={patient.email} placeholder="Mail du client" className="text-black peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" required />

                    </div>

                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/invoices"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Annuler
                </Link>
                <Button type="submit">Modifier le patient</Button>
            </div>
        </form>
    );
}
