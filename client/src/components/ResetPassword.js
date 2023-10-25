import React, { useContext, useEffect, useState } from "react";
import Logo from "../images/logo.png"
import { Link, useNavigate, useParams } from "react-router-dom";
import { BaseURLContext } from "./AuthContext";
import axios from "axios";
import { notify } from "./ToastNotification";

const ResetPassword = () => {
    const baseUrl = useContext(BaseURLContext);
    const [password, setPassword] = useState({});
    const { token } = useParams();
    // console.log(token)
    const [valid, setValid] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const verifyToken = async () => {
            try {
                setValid(false)
                await axios.get(`${baseUrl}/user/verifylinkexpiry/${token}`)
                    .then((res) => {
                        if (res.status === 200) {
                            notify(res);
                            setValid(true)
                        } else {
                            notify("Link was expired, Try again")
                            setValid(false)
                        }
                        // navigate("/login")
                    })
            } catch (error) {
                notify(error)
                console.log(error)
            }
        }
        verifyToken()
    }, [baseUrl, token, navigate])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (password.password && password.confirmpassword) {
                await axios.post(`${baseUrl}/user/resetpassword/${token}`, { password: password.password }, {
                }).then((res) => {
                    notify(res);
                    navigate("/login");
                })
            } else {
                // alert("Email and password are mandatory")
                notify("Password is not matching")
            }
        } catch (error) {
            // alert("Something went wrong");
            notify(error)
            console.log(error)
        }
    }


    return (
        <>
            {valid ? (
                <div className="flex flex-row items-center"
                >
                    <div className="flex-auto w-50">
                        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <img
                                    className="mx-auto h-20 w-auto"
                                    src={Logo}
                                    alt="Your Company"
                                />
                                <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                    Reset Password
                                </h2>
                            </div>

                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form className="space-y-3" action="#" method="POST">
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                }}
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="password"
                                                required
                                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                            Confirm Password
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                }}
                                                id="confirmpassword"
                                                name="confirmpassword"
                                                type="password"
                                                autoComplete="confirmpassword"
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
                                            Submit
                                        </button>
                                    </div>
                                </form>
                                <p className="mt-4 text-center text-sm text-gray-500">
                                    Alredy a member?{' '}
                                    <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                        Login
                                    </Link>
                                </p>
                                <p className="mt-4 text-center text-sm text-gray-500">
                                    Not a member?{' '}
                                    <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                        Register Now
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>s
                </div>
            ) : (
                <div className="flex flex-row items-center"
                >
                    <div className="flex-auto w-50">
                        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <img
                                    className="mx-auto h-20 w-auto"
                                    src={Logo}
                                    alt="Your Company"
                                />
                                <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                    Invalid Link
                                </h2>
                            </div>

                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <p className="mt-4 text-center text-sm text-gray-500">
                                    Alredy a member?{' '}
                                    <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                        Login
                                    </Link>
                                </p>
                                <p className="mt-4 text-center text-sm text-gray-500">
                                    Not a member?{' '}
                                    <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                        Register Now
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>s
                </div>
            )}

        </>
    )
}

export default ResetPassword;