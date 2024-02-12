import {
  Card,
  Typography,
} from "@material-tailwind/react";
import Lenskart from "../Icons/Lenskart.png";

export function TestimonialCard() {
  return (
    <div className="flex flex-wrap items-center justify-center bg-white">
      <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
          <div className="md:w-1/">
            <Typography variant="h5" color="blue-gray">
                <div className="bg-[#DCE1F6] rounded-xl p-4 m-4">
                    <div className="flex flex-row items-center m-4">
                        <img src={Lenskart} alt="logo" className="bg-[#F2F2F2] w-20 h-16 p-4 pt-2" />
                        <div className="ml-4">
                            <p className="text-red-500 font-inter font-medium text-2xl">Full Stack Developer</p>
                            <p className="text-black font-inter font-normal text-2xl">Lenskart</p>
                            <p className="text-black font-inter font-light text-xl">India (Remote)</p>
                            <p className="text-teal-500 font-inter font-normal text-xl">3 hours ago</p>
                        </div>
                    </div>
                </div>
            </Typography>
          </div>
          <div className="md:w-1/">
            <Typography variant="h5" color="blue-gray">
                <div className="bg-[#DCE1F6] rounded-xl p-4 m-4">
                    <div className="flex flex-row items-center m-4">
                        <img src={Lenskart} alt="logo" className="bg-[#F2F2F2] w-20 h-16 p-4 pt-2" />
                        <div className="ml-4">
                            <p className="text-red-500 font-inter font-medium text-2xl">Full Stack Developer</p>
                            <p className="text-black font-inter font-normal text-2xl">Lenskart</p>
                            <p className="text-black font-inter font-light text-xl">India (Remote)</p>
                            <p className="text-teal-500 font-inter font-normal text-xl">3 hours ago</p>
                        </div>
                    </div>
                </div>
            </Typography>
          </div>
          <div className="md:w-1/">
            <Typography variant="h5" color="blue-gray">
                <div className="bg-[#DCE1F6] rounded-xl p-4 m-4">
                    <div className="flex flex-row items-center m-4">
                        <img src={Lenskart} alt="logo" className="bg-[#F2F2F2] w-20 h-16 p-4 pt-2" />
                        <div className="ml-4">
                            <p className="text-red-500 font-inter font-medium text-2xl">Full Stack Developer</p>
                            <p className="text-black font-inter font-normal text-2xl">Lenskart</p>
                            <p className="text-black font-inter font-light text-xl">India (Remote)</p>
                            <p className="text-teal-500 font-inter font-normal text-xl">3 hours ago</p>
                        </div>
                    </div>
                </div>
            </Typography>
          </div>
          <div className="md:w-1/">
            <Typography variant="h5" color="blue-gray">
                <div className="bg-[#DCE1F6] rounded-xl p-4 m-4">
                    <div className="flex flex-row items-center m-4">
                        <img src={Lenskart} alt="logo" className="bg-[#F2F2F2] w-20 h-16 p-4 pt-2" />
                        <div className="ml-4">
                            <p className="text-red-500 font-inter font-medium text-2xl">Full Stack Developer</p>
                            <p className="text-black font-inter font-normal text-2xl">Lenskart</p>
                            <p className="text-black font-inter font-light text-xl">India (Remote)</p>
                            <p className="text-teal-500 font-inter font-normal text-xl">3 hours ago</p>
                        </div>
                    </div>
                </div>
            </Typography>
          </div>
          <div className="md:w-1/">
            <Typography variant="h5" color="blue-gray">
                <div className="bg-[#DCE1F6] rounded-xl p-4 m-4">
                    <div className="flex flex-row items-center m-4">
                        <img src={Lenskart} alt="logo" className="bg-[#F2F2F2] w-20 h-16 p-4 pt-2" />
                        <div className="ml-4">
                            <p className="text-red-500 font-inter font-medium text-2xl">Full Stack Developer</p>
                            <p className="text-black font-inter font-normal text-2xl">Lenskart</p>
                            <p className="text-black font-inter font-light text-xl">India (Remote)</p>
                            <p className="text-teal-500 font-inter font-normal text-xl">3 hours ago</p>
                        </div>
                    </div>
                </div>
            </Typography>
          </div>
      </Card>
    </div>
    
  );
}

export default TestimonialCard;