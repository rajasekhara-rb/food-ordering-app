import React from "react";
import { Link } from "react-router-dom";

const CustomerSideBar = () => {
    return (
        <>
            <div className="flex m-1">
                <Link to="" className="mx-2">
                    <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-1 mx-4">Dashboard</button>
                </Link>
                <Link to="orders" className="mx-2">
                    <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-1 mx-4">Orders History</button>
                </Link>
                <Link to="cart" className="mx-2">
                    <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-1 mx-4">My Cart</button>
                </Link>
                {/* <Link to="checkout">
                    <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-1">Checkout</button>
                </Link> */}
            </div>
        </>
    )
}

export default CustomerSideBar;