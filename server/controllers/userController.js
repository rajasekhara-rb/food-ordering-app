import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/userModel.js';

// defining a function to register the user

const registerUser = async (req, res, next) => {
    // get the admin infor the the req.body 
    const { name, email, password, role } = req.body;

    try {
        // check if the user exists 
        const userExists = User.findOne({ email: email });
        if (!userExists) {
            const user = await User.create({
                name,
                email,
                password,
                role,
            }).then(
                (user) => {
                    res.status(201).json({
                        _id: user.id,
                        name: user.name,
                        email: user.email,
                    })
                    next()
                }
                ).catch((error) => {
                res.status(400);
                throw new Error({ error: error.message, msg: "Invalid user data" })
            })
        } else {
            res.status(400);
            throw new Error("User already exists")
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

export default registerUser;