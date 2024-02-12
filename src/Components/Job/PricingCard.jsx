import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import AppliedJobs from "../Icons/AppliedJobs.Svg";
import Skills from "../Icons/Skills.Svg";
import JobAss from "../Icons/JobAss.Svg";
import InterviewPre from "../Icons/InterviewPre.Svg";
import Lenskart from "../Icons/Lenskart.png";

export function PricingCard() {
  return (
    <div className="flex flex-wrap justify-center bg-white">
    <Card variant="gradient" className="w-full max-w-[20rem] bg-[#DCE1F6] pb-96 pt-12 mt-4 m-4  h-72">
      <CardBody className="p-0">
        <div className="flex-wrap items-center justify-center bg-[#DCE1F6]">
          <div className="space-y-4 pb-2">
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-4">
                <img src={AppliedJobs} alt="Logo" className="h-6 w-6 ml-16" />
                <Typography className="font-normal">Applied Jobs</Typography>
              </div>
              <div className="flex items-center gap-4">
                <img src={Skills} alt="Logo" className="h-6 w-6 ml-16" />
                <Typography className="font-normal">Skill Assessment</Typography>
              </div>
              <div className="flex items-center gap-4">
                <img src={JobAss} alt="Logo" className="h-6 w-6 ml-16" />
                <Typography className="font-normal">Job Assistance</Typography>
              </div>
              <div className="flex items-center gap-4">
                <img src={InterviewPre} alt="Logo" className="h-6 w-6 ml-16" />
                <Typography className="font-normal">Interview Prep</Typography>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
    
    <Card color="transparent" shadow={false} className="w-full max-w-[44rem]">
      <div className="md:w-1/">
        <Typography variant="h5" color="blue-gray">
          <div className="bg-[#DCE1F6] rounded-xl p-4 m-4">
            <div className="flex flex-row items-center m-4">
              <img src={Lenskart} alt="logo" className="bg-[#F2F2F2] w-20 h-16 p-4 pt-2" />
              <div className="ml-4">
                <p className="text-red-500 font-inter font-medium text-2xl text-[#FF331F]">Full Stack Developer</p>
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
                            <p className="text-red-500 font-inter font-medium text-2xl text-[#FF331F]">Full Stack Developer</p>
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
                            <p className="text-red-500 font-inter font-medium text-2xl text-[#FF331F]">Full Stack Developer</p>
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
                            <p className="text-red-500 font-inter font-medium text-2xl text-[#FF331F]">Full Stack Developer</p>
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
                            <p className="text-red-500 font-inter font-medium text-2xl text-[#FF331F]">Full Stack Developer</p>
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

export default PricingCard;