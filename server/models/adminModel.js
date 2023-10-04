import mongoose from "mongoose";

// defining the schema for the admin model
const adminSchema = mongoose.Schema({
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
    },
    restaurant_id: {
        type: String,
        required: [true, "Restaurant id is mandatory"]
    }
},
    {
        timestamps: true
    }
);

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;