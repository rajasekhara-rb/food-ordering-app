import React, { useContext, useEffect, useState } from "react";
import Logo from '../../images/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, BaseURLContext, RestaurantContext, UserContext } from "../../components/AuthContext";
import axios from 'axios';
import { notify } from "../../components/ToastNotification";

const RestaurantLoginPage = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const { setRestaurantDetails } = useContext(RestaurantContext);
    const { setUserDetails } = useContext(UserContext);
    const navigate = useNavigate();

    const baseUrl = useContext(BaseURLContext);
    const [user, setuser] = useState({ role: "admin" });
    // console.log(user)

    useEffect(() => {
        if (isLoggedIn) {
            // notify("You are already Logged In")
            navigate("/restaurant/")
        } else {
            navigate("/login/restaurant")
            // notify("You are not logged in. Please Login.")
        }

    }, [isLoggedIn, navigate])

    const loginAsDemoUser = (e) => {
        e.preventDefault()
        const demoAdmin = {
            email: "admin@example.com",
            password: "123456",
            role: "admin"
        }
        setuser({
            email: demoAdmin.email,
            password: demoAdmin.password,
            role: demoAdmin.role
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setuser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (user.email && user.password) {
                await axios.post(`${baseUrl}/user/login`, user,
                    // {
                    //     headers: {
                    //         Authorization: "Bearer " + localStorage.getItem("jwt")
                    //     }
                    // }
                ).then(async (res) => {
                    // if (res.data) {
                    // }
                    notify(res)
                    if (res.data.token) {
                        localStorage.setItem("jwt", res.data.token);
                        localStorage.setItem("user", JSON.stringify(res.data));
                        localStorage.setItem("user_id", res.data._id);
                        setUserDetails(res.data);

                        if (res.data.loggedAs === "admin") {
                            await axios.get(`${baseUrl}/restaurant/restuarantbyadmins`,
                                {
                                    headers: {
                                        Authorization: "Bearer " + localStorage.getItem("jwt"),
                                    }
                                }).then((res) => {
                                    if (res.data) {
                                        // console.log(res.data)
                                        setRestaurantDetails(res.data);
                                        localStorage.setItem("restaurant_details", JSON.stringify(res.data))
                                        localStorage.setItem("restaurant_id", res.data._id)
                                        localStorage.setItem("restaurant_admin_id", res.data.admin_id)
                                        // alert(res.data.message)
                                        // notify(res)
                                        setTimeout(() => {
                                            navigate("/restaurant/")
                                        }, 3000);
                                    } else {
                                        navigate("/restaurant/create")
                                    }
                                })
                        } else {
                            // alert(res.data.message)
                            notify(res)
                        }
                        setIsLoggedIn(true);
                    } else {
                        notify(res)
                        // alert(res.data.message)
                        // alert("Login Failed");
                    }
                    // if (!loggedin) {
                    //     alert(loggedin.error)
                    // }
                    // if (loggedin.data.token) {
                    //     // console.log(loggedin.data)
                    //     if (loggedin.data.roles.includes("admin")) {
                    //         localStorage.setItem("jwt", loggedin);
                    //         setIsLoggedIn(true);
                    //         navigate("/restaurant/");
                    //     } else {
                    //         setIsLoggedIn(false);
                    //         localStorage.removeItem("jwt")
                    //         navigate("/login/customer");
                    //         alert("You do not have access to login to restaurants. Try Login as customer");
                    //     }
                    // } else {
                    //     alert(loggedin.data.error)
                    //     navigate("/login");
                    // }
                })
            } else {
                // alert("Email and password are mandatory")
                notify("Email and password are mandatory")
            }
        } catch (error) {
            notify(error)
            // alert("Something went wrong");
            console.log(error)
        }

    }

    return (
        <>
            <div className="flex flex-row items-center">
                <div className="flex-auto w-50">
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                className="mx-auto h-20 w-auto"
                                src={Logo}
                                alt="Your Company"
                            />
                            <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Sign in to your Restaurant
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-3" action="#" method="POST">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            value={user.email}
                                            onChange={handleChange}
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                        <div className="text-sm">
                                            <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                Forgot password?
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            value={user.password}
                                            onChange={handleChange}
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        onClick={loginAsDemoUser}
                                        className="flex w-full justify-center rounded-md bg-yellow-600 px-3 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Use Demo User Crendentials
                                    </button>
                                </div>

                                <div>
                                    <button
                                        onClick={handleSubmit}
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>

                            <p className="mt-4 text-center text-sm text-gray-500">
                                Not a member?{' '}
                                <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    Register Now
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* <div className="flex-auto w-50 bg-light-600">
                    <img
                        className="mx-auto h-auto w-30"
                        src={foodimg}
                        alt="foodimg"
                    />
                </div> */}

            </div>
        </>
    )
}

export default RestaurantLoginPage;