import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BaseURLContext } from "../../components/AuthContext";
import axios from "axios";
import { notify } from "../../components/ToastNotification";
import { Spinner1 } from "../../components/Spinners";
import NothingToShow from "../NothingToShowPage";


const FoodItemsPage = () => {

    const [products, setProducts] = useState([]);
    const baseUrl = useContext(BaseURLContext);
    // console.log(products)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchRestaurantFoodItems = async () => {
            const restaurant_id = localStorage.getItem("restaurant_id");
            setIsLoading(true)
            try {
                await axios.post(`${baseUrl}/fooditems/byrestaurant`, { restaurant_id },
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("jwt")
                        }
                    }
                ).then((res) => {
                    setProducts(res.data.fooditems)
                    setIsLoading(false)
                    notify(res)
                    // console.log(res.data)
                })
            } catch (error) {
                console.log(error);
                notify(error)
            }
        }

        fetchRestaurantFoodItems()
    }, [baseUrl])
    return (
        <>
            {isLoading ? (<Spinner1 />) : (
                products.length > 0? (
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                            <h2 className="sr-only">Products</h2>

                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                {products.map((product) => (
                                    <Link to={`/restaurant/fooditems/${product._id}`} key={product._id} className="group">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                            <img
                                                src={product.item_photo}
                                                alt={product.item_name}
                                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                                            />
                                        </div>
                                        <h3 className="mt-4 text-sm text-gray-700">{product.item_name}</h3>
                                        <p className="mt-1 text-lg font-medium text-gray-900">&#8377; {product.item_price}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <NothingToShow/>
                )
            )}
        </>
    )
}

export default FoodItemsPage;