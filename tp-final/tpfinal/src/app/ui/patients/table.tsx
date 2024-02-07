import { fetchFiltrePatients } from "@/app/lib/data";
import Image from "next/image";


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
            <div className="w-full">
                <table className="hidden min-w-full text-gray-900 md:table">
                    <thead className="rounded-lg text-left text-sm font-normal">
                        <tr>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                Customer
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Email
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Amount
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Date
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Status
                            </th>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                                <span className="sr-only">Edit</span>
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
                                        MODIFIER SUPPRIMER
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}