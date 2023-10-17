import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const RestaurantSidebar = () => {

    const { isLoggedIn } = useContext(AuthContext);

    return (
        <>
            <div className="flex m-auto" >
                <Link to="/restaurant" className="mx-2">
                    <a
                        href="/"
                        className={classNames(
                            isLoggedIn ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                    // aria-current={item.current ? 'page' : undefined}
                    >
                        Dashboard
                    </a>
                    {/* <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-1">Dashboard</button> */}
                </Link>
                <Link to="/restaurant/fooditems" className="mx-2">
                    <a
                        href="/"
                        className={classNames(
                            isLoggedIn ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                    // aria-current={item.current ? 'page' : undefined}
                    >
                        Food Items
                    </a>
                    {/* <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-1">Dashboard</button> */}
                </Link>
                <Link to="/restaurant/addfooditems" className="mx-2">
                    <a
                        href="/"
                        className={classNames(
                            isLoggedIn ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                    // aria-current={item.current ? 'page' : undefined}
                    >
                        Add Food Items
                    </a>
                    {/* <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-1">Add Food Items</button> */}
                </Link>
                <Link to="/restaurant/orders" className="mx-2">
                    <a
                        href="/"
                        className={classNames(
                            isLoggedIn ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                    // aria-current={item.current ? 'page' : undefined}
                    >
                        Orders
                    </a>
                    {/* <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-1">Orders</button> */}
                </Link>


            </div>
        </>
    )
}

export default RestaurantSidebar;