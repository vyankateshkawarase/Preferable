import SentLenskart from "../Icons/SentLenskart.png";
import Cross from "../Icons/Cross.png";
import Line7 from "../Icons/Line7.png";

function First() {
    return (
        <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-1/2 mt-4 bg-[#FBFBFF] rounded-3xl flex flex-col items-center justify-center">
                <img src={Cross} alt="logo" className="w-3 h-3 ml-auto m-4" />
                <img src={SentLenskart} alt="logo" className="w-80 h-64 flex-shrink-0 bg-white m-4"/>
                <p className="text-black text-center font-poppins font-semibold text-xl m-8">
                    Your application was sent to Lenskart !
                </p>
                <img src={Line7} alt="logo" className="w-11/12 h-0.5 bg-[#000000] m-4" />
                <button className="flex items-center justify-center w-40 h-10 p-0 md:p-0 m-4 flex-shrink-0 rounded-3xl text-[#FFFFFF] bg-[#657ED4]">
                    View More Jobs
                </button>
            </div>
        </div>
    )
}

export default First;