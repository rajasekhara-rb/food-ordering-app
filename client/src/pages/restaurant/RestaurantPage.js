import React from "react";
import { Link, Outlet } from "react-router-dom";
import AddRestaurantPage from './AddRestaurantPage'

const RestaurantPage = () => {
    return (
        <>
       
            <Outlet />
        </>
    )
}

export default RestaurantPage;