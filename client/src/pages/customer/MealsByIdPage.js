import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BaseURLContext } from "../../components/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { notify } from "../../components/ToastNotification.js";
import { Spinner2 } from "../../components/Spinners";



const MealsByIdPage = () => {
    const baseUrl = useContext(BaseURLContext);
    const [item, setItem] = useState({});
    // console.log(item)
    const [quantity, setQty] = useState(1);
    // console.log(quantity);

    const [isLoading, setIsLoading] = useState(true)

    const { id } = useParams();
    const navigate = useNavigate();

    const [restaurantDetails, setRestaurantDetails] = useState({});


    useEffect(() => {
        // function for fetching the item 
        const fetchItem = async () => {
            try {
                setIsLoading(true)
                await axios.get(`${baseUrl}/fooditems/${id}`,
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("jwt")
                        }
                    }
                ).then(async (res) => {
                    notify(res)
                    setItem(res.data.fooditem);
                    // function for fetching the restaurant details 
                    // setIsLoading(true)
                    await axios.get(`${baseUrl}/restaurant/${res.data.fooditem.restaurant_id}`,
                        {
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem("jwt")
                            }
                        }
                    ).then((res) => {
                        // notify(res)
                        setRestaurantDetails(res.data.restaurant);
                        setIsLoading(false)
                    })
                    // setIsLoading(false)
                })

            } catch (error) {
                notify(error)
                console.log(error)
            }
        }

        fetchItem()
    }, [id, baseUrl]);

    // function to add item & quantity to the cart 
    const addToCart = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${baseUrl}/cart/`,
                {
                    item_id: id,
                    quantity: quantity,
                },
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("jwt")
                    }
                }
            ).then((res) => {
                notify(res)
                // alert("Added to the cart");
                setTimeout(() => {
                    navigate("/customer/cart");
                }, 3000);
            })

        } catch (error) {
            notify(error)
            console.log(error);
            // alert(error.message);
        }
    }




    return (
        <>
            {
                isLoading ? (
                    <Spinner2 />
                ) : (
                    <div className="bg-white">
                        <div className="pt-6 flex">
                            {/* <nav aria-label="Breadcrumb">
                        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            {product.breadcrumbs.map((breadcrumb) => (
                                <li key={breadcrumb.id}>
                                    <div className="flex items-center">
                                        <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                            {breadcrumb.name}
                                        </a>
                                        <svg
                                            width={16}
                                            height={20}
                                            viewBox="0 0 16 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-5 w-4 text-gray-300"
                                        >
                                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                        </svg>
                                    </div>
                                </li>
                            ))}
                            <li className="text-sm">
                                <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                    {product.name}
                                </a>
                            </li>
                        </ol>
                    </nav> */}

                            {/* Image gallery */}
                            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:gap-x-4 lg:px-4">
                                <div className="aspect-h-4 aspect-w-3 h-50 hidden overflow-hidden rounded-lg lg:block">
                                    <img
                                        src={item.item_photo}
                                        alt={item.item_name}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>

                            </div>

                            {/* Product info */}
                            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{item.item_name}</h1>
                                </div>

                                {/* Options */}
                                <div className="mt-4 lg:row-span-3 lg:mt-0">
                                    <h2 className="sr-only">Product information</h2>
                                    <p className="text-3xl tracking-tight text-gray-900">&#8377; {item.item_price}</p>

                                    {/* Reviews */}
                                    {/* <div className="mt-6">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                className={classNames(
                                                    reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                    'h-5 w-5 flex-shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                                    <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        {reviews.totalCount} reviews
                                    </a>
                                </div>
                            </div> */}

                                    <form className="mt-10">
                                        {/* Colors */}
                                        {/* <div>
                                    <h3 className="text-sm font-medium text-gray-900">Color</h3>

                                    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                                        <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                                        <div className="flex items-center space-x-3">
                                            {product.colors.map((color) => (
                                                <RadioGroup.Option
                                                    key={color.name}
                                                    value={color}
                                                    className={({ active, checked }) =>
                                                        classNames(
                                                            color.selectedClass,
                                                            active && checked ? 'ring ring-offset-1' : '',
                                                            !active && checked ? 'ring-2' : '',
                                                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                                        )
                                                    }
                                                >
                                                    <RadioGroup.Label as="span" className="sr-only">
                                                        {color.name}
                                                    </RadioGroup.Label>
                                                    <span
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            color.class,
                                                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                                                        )}
                                                    />
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div> */}

                                        {/* Sizes */}
                                        {/* <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                            Size guide
                                        </a>
                                    </div>

                                    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                            {product.sizes.map((size) => (
                                                <RadioGroup.Option
                                                    key={size.name}
                                                    value={size}
                                                    disabled={!size.inStock}
                                                    className={({ active }) =>
                                                        classNames(
                                                            size.inStock
                                                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                            active ? 'ring-2 ring-indigo-500' : '',
                                                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                                        )
                                                    }
                                                >
                                                    {({ active, checked }) => (
                                                        <>
                                                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                                            {size.inStock ? (
                                                                <span
                                                                    className={classNames(
                                                                        active ? 'border' : 'border-2',
                                                                        checked ? 'border-indigo-500' : 'border-transparent',
                                                                        'pointer-events-none absolute -inset-px rounded-md'
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <span
                                                                    aria-hidden="true"
                                                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                >
                                                                    <svg
                                                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                        viewBox="0 0 100 100"
                                                                        preserveAspectRatio="none"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                    </svg>
                                                                </span>
                                                            )}
                                                        </>
                                                    )}
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div> */}

                                        <div>
                                            <label htmlFor="qunatity" className="block text-sm font-medium leading-6 text-gray-900">
                                                Order Quantity
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    onChange={(e) => { setQty(parseInt(e.target.value)) }}
                                                    min="1"
                                                    max="100"
                                                    value={quantity}
                                                    // defaultValue="1"
                                                    id="qunatity"
                                                    name="qunatity"
                                                    type="number"
                                                    autoComplete="qunatity"
                                                    required
                                                    className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        {
                                            item?.item_quantity > 0 ? (
                                                <button
                                                    onClick={addToCart}
                                                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                >
                                                    Add to Cart
                                                </button>
                                            ) : (
                                                <button
                                                    disabled
                                                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                >
                                                    Out of Stock
                                                </button>
                                            )
                                        }

                                        {/* <button
                                    onClick={deleteItem}
                                    className="mt-1 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Delete
                                </button> */}
                                    </form>
                                </div>

                                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                                    {/* Description and details */}
                                    <div>
                                        <h3 className="sr-only">Description</h3>

                                        <div className="space-y-6">
                                            <p className="text-base text-gray-900">{item.item_description}</p>
                                        </div>
                                    </div>

                                    {/* <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {product.highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400">
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div> */}

                                    <div className="mt-10">
                                        {/* <h2 className="text-sm font-medium text-gray-900">Avilability</h2> */}
                                        <div className="mt-4 space-y-6">
                                            {item.item_quantity > 0 ? (
                                                <p className="text-xl font-medium text-green-700">In Stock :{item.item_quantity}</p>
                                            ) : (
                                                <p className="text-xl font-medium text-red-700">Out of Stock</p>
                                            )}
                                            {/* <p className="text-xl text-gray-600">{item.avilability ? ("In Stock") : ("Out Of Stock")}</p> */}
                                        </div>
                                        <div className="mt-4 space-y-2">
                                            <p className="text-xl text-dark-900 my-2">Restaurnt Details</p>
                                            <p className="text-lg text-gray-600">Id: {restaurantDetails._id}</p>
                                            <p className="text-lg text-gray-600">Name :{restaurantDetails.name}</p>
                                            <p className="text-lg text-gray-600">Address :{restaurantDetails.address}</p>
                                            <p className="text-lg text-gray-600">Timing :{restaurantDetails.opening_time + "-" + restaurantDetails.closing_time}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default MealsByIdPage;