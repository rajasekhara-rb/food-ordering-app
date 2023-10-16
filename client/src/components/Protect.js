// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// const Protect = (props) => {
//     //initialize navigation hook
//     const navigate = useNavigate();

//     //Extract the Component props from passed props
//     const { Component } = props;

//     //perform an action to check if localstorage contain email id 
//     useEffect(() => {
//         //check if there is email data available in localstorage
//         const data = localStorage.getItem("email");

//         //if the data is not available,navigate to /register route
//         if (!data) {
//             navigate("/register");
//         }
//     }, [navigate])

//     //render the protect Component passed it as prop
//     return (
//         <Component />
//     )
// }

// export default Protect;


// import React from 'react';
// import { Route, redirect as Redirect } from 'react-router-dom';
// const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
//     <Route
//         {...rest}
//         render={(props) =>
//             isAuthenticated ? (
//                 <Component {...props} />
//             ) : (
//                 <Redirect to="/login" />
//             )
//         }
//     />
// );
// export default PrivateRoute;

const Protected = (props) => {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem("jwt");
        // console.log(loggedAs);
        if (!login) {
            navigate("/login");
        }
    })

    return (
        <>
            <Component />
        </>
    )
}


const OnlyCustomerProtected = (props) => {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem("jwt");
        let loggedAs = JSON.parse(localStorage.getItem("user"))?.loggedAs;
        // console.log(loggedAs);
        if (login) {
            if (loggedAs === "admin") {
                navigate("/unauthorized");
            }
        } else {
            navigate("/login");
        }

    })

    return (
        <>
            <Component />
        </>
    )
}



const OnlyAdminProtected = (props) => {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem("jwt");
        let loggedAs = JSON.parse(localStorage.getItem("user"))?.loggedAs;
        // console.log(loggedAs);
        if (login) {
            if (loggedAs === "customer") {
                navigate("/unauthorized");
            }
        } else {
            navigate("/login/");
        }

    })

    return (
        <>
            <Component />
        </>
    )
}

export {
    Protected,
    OnlyCustomerProtected,
    OnlyAdminProtected,
}