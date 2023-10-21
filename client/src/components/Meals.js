import React from "react";

const products = [
    {
        id: 1,
        name: 'Idli',
        href: '/customer',
        imageSrc: 'https://i0.wp.com/swadishta.de/wp-content/uploads/2021/01/Idle.jpg?fit=1200%2C800&ssl=1g',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '50',
        description: 'South Indian',
    },
    // More products...
    {
        id: 2,
        name: 'Full Meals',
        href: '/customer',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlmq5_6GZb7h3kXPh6til7uAMbZRCFqBBfQ&usqp=CAU',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '100',
        description: 'South Indian',
    },
    {
        id: 3,
        name: 'Dosa',
        href: '/customer',
        imageSrc: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '80',
        description: 'South Indian',
    },
    {
        id: 4,
        name: 'Biryani',
        href: '/customer',
        imageSrc: 'https://static.toiimg.com/photo/102774697.cms',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '50',
        description: 'South Indian',
    },
]

const Meals = () => {
    return (
        <>
            <div className="relative isolate px-6 pt-14 lg:px-8 flex-auto w-70">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 flex flex-row">

                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Meals
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">

                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">

                            <div className="bg-white">
                                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Best Selling Meals</h2>

                                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                        {products.map((product) => (
                                            <div key={product.id} className="group relative">
                                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                                    <img
                                                        src={product.imageSrc}
                                                        alt={product.imageAlt}
                                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                    />
                                                </div>
                                                <div className="mt-4 flex justify-between">
                                                    <div>
                                                        <h3 className="text-sm text-gray-700">
                                                            <a href={product.href}>
                                                                <span aria-hidden="true" className="absolute inset-0" />
                                                                {product.name}
                                                            </a>
                                                        </h3>
                                                        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                                                    </div>
                                                    <p className="text-sm font-medium text-gray-900">&#8377;{product.price}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Meals;