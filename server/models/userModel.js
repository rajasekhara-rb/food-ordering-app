import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// defining the schema for the user model
const userSchema = mongoose.Schema({
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
    roles: {
        type: Array,
    },
    admin: {
        type: Boolean,
        default: false
    },
    forgotToken: {
        type: String,
    }
},
    {
        timestamps: true
    }
);

//Define ->middle ware function which run before saving the data into user document
userSchema.pre("save", async function (next) {
    //check if password fields is chnaged or not
    if (!this.isModified('password')) {
        next();
    } else {
        //Generate a salt for password 
        const salt = await bcrypt.genSalt(10);

        //has the user password with generated salt
        this.password = await bcrypt.hash(this.password, salt);
    }
})

const User = mongoose.model("User", userSchema);
export default User;