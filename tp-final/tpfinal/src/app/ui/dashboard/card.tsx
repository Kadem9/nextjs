export function Card({
    title,
    value,
    type,
}: {
    title: string;
    value: number | string;
    type: 'patients' | 'rdv' | 'medicament' | 'medecins';
}) {

    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <div className="flex p-4">
                <h3 className="ml-2 text-sm font-medium text-emerald-950">{title}</h3>
            </div>
            <p
                className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl text-emerald-950"
            >
                {value}
            </p>
        </div>
    );
}