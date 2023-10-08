import React from "react";
import { Link, Outlet } from "react-router-dom";

const LoginPage = () => {
    return (
        <>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                    to="/login/customer"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Customer Login
                </Link>
                <Link
                    to="/login/restaurant"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Restaurant Login
                </Link>

            </div>

            <div>
                <Outlet />
            </div>
        </>
    )
}

export default LoginPage;