import Line7 from "../Icons/Line7.png";
import Down from "../Icons/Down.Svg";
import Cross from "../Icons/Cross.png";
// import { Link } from 'react-router-dom'

function First() {
    return (
        <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-1/2 mt-4 bg-[#FBFBFF] rounded-3xl w-914 h-1061">
                <div className="flex items-center space-x-4 m-4">
                    <p className="text-black font-inter text-3xl leading-normal text-left">Review your application</p>
                    <img src={Cross} alt="logo" className="w-3 h-3 ml-4" />
                </div>
                <img src={Line7} alt="logo" className="w-11/12 h-0.5 bg-[#000000] m-4" />
                <p className="text-black font-inter text-2xl text-left text-center m-4">Contact info</p>
                <p className="text-black font-inter text-l text-left text-center m-4 mt-2">Be sure to include an updated resume</p>
                <div className="flex items-center justify-center w-836 h-20 rounded-3xl bg-[#DCE1F6] m-6">
                    <p className="text-black font-inter text-xl text-center">User profile card</p>
                </div>
                <div className="flex items-center justify-center w-836 h-20 rounded-3xl bg-[#DCE1F6] m-6">
                    <p className="text-black font-inter text-xl text-center">Email Address/Mobile number</p>
                </div>
                <div className="flex items-center justify-center w-836 h-20 rounded-3xl bg-[#DCE1F6] m-6">
                    <p className="text-black font-inter text-xl text-center">Resume</p>
                </div>
                <div className="flex items-center space-x-2 m-8">
                    <p className="text-[#3626A7] font-poppins font-semibold text-xl ml-auto">Show 3 more resumes</p>
                    <img src={Down} alt="logo" />
                </div>
                <img src={Line7} alt="logo" className="w-11/12 h-0.5 bg-[#000000] m-4" />
                <div className="flex m-8">
                    <button className="text-[#3626A7] text-center font-poppins font-semibold text-xl pr-8 items-center ml-auto">
                        Back
                    </button>
                    {/* <Link to="/YourApplicationSent"> */}
                        <button className="flex items-center justify-center w-40 h-10 p-0 md:p-0 flex-shrink-0 rounded-3xl text-[#FFFFFF] bg-[#657ED4]">
                            Submit application
                        </button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    )
}

export default First;