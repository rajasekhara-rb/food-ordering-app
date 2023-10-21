import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { BaseURLContext } from "../../components/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner1 } from "../../components/Spinners";

const MealsPage = () => {

    const baseUrl = useContext(BaseURLContext);
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // function for fetching meals 
        const fetchMeals = async () => {
            // const restaurant_id = localStorage.getItem("restaurant_id");
            setIsLoading(true)
            try {
                await axios.get(`${baseUrl}/fooditems/all`,
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("jwt")
                        }
                    }
                ).then((res) => {
                    setMeals(res.data.fooditems)
                    setIsLoading(false)
                    // console.log(res.data)
                })
            } catch (error) {

            }
        }

        fetchMeals()
    }, [baseUrl])

    return (
        <>
            {
                isLoading ? (
                    <Spinner1/>
                ) : (
                    <div className="bg-white">
                        {/* <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"> */}
                        {/* <h2 className="sr-only">Products</h2> */}
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 m-5">
                            {meals.map((meal) => (
                                <Link to={`/customer/fooditems/${meal._id}`} key={meal._id} className="group">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                        <img
                                            src={meal.item_photo}
                                            alt={meal.item_name}
                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">{meal.item_name}</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-900">&#8377; {meal.item_price}</p>
                                    {meal.item_quantity > 0 ? (
                                        <p className="mt-1 text-lg font-medium text-green-900">Avilable :{meal.item_quantity}</p>
                                    ) : (
                                        <p className="mt-1 text-lg font-medium text-red-900">Out of Stock</p>
                                    )}
                                    {/* <button
                                className="mt-1 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Add to Cart
                            </button> */}
                                </Link>
                            ))}
                        </div>
                        {/* </div> */}
                    </div>
                )
            }

        </>
    )
}

export default MealsPage;