import mongoose from "mongoose";

// defining the schema for the customer model
const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is mandatory"]
    },
    email: {
        type: String,
        required: [true, "Email is mandatory"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is mandatory"]
    }
},
    {
        timestamps: true
    }
);

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;