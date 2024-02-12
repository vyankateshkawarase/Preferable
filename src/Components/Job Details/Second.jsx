import SLine from "../Icons/SLine.Svg";

function Second() {
    return (
        <div className="flex flex-wrap items-center justify-center bg-[#3F3D56] gap-20 space-x-0 p-3">
                
                <button className="bg-white text-black rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Date Posted
                </button>
                <button className="bg-white text-black rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                Experience level
                </button>
                <button className="bg-white text-black rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                Company
                </button>
                <button className="bg-white text-black rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                On-site/remote
                </button>
                <button className="bg-white text-black rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                Easy Apply
                </button>
                <img src={SLine} className="w-20 h-20 md:block hidden" alt="logo"/>
                <button className="bg-white text-black rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                All Filters
                </button>
        </div>
    )
}

export default Second;