import { fetchRendezVous } from "@/app/lib/data";

async function NextPatient() {

    const prochainsRendezVous = await fetchRendezVous();

    return (
        <div className="w-full md:col-span-4">
            <h2 className="mb-4 text-xl md:text-2xl">
                Les prochains patients
            </h2>


            <div className="rounded-xl bg-gray-50 p-4">
                <div className="flex p-4">
                    <h3 className="ml-2 text-sm font-medium text-emerald-950">Prochains rendez-vous</h3>
                </div>
                <div className="flex flex-col p-4">

                    {prochainsRendezVous.map((rdv) => (
                        <div key={rdv.id} className="flex items-center justify-between py-2">
                            <div>
                                <h3 className="text-sm font-medium text-emerald-950">{rdv.patient_id}</h3>
                                <p className="text-xs text-gray-500">{rdv.amount} à {rdv.amount}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">{rdv.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center pb-2 pt-6">
                    <h3 className="ml-2 text-sm text-gray-500 ">Les 10 prochains</h3>
                </div>
            </div>
        </div>
    )
}

export default NextPatient;