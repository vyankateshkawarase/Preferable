import RightSide from "../Icons/RightSide.png";
import Line from "../Icons/Line.png";
import Lenskart from "../Icons/Lenskart.png";
import Line3 from "../Icons/Line3.Svg";

function Second() {
    return (
        <div className="flex flex-wrap items-center justify-center bg-white">
            <div className="w-full md:w-1/2">
                <div className="p-4">
                    <h2 className="text-2xl md:text-4xl font-semibold text-[48px] md:text-[96px] font-poppins text-left pb-5 md:pb-10">
                        We Help &nbsp;<br /><br /><br></br><span className="text-[#FF331F]">You </span>
                        Get The<br /><br /><br></br>Right <span className="text-[#FF331F]">Job</span>
                    </h2>
                    <p className="pt-5 md:pt-10 text-lg md:text-2xl text-left">
                        Join us and take your career to the next level.
                    </p>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <div className="p-4">
                    <img className="w-802 h-703 flex-shrink-0" src={RightSide} alt="Logo" />
                </div>
            </div>
            <div className="w-full md:w-1/ mb-10">
                <div className="p-4">
                    <div className="flex flex-col md:flex-row ml-4 items-center">
                        <h2 className="bg-[#657ED4] text-[#080101] rounded-lg w-36 md:w-56 h-12 justify-center flex  items-center 
          font-inter text-lg md:text-2xl font-normal md:mt-0 md:mr-3 text-center">How does it work?</h2>
                        <h2 className="bg-[#3626A7] text-white rounded-lg w-36 md:w-56 h-12 justify-center flex items-center 
          font-inter text-lg md:text-2xl font-normal mt-3 md:mt-0">Get Started</h2>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-8 gap-8 text-center">
                <div className="p-4 ml-2">
                    <div className="text-3xl font-semibold text-[#FF331F] ">1200+</div>
                    <div className="text-black font-poppins text-2xl font-normal leading-normal capitalize">Job Available</div>
                </div>

                <div>
                    <img className="h-[135px] w-[1px] ml-36" src={Line3} alt="Logo" />
                </div>


                <div className="p-4  ml-2">
                    <div className="text-3xl font-semibold text-[#FF331F]">200+</div>
                    <div className="text-black font-poppins text-2xl font-normal leading-normal capitalize">Top Companies</div>
                </div>

                <div>
                    <img className="h-[135px] w-[1px] ml-36 " src={Line3} alt="Logo" />
                </div>

                <div className="p-4  ml-2">
                    <div className="text-3xl font-semibold text-[#FF331F]">2000+</div>
                    <div className="text-black font-poppins text-2xl font-normal leading-normal capitalize">Candidates Hired</div>
                </div>

                <div>
                    <img className="h-[135px] w-[1px] ml-36 " src={Line3} alt="Logo" />
                </div>
                <div className="p-4  ml-2">
                    <div className="text-3xl font-semibold text-[#FF331F]">30+</div>
                    <div className="text-black font-poppins text-2xl font-normal leading-normal capitalize">Class Available</div>
                </div>
            </div>
            <img className="custom-element mt-5" src={Line} alt="Logo" />

            <div className="flex flex-col items-center">
                <h2 className="text-[#0D0000] font-poppins text-2xl md:text-4xl font-semibold leading-normal capitalize text-left text-center md:text-center pt-6">
                    Our Placement Partners
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-7 gap-20 mt-6">
                    <div className="p-4 bg-[#F2F2F2]">
                        <img className="bg-white w-30 h-30 p-2" src={Lenskart} alt="Logo" />
                    </div>
                    <div className="p-4 bg-[#F2F2F2]">
                        <img className="bg-white w-30 h-30 p-2" src={Lenskart} alt="Logo" />
                    </div>
                    <div className="p-4 bg-[#F2F2F2]">
                        <img className="bg-white w-30 h-30 p-2" src={Lenskart} alt="Logo" />
                    </div>
                    <div className="p-4 bg-[#F2F2F2]">
                        <img className="bg-white w-30 h-30 p-2" src={Lenskart} alt="Logo" />
                    </div>
                    <div className="p-4 bg-[#F2F2F2]">
                        <img className="bg-white w-30 h-30 p-2" src={Lenskart} alt="Logo" />
                    </div>
                    <div className="p-4 bg-[#F2F2F2]">
                        <img className="bg-white w-30 h-30 p-2" src={Lenskart} alt="Logo" />
                    </div>
                    <div className="p-4 bg-[#F2F2F2]">
                        <img className="bg-white w-30 h-30 p-2" src={Lenskart} alt="Logo" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1">
                <div className="p-9 bg-white flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="87"
                        height="13"
                        viewBox="0 0 87 13"
                        fill="none"
                    >
                        <rect width="13" height="13" rx="2" className="fill-[#005F59]" />
                        <rect x="37" width="13" height="13" rx="2" className="fill-[#B3B3B3]" />
                        <rect x="74" width="13" height="13" rx="2" className="fill-[#B3B3B3]" />
                    </svg>
                </div>
                <div className="p-4 bg-white">
                    <p className="flex w-1124 h-195 flex-col justify-center text-black text-center font-poppins 
                text-4xl font-semibold leading-normal capitalize">Testimonals Section</p>
                </div>
            </div>
        </div>

    );
}

export default Second;
