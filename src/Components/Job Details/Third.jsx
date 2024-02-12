import Lenskart from "../Icons/Lenskart.png";
import Briefcase from "../Icons/Briefcase.Svg";
import Cross from "../Icons/Cross.png";
import Down from "../Icons/Down.Svg";
import Line7 from "../Icons/Line7.png";
import SentLenskart from "../Icons/SentLenskart.png";
import React from "react";
import { useState } from 'react';
import {
    Button,
    Dialog,
    DialogFooter,
} from "@material-tailwind/react";

function Third() {

    // First Page
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
    const handleCloseDialog = () => {
        setOpen(false);
    };

    //Second Page
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => {
        setOpen2(!open2);
    }
    const handleOpen22 = () => {
        setOpen(!open);
        setOpen2(!open2);
    }
    const handleCloseDialog2 = () => {
        setOpen2(false);
    };

    //Third Page
    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => {
        setOpen3(true);
    }
    const handleCloseDialog3 = () => {
        setOpen3(false);
    };

    //Left and Right Side Bar
    const [clickedBox, setClickedBox] = useState(null);

    const handleBoxClick = (index) => {
        setClickedBox(index);
        localStorage.setItem('selectedCardIndex', index); //Hold the card if I refresh this page
    };

    const cardContent = [
        {
            title: 'Full Stack Developer',
            company: 'Lenskart',
            location: 'India (Remote)',
            timeAgo: '3 hours ago',
            backgroundColor: '#DCE1F6',
            textColor: '#005F59',
            logoSrc: Lenskart,
        },
        {
            title: 'Full Stack Developer',
            company: 'TCS',
            location: 'India (Remote)',
            timeAgo: '3 hours ago',
            backgroundColor: '#DCE1F6',
            textColor: '#005F59',
            logoSrc: Lenskart,
        },
        {
            title: 'Full Stack Developer',
            company: 'Infosys',
            location: 'India (Remote)',
            timeAgo: '3 hours ago',
            backgroundColor: '#DCE1F6',
            textColor: '#005F59',
            logoSrc: Lenskart,
        },
        {
            title: 'Full Stack Developer',
            company: 'Bitwise',
            location: 'India (Remote)',
            timeAgo: '3 hours ago',
            backgroundColor: '#DCE1F6',
            textColor: '#005F59',
            logoSrc: Lenskart,
        },
        {
            title: 'Full Stack Developer',
            company: 'LTIMindtree',
            location: 'India (Remote)',
            timeAgo: '3 hours ago',
            backgroundColor: '#DCE1F6',
            textColor: '#005F59',
            logoSrc: Lenskart,
        },
        {
            title: 'Full Stack Developer',
            company: 'Birla Soft',
            location: 'India (Remote)',
            timeAgo: '3 hours ago',
            backgroundColor: '#DCE1F6',
            textColor: '#005F59',
            logoSrc: Lenskart,
        },
    ];

    const leftSideContent = cardContent.map((content, index) => (
        <div
            key={index}
            className={`${clickedBox === index
                ? `bg-[#a6a4a3] hover:bg-[#a6a4a3]`
                : `bg-${content.backgroundColor} hover:bg-[#a6a4a3]`
                } h-36 rounded-xl p-4 cursor-pointer transition-colors duration-300`}
            onClick={() => handleBoxClick(index)}
        >
            <div className="flex flex-row items-center">
                <img
                    src={content.logoSrc}
                    alt="logo"
                    className="bg-[#F2F2F2] w-20 h-16 p-4 pt-2"
                />
                <div className="ml-4">
                    <p className={`text-red-500 font-inter font-medium text-xl text-${content.textColor}`}>
                        {content.title}
                    </p>
                    <p className="text-black font-inter font-normal text-2xl">
                        {content.company}
                    </p>
                    <p className="text-black font-inter font-light text-xl">
                        {content.location}
                    </p>
                    <p className={`text-${content.textColor} font-inter font-normal text-xl`}>
                        {content.timeAgo}
                    </p>
                </div>
            </div>
        </div>
    ));
    React.useEffect(() => {
        const storedIndex = localStorage.getItem('selectedCardIndex');
        if (storedIndex !== null) {
            setClickedBox(Number(storedIndex));
        }
    }, []);

    const rightSideContent = (
        <div className="w-full md:w-1/2 mt-4 bg-[#DCE1F6] w-792 h-2269 flex-shrink-0 rounded-xl m-2">
            {clickedBox !== null && (
                <>
                    <p className="text-red-500 font-inter font-medium text-2xl text-left m-2">
                    {cardContent[clickedBox].title}</p>
                    <p className="text-black font-inter font-light text-xl text-left m-2">                  
                    {
                      `${cardContent[clickedBox].company}, 
                      ${cardContent[clickedBox].location}`
                    }
                        <span className="text-teal-500 font-inter font-light text-xl"> 
                        {cardContent[clickedBox].timeAgo}</span></p>
                    <div className="flex items-center space-x-2">
                        <img src={Briefcase} alt="logo" className="w-10 h-7" />
                        <p>Remote</p>
                    </div>
                    <div className="flex items-center space-x-4 m-2">
                        <Button
                            onClick={handleOpen}
                            className="bg-gradient-to-r from-[#3626A7] via-[#657ED4] to-[#3626A7] 
                        hover:from-[#657ED4] hover:via-[#3626A7] hover:to-[#657ED4] text-white 
                        font-poppins text-lg w-32 h-11 p-0 gap-2 rounded-3xl border border-[#FF8400]">
                            Apply
                        </Button>
                        <button className="rounded-3xl bg-[#3626A7] text-white flex w-28 h-11 
                    justify-center items-center flex-shrink-0">Save</button>
                    </div>
                    <h2 className="text-black font-poppins text-2xl text-left m-2">About the job</h2>
                    <p className="text-left m-2">Lenskart  is building a new product using MERN stack - an all in one business operation platform for SMEs. You will be the right fit, if you have a keen eye for details and high standards for code quality and efficiency, creating innovative new features and maintaining existing ones. Responsibilities: Developing user interface components and implementing them following well-known React.js workflows. Building reusable components and front-end libraries for future use. Optimizing components for maximum performance across a vast array of web-capable devices and browsers Integration of the front-end and back-end aspects of the web application Requirements: Min 2+ years of experience in developing modern web applications using MERN Stack and Typescript. Experience with MongoDB,Nodejs framework and Reactjs Strong proficiency in with OOPs concepts and Typescript Good understanding of Database schema, design, optimization, scalability. Great communication skills, a strong... work ethic. Ownership of the product from start to finish. Ability to learn new technologies quickly. You must be located in Bangalore and be able to come to office. *** Recommeded**** Experience with AWS, microservices,Devops Experience building mobile apps on MongoDB, GraphQL Expert level understanding of the HTML DOM and underlying event model Prior Open source contributions Experience building responsive designs Job Perks Get to work on new product from stratch implementing MERN stack on web and mobile. Open and embracing culture for the latest hot technologies. A competitive salary and holidays Company has roots in Silicon Valley, CA. Lenskart focuses on Enterprise Software, B2B, Small and Medium Businesses, and Startups.</p>
                    <div className="flex items-center space-x-4 m-1 rounded-2xl bg-[#657ED4] h-24">
                        <img src={Lenskart} alt="logo" className="bg-[#F2F2F2] p-2 ml-2" />
                        <p className="text-gray-200 font-inter text-2xl">Lenskart
                            <span className="text-[#005F59] font-inter text-base"><br></br> 296,495 followers</span></p>
                        <button className="rounded-2xl bg-[#3626A7] text-[#FFFFFF] flex w-20 h-11 
                    justify-center items-center">Follow</button>
                    </div>
                    <h2 className="text-black font-poppins text-2xl text-left m-2">About the company</h2>
                    <p className="text-left m-2">Lenskart is Asia’s largest eyewear company serving 40 Million people - helping them see better and lead better quality lives. We have more than 1500 omnichannel stores across 175 cities in India, Singapore and Dubai. Our aim is to serve One Billion eyes by 2025 globally. And in this journey, we want to go beyond vision correction to transform the way people see and experience the world. That’s our new purpose - and we can only get there through cutting-edge technology and exceptional people.</p>
                </>
            )}
        </div>
    );

    return (
        <div className="flex flex-wrap items-center justify-center bg-white">
            <div className="w-full md:w-1/3 mt-4 space-y-2 mb-4">
                <p className="text-black font-inter text-left text-40 font-normal capitalize">
                    Jobs based on your profile 197 results
                </p>
                {leftSideContent}
            </div>
            {rightSideContent}

            {/* First Part Start */}
            <Dialog open={open} handler={() => handleCloseDialog()}>
                <div className="flex items-center space-x-4 m-4">
                    <p className="text-black font-inter text-3xl leading-normal text-left">Apply to Lenskart</p>
                    <img src={Cross} alt="logo" className="w-3 h-3 ml-auto m-4" onClick={() => handleCloseDialog()} />
                </div>
                <img src={Line7} alt="logo" className="w-11/12 h-0.5 bg-[#000000] m-4" />
                <p className="text-black font-inter text-2xl text-left text-center m-4">Resume</p>
                <p className="text-black font-inter text-l text-left text-center m-4 mt-2">Be sure to include an updated resume</p>
                <div className="flex items-center justify-center w-836 h-20 rounded-3xl bg-[#DCE1F6] m-6">
                    <p className="text-black font-inter text-xl text-center">name of pdf.pdf</p>
                </div>
                <div className="flex items-center justify-center w-836 h-20 rounded-3xl bg-[#DCE1F6] m-6">
                    <p className="text-black font-inter text-xl text-center">name of pdf.pdf</p>
                </div>
                <div className="flex items-center justify-center w-836 h-20 rounded-3xl bg-[#DCE1F6] m-6">
                    <p className="text-black font-inter text-xl text-center">name of pdf.pdf</p>
                </div>
                <div className="flex items-center space-x-2 m-8">
                    <button className="text-white font-poppins text-lg w-64 h-16 p-0 gap-2 rounded-3xl border border-[#FF8400] bg-[#3626A7]">
                        Upload Resume
                    </button>
                    <p className="text-xs">PDF(2MB)</p>
                    <p className="text-[#3626A7] font-poppins font-semibold text-l">Show 3 more resumes</p>
                    <img src={Down} alt="logo" />
                </div>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Back</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOpen2}>
                        <span>Next</span>
                    </Button>
                </DialogFooter>
            </Dialog>
            {/* First Part End */}

            {/* Second Part Start */}
            <Dialog open={open2} handler={() => handleCloseDialog2()}>
                <div className="flex items-center space-x-4 m-4">
                    <p className="text-black font-inter text-3xl leading-normal text-left">Review your application</p>
                    <img src={Cross} alt="logo" className="w-3 h-3 ml-auto m-4" onClick={() => handleCloseDialog2()} />
                </div>
                <img src={Line7} alt="logo" className="w-11/12 h-0.5 bg-[#000000] m-4" />
                <p className="text-black font-inter text-2xl text-left text-center m-4">Contact info</p>
                <p className="text-black font-inter text-l text-left text-center m-4 mt-2">Be sure to include an updated resume</p>
                <div className="flex items-center justify-center w-836 h-20 rounded-3xl bg-[#DCE1F6] m-6">
                    <p className="text-black font-inter text-xl text-center">User profile card </p>
                </div>
                <div className="flex items-center justify-center w-836 h-20 rounded-3xl bg-[#DCE1F6] m-6">
                    <p className="text-black font-inter text-xl text-center">Email Address/Mobile number</p>
                </div>
                <div className="flex items-center justify-center w-836 h-20 rounded-3xl bg-[#DCE1F6] m-6">
                    <p className="text-black font-inter text-xl text-center">Resume</p>
                </div>
                <div className="flex items-center space-x-2 m-8">
                    <p className="text-[#3626A7] font-poppins font-semibold text-l">Show 3 more resumes</p>
                    <img src={Down} alt="logo" />
                </div>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen22}
                        className="mr-1"
                    >
                        <span>Back</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOpen3}>
                        <span>Submit application</span>
                    </Button>
                </DialogFooter>
            </Dialog>
            {/* Second Part End */}

            {/* Third Part Start */}
            <Dialog open={open3} handler={() => handleCloseDialog3()}>
                <div className="flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-1/2 mt-4 bg-[#FBFBFF] rounded-3xl flex flex-col items-center justify-center">
                        <img src={Cross} alt="logo" className="w-3 h-3 ml-auto m-4" onClick={() => handleCloseDialog3()} />
                        <img src={SentLenskart} alt="logo" className="w-80 h-64 flex-shrink-0 bg-white m-4" />
                        <p className="text-black text-center font-poppins font-semibold text-xl m-8">
                            Your application was sent to Lenskart !
                        </p>
                        <img src={Line7} alt="logo" className="w-11/12 h-0.5 bg-[#000000] m-4" />
                        <button className="flex items-center justify-center w-40 h-10 p-0 md:p-0 m-4 flex-shrink-0 rounded-3xl text-[#FFFFFF] bg-[#657ED4]">
                            View More Jobs
                        </button>
                    </div>
                </div>
            </Dialog>
            {/* Third Part End */}
        </div>
    )
}

export default Third;