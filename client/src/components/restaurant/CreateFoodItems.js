import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseURLContext } from "../AuthContext";
import axios from "axios";
import { notify } from "../ToastNotification";

const CreateFoodItems = () => {

    const navigate = useNavigate();

    const baseUrl = useContext(BaseURLContext);
    const [foodItem, setFoodItem] = useState({ restaurant_id: localStorage.getItem("restaurant_id") });
    // console.log(foodItem)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFoodItem({ ...foodItem, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (foodItem.item_name && foodItem.item_quantity && foodItem.item_price
                && foodItem.item_description && foodItem.item_photo) {
                await axios.post(`${baseUrl}/fooditems/new`, foodItem,
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("jwt")
                        }
                    }).then((res) => {
                        // alert(res.data.message);
                        notify(res)
                        navigate("/restaurant/fooditems")
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
                            <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Create Food Items
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="#" method="POST">
                                <div>
                                    <label htmlFor="item_name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Item Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            id="item_name"
                                            name="item_name"
                                            type="text"
                                            autoComplete="item_name"
                                            required
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="item_quantity" className="block text-sm font-medium leading-6 text-gray-900">
                                        Quantity
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            id="item_quantity"
                                            name="item_quantity"
                                            type="number"
                                            autoComplete="item_quantity"
                                            required
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="item_price" className="block text-sm font-medium leading-6 text-gray-900">
                                        Price
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            id="item_price"
                                            name="item_price"
                                            type="number"
                                            autoComplete="item_price"
                                            required
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="item_description" className="block text-sm font-medium leading-6 text-gray-900">
                                        Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            onChange={handleChange}
                                            id="item_description"
                                            name="item_description"
                                            type="textarea"
                                            autoComplete="item_description"
                                            required
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="item_photo" className="block text-sm font-medium leading-6 text-gray-900">
                                        Picture
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            id="item_photo"
                                            name="item_photo"
                                            type="url"
                                            autoComplete="item_photo"
                                            required
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        onClick={handleSubmit}
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Create
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateFoodItems;