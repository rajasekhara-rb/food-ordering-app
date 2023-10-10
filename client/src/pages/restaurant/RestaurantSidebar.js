import React from "react";
import { Link } from "react-router-dom";

const RestaurantSidebar = () => {
    return (
        <>
            <div>
                <Link to="">
                    <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-1">Dashboard</button>
                </Link>
                <Link to="addfooditems">
                    <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-1">Add Food Items</button>
                </Link>
                <Link to="orders">
                    <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-1">Orders</button>
                </Link>


            </div>
        </>
    )
}

export default RestaurantSidebar;