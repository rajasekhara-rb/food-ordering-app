import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { BaseURLContext } from "../components/AuthContext";
import { notify } from "../components/ToastNotification";
import { Spinner1 } from "../components/Spinners";
import NothingToShow from "./NothingToShowPage";
// import { Link } from "react-router-dom";

const RestaurantsListPage = () => {

    const baseUrl = useContext(BaseURLContext);
    const [restaurants, setRestaurants] = useState([]);
    // console.log(restaurants)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getRestaurants = async () => {
            try {
                setIsLoading(true)
                await axios.get(`${baseUrl}/restaurant/`,
                    // {
                    //     headers: {
                    //         Authorization: "Bearer " + localStorage.getrestaurant("jwt")
                    //     }
                    // }
                ).then((res) => {
                    // console.log(res)
                    notify(res)
                    setRestaurants(res.data.restaurants)
                    setIsLoading(false)
                })
            } catch (error) {
                console.log(error);
                notify(error)
            }
        }

        getRestaurants()
    }, [baseUrl]);

    return (
        <>
            {isLoading ? (<Spinner1 />) : (

                <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                    {
                        restaurants.length > 0? (
                            restaurants?.map((restaurant) => {
                                return (
                                    // <Link to={`${restaurant._id}`}>
                                    <div class="flex flex-col rounded-lg bg-white sm:flex-row" key={restaurant._id}>
                                        {/* <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src={restaurant.restaurant_photo} alt="" /> */}
                                        <div class="flex w-full flex-col px-4 py-4">
                                            <span class="font-semibold text-lg">Restaurant Name: {restaurant.name}</span>
                                            <span class="float-right text-grey-400">Address: {restaurant.address}</span>
                                            <span class="float-right text-grey-600">Timings: {restaurant.opening_time + " - " + restaurant.closing_time}</span>
                                            <p class="text-sm font-semibold">Id: {restaurant._id}</p>
                                        </div>
                                    </div>
                                    // </Link>
                                )
                            })
                        ) : (
                            <NothingToShow />
                        )
                    }

                </div>
            )}
        </>
    )
}

export default RestaurantsListPage;