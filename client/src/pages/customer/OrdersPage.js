import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BaseURLContext } from "../../components/AuthContext";

const OrdersPage = () => {
    const navigate = useNavigate();
    const baseUrl = useContext(BaseURLContext);
    const [orders, setOrders] = useState([]);
    console.log(orders);

    useEffect(() => {
        const getOrders = async () => {
            try {
                await axios.get(`${baseUrl}/order/customer`,
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

    return (
        <>
            <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
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

            </div>
        </>
    )
}

export default OrdersPage;