import { deletePatient } from "@/app/lib/actions";
import { fetchFiltrePatients } from "@/app/lib/data";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";


export default async function TablePatients({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const patients = await fetchFiltrePatients(query, currentPage);

    return (
        <>
            <div className="mt-6 flow-root">
                <div className="inline-block min-w-full align-middle">
                    <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                        <table className="hidden min-w-full text-gray-900 md:table">
                            <thead className="rounded-lg text-left text-sm font-normal">
                                <tr>
                                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                        Patient
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Mail
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {patients?.map((patient) => (
                                    <tr
                                        key={patient.id}
                                        className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                    >
                                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={patient.image_url}
                                                    className="rounded-full"
                                                    width={28}
                                                    height={28}
                                                    alt={`${patient.name}'s profile picture`}
                                                />
                                                <p>{patient.name}</p>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3">
                                            {patient.email}
                                        </td>
                                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                            <div className="flex justify-end gap-3">
                                                <UpdatePatient id={patient.id} />
                                                <DeletePatient id={patient.id} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export function UpdatePatient({ id }: { id: string }) {
    return (
        <Link
            href={`/patient/${id}/edit`}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <FontAwesomeIcon icon={faPen} className="text-emerald-800 p-2 border-solid border-emerald-700 border-2 rounded-3xl hover:text-white hover:border-white hover:bg-emerald-800 hover:cursor-pointer" />
        </Link>
    );
}


export function DeletePatient({ id }: { id: string }) {
    const deletePatientWithId = deletePatient.bind(null, id);

    return (
        <form action={deletePatientWithId}>
            <button className="rounded-md border p-2 hover:bg-gray-100">
                <span className="sr-only">Delete</span>
                <FontAwesomeIcon icon={faTrash} className="text-red-800 p-2 border-solid border-red-700 border-2 rounded-3xl hover:text-white hover:border-white hover:bg-red-800 hover:cursor-pointer" />
            </button>
        </form>
    );
}