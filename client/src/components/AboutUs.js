import React from "react";
import { Link } from "react-router-dom";
import about from '../images/about.png'

const AboutUs = () => {
    return (
        <>
            <div className="flex flex-row items-center">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm flex-auto w-30">
                    <img
                        className="mx-auto h-200 w-auto"
                        src={about}
                        alt="about img"
                    />
                </div>
                <div className="relative isolate px-6 pt-14 lg:px-8 flex-auto w-70">

                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 flex flex-row">

                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                We are the best quality
                                restaurant
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Find the best restaurants, cafés  in India, sourcing our ingredient locally, to celebrate lifes special moments by offering the best food, service and ambience in every home

                                If you want any food please login or sign up.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    to="/menu"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Our Menu
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* why choose us  */}
            <div className="relative isolate px-6 pt-14 lg:px-8 flex-auto w-70">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 flex flex-row">

                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Why choose us?
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            over 2 million people are happy with our service
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <div className="flex flex-col items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                                </svg>

                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"> Fresh food</h3>
                                <p className="mt-6 text-lg leading-8 text-gray-600">We server the best and fresh quality food</p>
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                </svg>
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"> Best offer</h3>
                                <p className="mt-6 text-lg leading-8 text-gray-600"> We give the best offer for our
                                    valuable customers</p>
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>

                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">Fast delivery</h3>
                                <p className="mt-6 text-lg leading-8 text-gray-600">We have delivery van for
                                    fast delivery</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default AboutUs;