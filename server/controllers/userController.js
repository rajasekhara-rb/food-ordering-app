import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/userModel.js';

// defining a function to register the user

const registerUser = async (req, res) => {
    // get the admin infor the the req.body 
    const { name, email, password, roles } = req.body;

    try {
        // check if the user exists 
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            res.status(400);
            throw new Error("User already exists");
        }

        const user = await User.create({
            name,
            email,
            password,
            roles,
        })

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                roles: user.roles,
            })

        }
        else {
            res.status(400);
            throw new Error({ error: error.message, msg: "Invalid user data" })
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// define a function to login the user 
const loginUser = async (req, res) => {
    const { email, password, role } = req.body;

    try {
        // check if the user exist 
        const user = await User.findOne({ email: email });
        // if user exists comparing the password with saved password using bcrypt
        if (user && (await bcrypt.compare(password, user.password))) {
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                roles: user.roles,
                token: await generateToken(user._id)
            })
        } else {
            res.status(400);
            throw new Error("Invalid credentials");
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// define a function to generate token 
const generateToken = async (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    })
}

// define a function to getme data 
const getMe = async (req, res) => {
    const { _id, name, email } = await User.findById(req.user._id);
    res.status(400).json({
        _id,
        name,
        email,
    });
}

export {
    registerUser,
    loginUser,
    getMe,
}
