import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const CustomerSideBar = () => {

    const { isLoggedIn } = useContext(AuthContext);


    return (
        <>
            <div className="flex m-auto">
                <Link to="/customer" className="mx-2">
                    <a
                        // href="/customer"
                        className={classNames(
                            isLoggedIn ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                    // aria-current={item.current ? 'page' : undefined}
                    >
                        Dashboard
                    </a>
                    {/* <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-1 mx-4">Dashboard</button> */}
                </Link>
                <Link to="/customer/orders" className="mx-2">
                    <a
                        // href="/customer"
                        className={classNames(
                            isLoggedIn ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                    // aria-current={item.current ? 'page' : undefined}
                    >
                        Orders History
                    </a>
                    {/* <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-1 mx-4">Orders History</button> */}
                </Link>
                <Link to="/customer/cart" className="mx-2">
                    <a
                        // href="/customer"
                        className={classNames(
                            isLoggedIn ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                    // aria-current={item.current ? 'page' : undefined}
                    >
                        My Cart
                    </a>
                    {/* <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-1 mx-4">My Cart</button> */}
                </Link>
                {/* <Link to="checkout">
                    <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-1">Checkout</button>
                </Link> */}
            </div>
        </>
    )
}

export default CustomerSideBar;