import React from "react";
import Hero from "../components/Hero";
import AboutUs from '../components/AboutUs'
import Meals from "../components/Meals";
import Testimonials from "../components/Testimonials";

const LandingPage = () => {
    return (
        <>
            <Hero />
            <AboutUs />
            <Meals/>
            <Testimonials/>
        </>
    )
}

export default LandingPage;