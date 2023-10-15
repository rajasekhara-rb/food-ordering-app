import React, { useContext } from "react";
import Hero from "../components/Hero";
import AboutUs from '../components/AboutUs'
import Meals from "../components/Meals";
import Testimonials from "../components/Testimonials";
import { AuthContext } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    setIsLoggedIn(JSON.parse(localStorage.getItem("user"))?.loggedAs);

    const navigate = useNavigate();

    if (isLoggedIn === "customer") {
        navigate("/customer")
    } else if (isLoggedIn === "admin") {
        navigate("/restaurant")
    } else {
        navigate("/")
    }

    return (
        <>
            <Hero />
            <AboutUs />
            <Meals />
            <Testimonials />
        </>
    )
}

export default LandingPage;