function NextPatient() {
    return (
        <div className="w-full md:col-span-4">
            <h2 className="mb-4 text-xl md:text-2xl">
                Les prochains patients
            </h2>


            <div className="rounded-xl bg-gray-50 p-4">
                <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
                    <div
                        className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex">
                        test
                    </div>

                </div>
                <div className="flex items-center pb-2 pt-6">
                    <h3 className="ml-2 text-sm text-gray-500 ">Les 10 prochains</h3>
                </div>
            </div>
        </div>
    )
}

export default NextPatient;