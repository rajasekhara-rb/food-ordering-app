import React from "react";
import { Link, Outlet } from "react-router-dom";

const RegistrationPage = () => {
    return (
        <>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                    to="/register/customer/"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Register a Customer
                </Link>
                <Link
                    to="/register/restaurant"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Register a Restaurant
                </Link>

            </div>

            <div>
                <Outlet />
            </div>
        </>
    )
}

export default RegistrationPage;