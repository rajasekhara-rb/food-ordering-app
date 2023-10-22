import React from "react";

const RestaurantsListPage = () => {

    const baseUrl = useContext(BaseURLContext);
    const [restaurants, setRestaurants] = useState([]);

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getRestaurants = async () => {
            try {
                setIsLoading(true)
                await axios.get(`${baseUrl}/order/customer`,
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getrestaurant("jwt")
                        }
                    }
                ).then((res) => {
                    notify(res)
                    setRestaurants(res.data)
                    setIsLoading(false)
                })
            } catch (error) {
                console.log(error);
                notify(error)
            }
        }

        getRestaurants()
    }, [baseUrl]);

    return (
        <>
            {isLoading ? (<Spinner1 />) : (

                <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                    {
                        restaurants ? (
                            restaurants?.map((restaurant) => {
                                return (
                                    <Link to={`${restaurant._id}`}>
                                        <div class="flex flex-col rounded-lg bg-white sm:flex-row" key={restaurant._id}>
                                            <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src={restaurant.restaurant_photo} alt="" />
                                            <div class="flex w-full flex-col px-4 py-4">
                                                <span class="font-semibold">{restaurant.restaurant_name}</span>
                                                <span class="float-right text-grey-400">{restaurant.restaurant_description}</span>
                                                <span class="float-right text-grey-600">&#8377; {restaurant.restaurant_price}</span>
                                                <p class="text-lg font-bold">{restaurant.order_status}</p>
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
            )}
        </>
    )
}

export default RestaurantsListPage;