import Restaurant from '../models/restaurantModel.js';

// define a function to register Restaurant
const registerRestaurant = async (req, res) => {

    const { name, address, opening_time, closing_time } = req.body;

    try {
        const restaurant = new Restaurant({
            name,
            address,
            opening_time,
            closing_time,
            admin_id: req.user._id
        });
        const saveRestaurant = await restaurant.save();
        res.status(201).json(saveRestaurant);

        if (!saveRestaurant) {
            res.status(400);
            throw new Error("Restaurant not saved please try again")
        }

    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message })
    }

}

// define a function to get all restaurnts 
const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(201).json({ restaurants });
    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message })
    }
}

// define a function to get one restaurant by id 
const getRestaurantById = async (req, res) => {
    const id = req.params.id;
    // console.log(id)
    try {
        const restaurant = await Restaurant.findById(id);
        if (!restaurant) {
            res.status(400);
            throw new Error("Restaurant not saved please try again")
        }
        res.status(201).json({ restaurant });
    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message })
    }
}

// define a function to update the restaurant details 
const updateRestaurant = async (req, res) => {
    const id = req.params.id;
    const { name, address, opening_time, closing_time } = req.body;
    try {
        const updatedRestaurant = {
            name,
            address,
            opening_time,
            closing_time
        }

        await Restaurant.findByIdAndUpdate(id, updatedRestaurant, { new: true });
        res.status(201).json({ message: "Restaurant Details updated" })
    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message })
    }
}
// define an funciton to delete the restaurant 
const deleteRestaurant = async (req, res) => {
    const id = req.params.id;
    try {
        res.json({ message: "Currently not allowing to delete the restaurant." })
    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message })
    }
}
export {
    registerRestaurant,
    getAllRestaurants,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant,
}