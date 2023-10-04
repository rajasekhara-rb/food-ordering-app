import mongoose from "mongoose";

// defining schema for the restaurant model 
const restaurantSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Restaurant name is mandatory"]
    },
    address: {
        type: String,
        requited: [true, "Restaurant address is mandatory"]
    },
    opening_time: {
        type: String,
        required: [true, "Opening time is mandatory"]
    },
    closing_time: {
        type: String,
        required: [true, "Closing time is mandatory"]
    },
    admin_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
    }
},
    {
        timestamps: true
    }
);

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;