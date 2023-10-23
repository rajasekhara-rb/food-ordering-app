import React from "react";
import { Link, Outlet } from "react-router-dom";

const LoginPage = () => {
    return (
        <div
            className="p-2"
            style={{
                backgroundImage: `url("https://m.media-amazon.com/images/I/71zpr7SCcaL._AC_UF894,1000_QL80_.jpg")`,
                // backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="mt-5 flex items-center justify-center gap-x-4 bg-white p-2 m-auto xl:w-1/3 lg:w-1/3 md:w-2/4 sm:1/4"
            >
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
            <div className="bg-white xl:w-1/3 lg:w-1/3 md:w-2/4 sm:1/4 m-auto p-1">
                <Outlet />
            </div>
        </div>
    )
}

export default LoginPage;