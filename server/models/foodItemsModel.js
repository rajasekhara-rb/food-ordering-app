import mongoose from "mongoose";

// defining the schema for the food items model 
const foodItemsSchema = mongoose.Schema({

    item_name: {
        type: String,
        required: [true, "Item name is required"],
    },
    item_description: {
        type: String,
    },
    item_photo: {
        type: String,
        required: [true, "Item photo is required"],
    },
    item_price: {
        type: Number,
        required: [true, "Item price is required"],
    },
    item_quantity: {
        type: Number,
        required: [true, "Item quantity is required"],
    },
    avilability: {
        type: String,
    }
},
    {
        timestamps: true
    }
)

const FoodItems = mongoose.model("FoodItems", foodItemsSchema);
export default FoodItems;