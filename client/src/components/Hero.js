import React from "react";
import { Link } from "react-router-dom";
import hero from '../images/hero.png'

const Hero = () => {
    return (
        <>
            <div className="flex flex-row items-center">
                <div className="relative isolate px-6 pt-14 lg:px-8 flex-auto w-80">

                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Order Your Favourite
                                Food Easily
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                We deliver 100% organic and fresh food. You can
                                order right now!
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    to="/login"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </Link>
                                <Link to="/menu" className="text-sm font-semibold leading-6 text-gray-900">
                                    Our Menu <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-6 text-lg leading-8 text-gray-600">
                            <ul className="flex flex-row items-center justify-between">
                                <li className="flex flex-row items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 mx-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    <p>Select your favourite food and order!</p>
                                </li>
                                <li className="flex flex-row items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 mx-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <p>Select your receiving place</p>
                                </li>
                                <li className="flex flex-row items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 mx-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                    </svg>

                                    <p>
                                        Get your food within 01-02 hours
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm flex-auto w-20">
                    <img
                        className="mx-auto h-50 w-auto"
                        src={hero}
                        alt="hero img"
                    />
                </div>
            </div>


        </>
    )
}

export default Hero;