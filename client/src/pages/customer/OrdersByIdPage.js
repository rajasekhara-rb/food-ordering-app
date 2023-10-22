import React, { useContext, useEffect, useState } from "react";
import { BaseURLContext } from "../../components/AuthContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import { notify } from "../../components/ToastNotification";
import { Spinner2 } from "../../components/Spinners";

const OrdersByIdPage = () => {

    const baseUrl = useContext(BaseURLContext);
    const [order, setOrder] = useState({});
    // console.log(item)

    const { id } = useParams();
    // const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const fetchItem = async () => {
            try {
                setIsLoading(true)
                await axios.get(`${baseUrl}/order/order/${id}`,
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("jwt")
                        }
                    }
                ).then((res) => {
                    setIsLoading(false)
                    notify(res)
                    setOrder(res.data);
                })

            } catch (error) {
                console.log(error);
                notify(error)
            }
        }

        fetchItem()
    }, [id, baseUrl]);

    return (
        <>
            {
                isLoading ? (
                    <Spinner2 />
                ) : (

                    <div className="bg-white">
                        <div className="pt-6">
                            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
                                <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                                    <img
                                        src={order.item_photo}
                                        alt={order.item_name}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            </div>

                            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{order.item_name}</h1>
                                </div>

                                <div className="mt-4 lg:row-span-3 lg:mt-0">
                                    <h2 className="sr-only">Product information</h2>
                                    <p className="text-3xl tracking-tight text-gray-900">&#8377; {order.item_price}</p>
                                </div>

                                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                                    <div>
                                        <h3 className="sr-only">Description</h3>
                                        <div className="space-y-6">
                                            <p className="text-base text-gray-900">{order.item_description}</p>
                                        </div>
                                    </div>

                                    <div className="mt-5">
                                        <h2 className="text-sm font-medium text-gray-900">Order Details</h2>
                                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 mt-5">
                                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">{order.order_status}</h1>
                                        </div>
                                        <div className="mt-4 space-y-6">
                                            <p className="text-sm text-gray-600">Order Id : {order._id}</p>
                                        </div>
                                        <div className="mt-4 space-y-6">
                                            <p className="text-sm text-gray-600">Order Quantity : {order.item_quantity}</p>
                                        </div>
                                        <div className="mt-4 space-y-6">
                                            <p className="text-sm text-gray-600">Price : {order.item_price}</p>
                                        </div>
                                        <div className="mt-4 space-y-6">
                                            <p className="text-sm text-gray-600">Amount : {order.amount}</p>
                                        </div>
                                        <div className="mt-4 space-y-6">
                                            <p className="text-sm text-gray-600">Restaurnat Id : {order.restaurant_id}</p>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <h3 className="text-sm font-medium text-gray-900">User Details</h3>
                                        <div className="mt-2">
                                            <span className="text-gray-600">Name: {order.user_name?.toUpperCase()}</span>
                                        </div>
                                        <div className="mt-2">
                                            <span className="text-gray-600">Email: {order.user_email?.toLowerCase()}</span>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <h3 className="text-sm font-medium text-gray-900">Billing / Shipping Address</h3>
                                        <div className="mt-4">
                                            <ul 
                                            // role="list" 
                                            className="list-disc space-y-2 pl-4 text-sm">
                                                <li className="text-gray-400">
                                                    <span className="text-gray-600">{order.shipping_address}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}

export default OrdersByIdPage;