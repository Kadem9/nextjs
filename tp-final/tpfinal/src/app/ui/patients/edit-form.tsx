'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updatePatient } from '@/app/lib/actions';
import { PatientForm } from '@/app/lib/definition';

export default function EditInvoiceForm({
    patient,
}: {
    patient: PatientForm;
}) {
    const updatePatientWithId = updatePatient.bind(null, patient.id);


    return (
        <form action={updatePatientWithId}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Customer Name */}
                <div className="mb-4">
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Choose customer
                    </label>
                    <div className="relative">

                    </div>
                </div>

                {/* Invoice Amount */}
                <div className="mb-4">
                    <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                        Choose an amount
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">

                        </div>
                    </div>
                </div>

            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/invoices"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Modifier le patient</Button>
            </div>
        </form>
    );
}
