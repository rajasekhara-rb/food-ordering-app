import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protect = (props) => {
    //initialize navigation hook
    const navigate = useNavigate();

    //Extract the Component props from passed props
    const { Component } = props;

    //perform an action to check if localstorage contain email id 
    useEffect(() => {
        //check if there is email data available in localstorage
        const data = localStorage.getItem("email");

        //if the data is not available,navigate to /register route
        if (!data) {
            navigate("/register");
        }
    }, [navigate])

    //render the protect Component passed it as prop
    return (
        <Component />
    )
}

export default Protect;