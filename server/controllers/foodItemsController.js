import FoodItem from "../models/foodItemsModel.js";

// define a function to add food items to the restaurant 
const addFoodItems = async (req, res) => {
    const { item_name, item_description, item_photo, item_price, item_quantity, restaurant_id } = req.body;
    try {
        const newFoodItem = new FoodItem({
            item_name,
            item_description,
            item_photo,
            item_price,
            item_quantity,
            restaurant_id,
        })

        const savedFoodItem = newFoodItem.save();

        if (!savedFoodItem) {
            res.status(400)
            throw new Error("Failed to add food item")
        }

        res.status(200).json({ message: "Food item saved", newFoodItem });

    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message });
    }
};

const getFoodItems = async (req, res) => {

    try {
        const fooditems = await FoodItem.find();
        res.status(200).json({ fooditems });
    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message });
    }
};

const getFoodItemById = async (req, res) => {
    const id = req.params.id;
    try {
        const fooditem = await FoodItem.findById(id);
        if (!fooditem) {
            res.status(400).json({ message: "food item not found" })
        } else {
            res.status(200).json({ fooditem })
        }
    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message });
    }
};

const getFoodItemsByRestaurantId = async (req, res) => {
    try {
        const fooditems = await FoodItem.find({ restaurant_id: req.body.restaurant_id });
        if (!fooditems) {
            res.status(400);
            throw new Error("food item not found")
        } else {
            res.status(200).json({ fooditems })
        }
    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message });
    }
};

const updateFoodItems = async (req, res) => {
    const id = req.params.id;
    const { item_name, item_description, item_photo, item_price, item_quantity } = req.body;
    try {
        const updatedFoodItem = {
            item_name,
            item_description,
            item_photo,
            item_price,
            item_quantity,
        }
        const footItem = await FoodItem.findByIdAndUpdate(id, updatedFoodItem, { new: true });
        res.status(200).json({ message: "food item updated", footItem })
    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message });
    }
};

const deleteFoodItems = async (req, res) => {
    const id = req.params.id;
    try {
        await FoodItem.deleteOne({ _id: id });
        res.status(200).json({ message: "Food item deleted" });
    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message });
    }
};

const changeAvilabilityOfFoodItems = async (req, res) => {
    try {
        const id = req.params.id;
        const { item_quantity, avilability } = req.body;
        const changeAvilability = {
            item_quantity,
            avilability,
        }

        const footItem = await FoodItem.findByIdAndUpdate(id, changeAvilability, { new: true });
        res.status(200).json({ message: "food item avilability & stock updated", footItem })

    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message });
    }
}

export {
    addFoodItems,
    getFoodItems,
    getFoodItemById,
    updateFoodItems,
    deleteFoodItems,
    getFoodItemsByRestaurantId,
    changeAvilabilityOfFoodItems,
}