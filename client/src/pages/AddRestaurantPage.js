import React from "react";
import { Link } from "react-router-dom";

const AddRestaurantPage = () => {
    return (
        <>
            <div className="flex flex-row items-center">
                <div className="relative isolate px-6 pt-14 lg:px-8 flex-auto w-80">

                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

                        <div className="text-center">
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Partner with Us at 0% commission for the 1st Year!
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                And get ads worth INR 1500. Valid for new restaurant partners in select cities.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Need help? Please email us
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    to="/restaurant/register"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Reigster Your Restaurant
                                </Link>

                                <Link
                                    to="/restaurant/login"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Login to view your existing Restaurants
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default AddRestaurantPage;