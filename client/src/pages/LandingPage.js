import React, { useContext, useEffect } from "react";
import Hero from "../components/Hero";
import AboutUs from '../components/AboutUs'
import Meals from "../components/Meals";
import Testimonials from "../components/Testimonials";
import { AuthContext } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";
// import ContactPage from "./ContactPage";

const LandingPage = () => {

    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        setIsLoggedIn(JSON.parse(localStorage.getItem("user"))?.loggedAs);
        if (isLoggedIn === "customer") {
            navigate("/customer")
        } else if (isLoggedIn === "admin") {
            navigate("/restaurant")
        } else {
            navigate("/")
        }
    }, [isLoggedIn, setIsLoggedIn, navigate])

    return (
        <>
            <Hero />
            <AboutUs />
            <Meals />
            <Testimonials />
            {/* <ContactPage/> */}
        </>
    )
}

export default LandingPage;