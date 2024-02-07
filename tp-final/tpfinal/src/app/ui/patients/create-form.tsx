'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';
import { Button } from '@/app/ui/button';
import { createPatient } from '@/app/lib/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faSquareEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Form() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createPatient, initialState);

  return (
    <form action={createPatient}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="nameClient" className="mb-2 block text-sm font-medium text-black">
            Entrez un client
          </label>
          <div className="relative">
            <FontAwesomeIcon icon={faUser} className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            <input id="nameClient" name="nameClient" type="text" placeholder="Entrez le nom du client" className="text-black peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" required />

          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="mailClient" className="mb-2 block text-sm font-medium text-black">
            Entrez un mail
          </label>
          <div className="relative">
            <FontAwesomeIcon icon={faSquareEnvelope} className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            <input id="mailClient" name="mailClient" type="text" placeholder="Entrez le mail du client" className="text-black peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" required />

          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="fileClient" className="mb-2 block text-sm font-medium text-black">
            Photo
          </label>
          <div className="relative">
            <FontAwesomeIcon icon={faCamera} className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            <input id="fileClient" name="fileClient" type="file" placeholder="Photo du patient" className="text-black peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" required />

          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>


      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/patient"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Annuler
        </Link>
        <Button type="submit">Ajouter le patient</Button>
      </div>
    </form>
  );
}
