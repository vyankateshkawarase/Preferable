
function Second() {
    return (
        <div className="flex flex-wrap items-center justify-center bg-[#3F3D56]">
            <div className="w-full md:w-1/ mt-4 m-4">
                <p className="text-white font-inter text-40 font-normal text-2xl capitalize text-center">Find Better Through ACCESS,
                    Better CONNECTIONS, Better Jobs.</p>
                <p className="text-white font-inter text-10 font-thin capitalize text-center">Preferable helps you
                    find the perfect job for you</p>
            </div>
            <div className="w-full flex justify-center">
                <div className="space-x-4 p-2 mb-2">
                    <input
                        type="text"
                        placeholder=" Job title, keywords or company name"
                        className="w-72 h-14 bg-white focus:!border-blue-gray-300 rounded-md mb-3 text-black"
                    />
                    <input
                        type="text"
                        placeholder=" City or State"
                        className="w-72 h-14 bg-white focus:!border-blue-gray-300 rounded-md mb-3"
                    />
                    <input
                        type="number"
                        placeholder=" Experience"
                        className="w-72 h-14 bg-white focus:!border-blue-gray-300 rounded-md mb-3"
                    />
                </div>
            </div>

            <button className="flex w-44 m-2 mb-4 h-10 p-0.5 pr-8 pl-4 justify-center items-center gap-6 
            flex-shrink-0 rounded-xl bg-blue-500">
                Find Jobs
            </button>
        </div>
    )
}

export default Second;