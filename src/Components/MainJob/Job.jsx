// import React from 'react';
import { NavbarWithSearch } from "../Home/Navbar";
import Second from "../Job/Second";
// import Third from "../Job/Third";
import PricingCard from "../Job/PricingCard";
// import TestimonialCard from "../Job/TestimonialCard";

export default function Job() {
  return (
    <>
        <NavbarWithSearch/>
        <Second/>
        {/* <Third/> */}
        <PricingCard/>
        {/* <TestimonialCard/> */}
    </>
  )
}
