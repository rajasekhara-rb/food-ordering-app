import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BaseURLContext } from "../AuthContext";
import { notify } from "../ToastNotification";
import { Spinner2 } from "../Spinners";

const ChangeAvilability = () => {

    const baseUrl = useContext(BaseURLContext);
    const [item, setItem] = useState({});
    // const [itemHistory, setItemHistory] = useState({})
    // console.log(item)
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value })
    }

    useEffect(() => {
        // function for getting the food item details
        const fetchItem = async () => {
            setIsLoading(true)
            try {
                await axios.get(`${baseUrl}/fooditems/${id}`,
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("jwt")
                        }
                    }
                ).then((res) => {
                    notify(res)
                    setItem(res.data.fooditem)
                    // setItemHistory(res.data.fooditem)
                    setIsLoading(false)
                })

            } catch (error) {
                console.log(error)
                notify(error)
            }
        }

        fetchItem()
    }, [id, baseUrl]);


    // useEffect(() => {
    //     const handleAvi = () => {
    //         const { item_name, item_description, item_price, item_photo, avilability,item_quantity } = item;
    //         if (item.avilability === "false") {
    //             setItem({
    //                 // item_name,
    //                 // item_price,
    //                 // item_description,
    //                 // item_photo,
    //                 avilability,
    //                 item_quantity
    //             })
    //         } 
    //         // else {
    //         //     // const { item_name, item_description, item_price, item_photo, avilability, item_quantity } = itemHistory;
    //         //     setItem({
    //         //         // item_name,
    //         //         // item_price,
    //         //         // item_description,
    //         //         // item_photo,
    //         //         avilability,
    //         //         item_quantity,
    //         //     })
    //         // }
    //     }
    //     handleAvi()
    // }, [item])


    // useEffect(() => {
    // function for updating the food item to db 
    const updateFoodItem = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`${baseUrl}/fooditems/${id}`, item,
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("jwt")
                    }
                }
            ).then((res) => {
                // setItem(res.data.fooditem)
                // alert(res.data.message);
                notify(res)
                navigate("/restaurant/fooditems")
            })

        } catch (error) {
            console.log(error)
            notify(error)
        }
    }

    // })


    return (
        <>
            {isLoading ? (<Spinner2 />) : (
                <div className="flex flex-row items-center">
                    <div className="flex-auto w-50">
                        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                    Change Avilability & Stock
                                </h2>
                            </div>

                            <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form className="space-y-3"
                                    action="/restaurant/fooditems/" method="PATCH"
                                >
                                    <div>
                                        <label htmlFor="item_name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Item Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                disabled
                                                onChange={handleChange}
                                                value={item.item_name}
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
                                        <label htmlFor="item_price" className="block text-sm font-medium leading-6 text-gray-900">
                                            Price
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                disabled
                                                value={item.item_price}
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
                                                disabled
                                                value={item.item_description}
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
                                                disabled
                                                value={item.item_photo}
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
                                        <label htmlFor="item_photo" className="block text-sm font-medium leading-6 text-gray-900">
                                            Avilability
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                value={item.avilability}
                                                onChange={handleChange}
                                                id="avilability"
                                                name="avilability"
                                                // type="text"
                                                autoComplete="avilability"
                                                required
                                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            >
                                                <option value="true">Avilable</option>
                                                <option value="false">Not Avilable</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="item_quantity" className="block text-sm font-medium leading-6 text-gray-900">
                                            Quantity
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                // disabled
                                                disabled={item.avilability === "true" ? (false) : (true)}
                                                onChange={handleChange}
                                                value={item.avilability === "false" ? (0) : (item.item_quantity)}
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
                                        <button
                                            onClick={updateFoodItem}
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Change Avilability & Stock
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ChangeAvilability;