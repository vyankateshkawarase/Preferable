import { Button } from "@material-tailwind/react";
// import Line3 from "../Icons/Line3.Svg";

function AboutSession() {
    return (
        <div className="max-w-screen-lg mx-auto">
            <div className="border border-black rounded-xl mt-8 p-8">
                <p className="text-xl text-black">About the job</p>
                <div className="mt-6 space-y-4">
                    <p className="text-lg text-gray-700">Skills</p>
                    <div className="flex flex-wrap gap-4">
                        <label className="border border-black rounded-lg p-1">Cold Calling</label>
                        <label className="border border-black rounded-lg p-1">Sales</label>
                        <label className="border border-black rounded-lg p-1">Tele Marketing</label>
                        <label className="border border-black rounded-lg p-1">Tele Sales</label>
                        <label className="border border-black rounded-lg p-1">Business Development</label>
                        <label className="border border-black rounded-lg p-1">Customer Acquisition</label>
                    </div>
                </div>
                <div className="mt-6 space-y-4">
                    <p className="text-lg text-gray-800">Company Overview</p>
                    <p className="text-sm text-gray-700">Optical Arc Pvt. Ltd. is a full-service company of Custom Software Development, Mobile Application and Website Development. We provide end-to-end solutions tailored to our clients' unique needs. With a team of 11-50 employees, we are committed to helping businesses grow and succeed.</p>
                </div>
                <div className="mt-6 space-y-4">
                    <p className="text-lg text-gray-800">Job Overview</p>
                    <p className="text-sm text-gray-700">We are looking for a Caller to join our team at Optical Arc Pvt. Ltd. The Caller will be responsible for making cold calls and generating sales leads. The ideal candidate should have 1 to 3 years of experience in cold calling and telemarketing. This is a junior-level position and the job location is Kolkata, West Bengal, India. The employment type for this role is remote.</p>
                </div>
                <div className="mt-6 space-y-4">
                    <p className="text-lg text-gray-800">Qualifications and Skills</p>
                    <ul className="list-disc pl-6">
                        <li className="text-sm text-gray-700">1 to 3 years of experience in cold calling and telemarketing</li>
                        <li className="text-sm text-gray-700">Excellent communication and interpersonal skills</li>
                        <li className="text-sm text-gray-700">Strong sales and negotiation skills</li>
                        <li className="text-sm text-gray-700">Ability to work independently and remotely</li>
                        <li className="text-sm text-gray-700">Self-motivated and target-driven</li>
                        <li className="text-sm text-gray-700">Knowledge of CRM systems</li>
                        <li className="text-sm text-gray-700">Familiarity with the IT services industry</li>
                    </ul>
                </div>
                <div className="mt-6 space-y-4">
                    <p className="text-lg text-gray-800">Roles and Responsibilities</p>
                    <ul className="list-disc pl-6">
                        <li className="text-sm text-gray-700">Make cold calls to potential customers and generate sales leads</li>
                        <li className="text-sm text-gray-700">Utilize telemarketing techniques to promote our products and services</li>
                        <li className="text-sm text-gray-700">Build and maintain relationships with existing and potential customers</li>
                        <li className="text-sm text-gray-700">Provide product information and answer customer queries </li>
                        <li className="text-sm text-gray-700">Achieve sales targets and contribute to the company's growth </li>
                        <li className="text-sm text-gray-700">Collaborate with the sales team to create effective sales strategies </li>
                        <li className="text-sm text-gray-700">Document and update customer information in the CRM system </li>
                    </ul>
                </div>
            </div>
            <Button className="bg-light-blue-700 text-white flex items-center gap-2 mt-5 mx-auto">
                Apply Now{" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </Button>
            <div className="border border-black rounded-xl mt-8 mb-8 p-2">
                <p className="text-xl text-black">About the company</p>
                <p className="mt-5">Optical Arc Pvt. Ltd.</p>
                <p className="text-sm text-gray-700">We are a full-service Company of Custom Software Development, Mobile Application, Database Management System (DBMS), Data Visualization, ALM, PLM, Website Development that helps businesses grow and succeed. From Custom Software development to Web and Mobile App Development, we provide end-to-end solutions tailored to your unique needs. Join us on LinkedIn for industry insights, company updates, and career opportunities. #digitalmarketing #softwaredevelopment #innovation</p>
                <div className="flex mt-8 gap-7">
                    <div className=" items-center">
                        <p className="mr-1">Industry</p>
                        <p className="text-gray-700">IT Services</p>
                    </div>
                    {/* <img className="h-5 mx-2" src={Line3} alt="Logo" /> */}
                    <div className=" items-center">
                        <p className="mr-1">Company Size</p>
                        <p className="text-gray-700">11-50 Employees</p>
                    </div>
                    {/* <img className="h-5 mx-2" src={Line3} alt="Logo" /> */}
                    <div className=" items-center">
                        <p className="mr-1">Headquarter</p>
                        <p className="text-gray-700">Pune, Maharashtra</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSession;
