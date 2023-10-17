import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import RestaurantSidebar from "./RestaurantSidebar";
import { RestaurantContext, UserContext } from "../../components/AuthContext";

const RestaurantPage = () => {
    const { restaurantDetails, setRestaurantDetails } = useContext(RestaurantContext);
    const { userDetails, setUserDetails } = useContext(UserContext);

    // setUserDetails(localStorage.getItem("user"))
    // setRestaurantDetails(localStorage.getItem("restaurant_details"));

    return (
        <>
            <div className="flex w-100 h-80vh">
                {/* <div className="w-1/5 relative"
                style={{ position: "absolute" }}
                >
                    <RestaurantSidebar />
                </div> */}
                <div className="w-full mx-2 overflow-y-scroll abolute"
                // style={{ overflowY: "scroll", position: "relative" }}
                >
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default RestaurantPage;