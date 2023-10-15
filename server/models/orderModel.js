import mongoose from "mongoose";

const ordersSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "user id is required"],
        ref: "Customer",
    },
    user_name: {
        type: String,
        required: [true, "user name is required"],
    },
    user_email: {
        type: String,
        required: [true, "user email is required"],
    },
    // user: {
    //     userId: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         required: [true, "user name is required"],
    //     },
    //     name: {
    //         type: String,
    //         required: [true, "user name is required"],
    //     },
    //     email: {
    //         type: String,
    //         required: [true, "user name is required"],
    //     },
    // },
    shipping_address: {
        type: String,
    },
    item_id: { type: String },
    item_name: { type: String },
    item_price: { type: Number },
    item_quantity: { type: Number },
    amount: { type: Number },
    // items: [
    //     {
    //         item_id: { type: String },
    //         item_name: { type: String },
    //         item_price: { type: Number },
    //         item_quantity: { type: Number },
    //     }
    // ],
    // sub_total: {
    //     type: Number,
    //     default: 0
    // },
    restaurant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
    },
    order_status: {
        type: String,
    },
    modified_on: {
        type: Date,
        default: Date.now
    }
},
    {
        timestamps: true
    }
)

const Order = mongoose.model("Order", ordersSchema);
export default Order;