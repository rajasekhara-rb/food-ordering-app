import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { notify } from "../components/ToastNotification";

const UnauthorizedPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const error = { status: 401, data: { message: "Unauthorized User" } }
        notify(error)
        setTimeout(() => {
            navigate("/")
        }, 3000);
    })

    return (
        <>
            <main className="grid min-h-full place-items-center bg-red-200 px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-6xl font-semibold text-red-600">401</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Unauthorized</h1>
                    <p className="mt-6 text-base leading-7 text-red-600">Sorry, You dont have permission to view the page you’re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default UnauthorizedPage;