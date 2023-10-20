import React, { useContext, useState } from "react";
import Logo from '../../images/logo.png';
import { useNavigate } from "react-router-dom";
import { BaseURLContext, RestaurantContext } from "../AuthContext";
import axios from "axios";
import { notify } from "../ToastNotification";

const CreateRestaurant = () => {

    const { setRestaurantDetails } = useContext(RestaurantContext);
    const navigate = useNavigate();

    const baseUrl = useContext(BaseURLContext);
    const [restaurant, setRestaurant] = useState({});
    console.log(restaurant)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRestaurant({ ...restaurant, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (restaurant.name && restaurant.address && restaurant.opening_time && restaurant.closing_time) {
                await axios.post(`${baseUrl}/restaurant/register`, restaurant,
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("jwt")
                        }
                    }).then((res) => {
                        // alert("Restaurant Created");
                        notify(res)
                        setRestaurantDetails(res.data);
                        localStorage.setItem("restaurant_details", JSON.stringify(res.data))
                        localStorage.setItem("restaurant_id", res.data._id)
                        localStorage.setItem("restaurant_admin_id", res.data.admin_id)
                        navigate("/restaurant")
                    })
            } else {
                // alert("All field are mandatory to fill")
                notify("All field are mandatory to fill")
            }
        } catch (error) {
            console.log(error);
            // alert("Something went wrong")
            notify(error)
        }

    }
    return (
        <>
            <div className="flex flex-row items-center">
                <div className="flex-auto w-50">
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                className="mx-auto h-20 w-auto"
                                src={Logo}
                                alt="Your Company"
                            />
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Create Restaurant
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="#" method="POST">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Restaurant Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            required
                                            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>


                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Restaurant Address
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            onChange={handleChange}
                                            id="address"
                                            name="address"
                                            type="textarea"
                                            autoComplete="address"
                                            required
                                            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="opening_time" className="block text-sm font-medium leading-6 text-gray-900">
                                        Opening Time
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            id="opening_time"
                                            name="opening_time"
                                            type="time"
                                            autoComplete="opening_time"
                                            required
                                            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="closing_time" className="block text-sm font-medium leading-6 text-gray-900">
                                        Opening Time
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            id="closing_time"
                                            name="closing_time"
                                            type="time"
                                            autoComplete="closing_time"
                                            required
                                            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        onClick={handleSubmit}
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Create Restaurant
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

                {/* <div className="flex-auto w-50 bg-light-600">
                    <img
                        className="mx-auto h-auto w-30"
                        src={foodimg}
                        alt="foodimg"
                    />
                </div> */}

            </div>
        </>
    )
}

export default CreateRestaurant;