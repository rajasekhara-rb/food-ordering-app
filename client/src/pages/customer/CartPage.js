import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BaseURLContext } from "../../components/AuthContext";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { notify } from "../../components/ToastNotification";
import { Spinner1 } from "../../components/Spinners";


const CartPage = () => {
    const baseUrl = useContext(BaseURLContext);
    const [cart, setCart] = useState({});
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getCart = async () => {
            try {
                setIsLoading(true)
                await axios.get(`${baseUrl}/cart/`,
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("jwt")
                        }
                    }
                ).then((res) => {
                    notify(res)
                    setCart(res.data.cart)
                    setIsLoading(false)
                })

            } catch (error) {
                notify(error)
                console.log(error)
            }
        }

        getCart()
    }, [baseUrl]);

    const removeItemsFromTheCart = async (id) => {
        // e.preventDefault();
        // ?item_id=${item_id}
        try {
            await axios.delete(`${baseUrl}/cart/item/${id}`,
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("jwt")
                    }
                },
            ).then((res) => {
                setCart(res.data.cart);
                // alert("Item removed from the cart");
                notify(res)
                // navigate("/customer/cart")
            })

        } catch (error) {
            console.log(error)
            notify(error)
            // alert(error)
        }
    }

    return (
        <>
            {isLoading ? (<Spinner1 />) : (
                <>
                    {/* <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 overflow-hidden">
                    <div class="absolute inset-0 overflow-hidden">
                        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <div class="pointer-events-auto w-screen max-w-md">
                                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"> */}
                    < div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div class="flex items-start justify-between">
                            <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart #{cart?._id}</h2>
                            <div class="ml-3 flex h-7 items-center">
                                <button type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                                    <span class="absolute -inset-0.5"></span>
                                    <span class="sr-only">Close panel</span>
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {cart ? (
                            // {
                            cart.items?.map((item) => {
                                return <div class="mt-8" key={item.item_id}>
                                    <div class="flow-root">
                                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                                            <li class="flex py-6">
                                                <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <img
                                                        src={item.item_photo}
                                                        alt={item.item_name}
                                                        class="h-full w-full object-cover object-center"></img>
                                                </div>

                                                <div class="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div class="flex justify-between text-base font-medium text-gray-900">
                                                            <h3>
                                                                <a href={`/customer/fooditems/${item.item_id}`}> {item.item_name}</a>
                                                            </h3>
                                                            <p class="ml-4">&#8377;{item.item_price}</p>
                                                        </div>
                                                        <p class="mt-1 text-sm text-gray-500">{item.item_description}</p>
                                                    </div>
                                                    <div class="flex flex-1 items-end justify-between text-sm">
                                                        <p class="text-gray-500">Qty {item.item_quantity}</p>

                                                        <div class="flex">
                                                            <button
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    removeItemsFromTheCart(item.item_id)
                                                                }
                                                                }

                                                                type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            })
                            // }
                        ) : (
                            "You  have no items in the cart"
                        )}

                    </div >

                    <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div class="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>&#8377;{cart?.sub_total}</p>
                        </div>
                        <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div class="mt-6">
                            {
                                cart?.items?.length > 0 ? (
                                    <Link to="/customer/checkout"
                                        class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</Link>
                                ) : ("Add items to cart to checkout")
                            }

                        </div>
                        <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                or
                                <button onClick={() => { navigate("/customer/") }} type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </button>
                            </p>
                        </div>
                    </div>
                    {/* </div >
        </div>
                        </div>
                    </div>
                </div>
            </div> */}
                </>

            )}
        </>
    )
}

export default CartPage;