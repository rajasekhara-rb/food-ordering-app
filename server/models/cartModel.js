import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        // required: [true, "user id is required"],
        ref: "Customer",
    },
    items: [
        {
            item_id: { type: String },
            item_name: { type: String },
            item_price: { type: Number },
            item_quantity: { type: Number },
            restaurant_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Restaurant",
            }
        }
    ],
    active: {
        type: Boolean,
        default: true,
    },
    modified_on: {
        type: Date,
        default: Date.now
    },
    sub_total: {
        type: Number,
        default: 0
    }
},
    {
        timestamps: true
    }
)

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;