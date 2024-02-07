import { fetchMedicaments } from "@/app/lib/data"

async function ListMedicaments() {

    const medicaments = await fetchMedicaments();

    return (
        <div className="w-full md:col-span-4">
            <div className="head-card mb-4 flex items-center">
                <h2 className="text-xl md:text-2xl">
                    Les médicaments
                </h2>
                <a href="#" className="btn bg-green-900 rounded p-2 ms-2 hover:bg-green-700">Ajouter</a>
            </div>


            <div className="rounded-xl bg-gray-50 p-4">
                <div className="flex p-4">
                    <h3 className="ml-2 text-sm font-medium text-emerald-950">Liste des médicaments :</h3>
                </div>
                <div className="flex flex-col p-4">

                    {medicaments.map((medoc) => (
                        <div key={medoc.id} className="flex items-center justify-between py-2">
                            <div>

                                <div>
                                    <h3 className="text-sm font-medium text-emerald-950">{medoc.name}</h3>
                                    <p className="text-xs text-gray-500">{medoc.stock} disponibles</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center pb-2">
                    <button className="btn bg-emerald-800 p-3 hover:bg-emerald-600">Voir tous les médicaments</button>
                </div>
            </div>
        </div>
    )
}

export default ListMedicaments;