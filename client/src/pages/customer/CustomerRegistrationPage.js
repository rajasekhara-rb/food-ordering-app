import React, { useContext, useState } from "react";
import Logo from '../../images/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { BaseURLContext } from "../../components/AuthContext";
import axios from "axios";


const CustomerRegistrationPage = () => {
    const navigate = useNavigate();

    const baseUrl = useContext(BaseURLContext);
    const [user, setuser] = useState({});
    // console.log(user)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setuser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (user.name && user.email && user.password && user.confirmpassword) {
                if (user.password === user.confirmpassword) {
                    const newUser = {
                        name: user.name,
                        email: user.email,
                        password: user.password,
                        role: "cusomer",
                    }

                    await axios.post(`${baseUrl}/user/register`, newUser,
                        {
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem("jwt")
                            }
                        }
                    ).then((res) => {
                        if (res) {
                            alert(res.data.message);
                            navigate("/login/customer");
                        } else {
                            // alert("User registration failed try again")
                            alert(res.data.message);
                        }
                    }).catch((error) => {
                        console.log(error);
                        alert(error)
                    })
                } else {
                    alert("Password Not matching")
                }
            } else {
                alert("All fields are mandatory to fill")
            }
        } catch (error) {
            console.log(error);
            // alert(error)
        }

    }

    return (
        <>

            <div className="flex flex-row items-center">
                <div className="flex-auto w-50">
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                className="mx-auto h-20 w-auto"
                                src={Logo}
                                alt="Your Company"
                            />
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Register an user account
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="#" method="POST">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            required
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
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
                                    </div>
                                    <div className="mt-2">
                                        <input
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
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                            Confirm Password
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            id="confirmpassword"
                                            name="confirmpassword"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        onClick={handleSubmit}
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>

                            <p className="mt-10 text-center text-sm text-gray-500">
                                Already a member?{' '}
                                <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    Login Now
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

export default CustomerRegistrationPage;