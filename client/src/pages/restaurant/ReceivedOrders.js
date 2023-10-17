import React, { useContext, useEffect, useState } from "react";
import { BaseURLContext, RestaurantContext } from "../../components/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

const ReceivedOrdersPage = () => {
    const baseUrl = useContext(BaseURLContext);
    const { restaurantDetails } = useContext(RestaurantContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                await axios.get(`${baseUrl}/order/restaurnat/?restaurant_id=${restaurantDetails._id}`,
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("jwt")
                        }
                    }
                ).then((res) => {
                    setOrders(res.data.orders)
                })

            } catch (error) {
                console.log(error)
            }
        }

        getOrders()
    }, [baseUrl]);

    const acceptOrCancelOrder = async (e, id, status) => {
        e.preventDefault();
        const order_status = status
        try {
            await axios.patch(`${baseUrl}/order/${id}`,
                { order_status },
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("jwt")
                    }
                }
            ).then((res) => {
                // setOrders(res.data.orders)
                alert(res.data)
            })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {/* <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                {
                    orders ? (
                        orders?.map((item) => {
                            return (
                                <Link to={`${item._id}`}>
                                    <div class="flex flex-col rounded-lg bg-white sm:flex-row" key={item._id}>
                                        <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src={item.item_photo} alt="" />
                                        <div class="flex w-full flex-col px-4 py-4">
                                            <span class="font-semibold">{item.item_name}</span>
                                            <span class="float-right text-grey-400">{item.item_description}</span>
                                            <span class="float-right text-grey-600">&#8377; {item.item_price}</span>
                                            <p class="text-lg font-bold">{item.order_status}</p>
                                        </div>
                                    </div>
                                </Link>

                            )
                        })
                    ) : (
                        "No orders"
                    )
                }

            </div> */}

            <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                <ul role="list" class="divide-y divide-gray-100">
                    {
                        orders ? (
                            orders?.map((item) => {
                                return (
                                    <>
                                        <Link to={`${item._id}`}>
                                            <li class="flex justify-between gap-x-6 py-5">
                                                <div class="flex min-w-0 gap-x-4">
                                                    <img
                                                        class="h-12 w-12 flex-none rounded-5 bg-gray-50"
                                                        src={item.item_photo}
                                                        alt="" />
                                                    <div class="min-w-0 flex-auto">
                                                        <p class="text-sm font-semibold leading-6 text-gray-900">{item.item_name + "__" + item.item_description}</p>
                                                        {/* <p class="text-sm font-semibold leading-6 text-gray-900">{item.item_name + "__" + item.item_description}</p> */}
                                                        <p class="mt-1 truncate text-xs leading-5 text-gray-500">Order Id: {item._id}</p>
                                                    </div>
                                                </div>
                                                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                    <p class="text-sm leading-6 text-gray-900">{item.order_status}</p>
                                                    <p class="mt-1 truncate text-xs leading-5 text-gray-500">Qty {item.item_quantity}</p>
                                                    {/* <p class="mt-1 text-xs leading-5 text-gray-500">Last seen <time datetime="2023-01-23T13:23Z">3h ago</time></p> */}
                                                </div>
                                            </li>
                                        </Link>
                                        <div className="flex">
                                            <button
                                                onClick={(e) => {
                                                    acceptOrCancelOrder(e, item._id, "Order Accepted")
                                                }}
                                                // type="submit"
                                                className="flex m-5 w-full justify-center rounded-md bg-indigo-600 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Accept the Order
                                            </button>

                                            <button
                                                onClick={(e) => {
                                                    acceptOrCancelOrder(e, item._id, "Order Cancelled by Restaurant")
                                                }}
                                                // type="submit"
                                                className="flex m-5 w-full justify-center rounded-md bg-red-600 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                            >
                                                Cancel the Order
                                            </button>

                                            <button
                                                onClick={(e) => {
                                                    acceptOrCancelOrder(e, item._id, "Delivered")
                                                }}
                                                // type="submit"
                                                className="flex m-5 w-full justify-center rounded-md bg-yellow-600 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                                            >
                                                Order Delivered
                                            </button>
                                        </div>

                                        <hr class="h-px my-4 bg-gray-700 border-0 dark:bg-gray-700"></hr>
                                    </>

                                )
                            })
                        ) : (
                            "No orders"
                        )
                    }

                </ul>
            </div>



        </>
    )
}

export default ReceivedOrdersPage;