import React from "react";
import { Link, Outlet } from "react-router-dom";
import AddRestaurantPage from './AddRestaurantPage'
import RestaurantSidebar from "./RestaurantSidebar";

const RestaurantPage = () => {
    return (
        <>
            <div className="flex">
                <div className="w-1/5">
                    <RestaurantSidebar />
                </div>
                <div className="w-4/5 mx-2 overflow-x">
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default RestaurantPage;