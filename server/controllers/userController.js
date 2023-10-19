import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/userModel.js';
import Restaurant from '../models/restaurantModel.js';

// defining a function to register the user

const registerUser = async (req, res) => {
    // get the admin infor the the req.body 
    const { name, email, password, role } = req.body;

    try {
        // check if the user exists 
        const userExists = await User.findOne({ email: email });
        if (userExists) {

            if (role === "admin") {
                if (userExists.roles.includes(role)) {
                    res.status(400).json({ message: "User already exists" })
                } else {
                    await User.findByIdAndUpdate(userExists._id, {
                        $push: { roles: role },
                        admin: true,
                        // $set: { admin_password: password }
                        // $set:{isAdmin:true},
                    }, { new: true });
                    res.status(400).json({ message: "Admin access given to the user" })
                }
            } else if (role === "customer") {
                if (userExists.roles.includes(role)) {
                    res.status(400).json({ message: "User already exists" })
                } else {
                    await User.findByIdAndUpdate(userExists._id, {
                        $push: { roles: role },
                        // $set: { password: password }
                    }, { new: true });
                    res.status(400).json({ message: "User created successfully" })
                }
            } else {
                res.status(400).json({ message: "User already exists" });
                // throw new Error("User already exists");
            }
        } else {
            if (role === "admin") {
                const user = await User.create({
                    name,
                    email,
                    password,
                    roles: role,
                    admin: true
                })

                if (user) {
                    res.status(201).json({
                        message: "User registered Successfully",
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        roles: user.roles,
                        admin: user.admin
                    })

                }
                else {
                    res.status(400).json({ message: "User registraion failed" })
                    // throw new Error({ error: error.message, msg: "Invalid user data" })
                }
            } else {
                const user = await User.create({
                    name,
                    email,
                    password,
                    roles: role,
                })

                if (user) {
                    res.status(201).json({
                        message: "User registered Successfully",
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        roles: user.roles,
                        admin: user.admin,
                    })

                }
                else {
                    res.status(400).json({ message: "User registraion failed" })
                    // throw new Error({ error: error.message, msg: "Invalid user data" })
                }
            }
        }
    } catch (error) {
        res.status(500)
        // .json({ error: error.message })
        console.log(error)
        throw new Error(error);
    }
}

// define a function to login the user 
const loginUser = async (req, res) => {
    const { email, password, role } = req.body;

    try {
        // check if the user exist 
        const user = await User.findOne({ email: email });
        // if user exists comparing the password with saved password using bcrypt
        // if (!user) {
        //     res.status(400)
        //     // .json({ error: "Invalid Crendentials" })
        //     throw new Error("Invalid credentials");

        // } else {
        if (user) {
            if (user && await bcrypt.compare(password, user.password)) {
                if (role === "customer") {
                    if (user.roles.includes(role)) {
                        res.status(200).json({
                            message: "Logged in as customer",
                            loggedAs: role,
                            _id: user._id,
                            name: user.name,
                            email: user.email,
                            roles: user.roles,
                            admin: user.admin,
                            token: await generateToken(user._id)
                        })
                    } else {
                        res.status(401).json({ message: "Unauthorized" })
                    }
                } else if (role === "admin") {
                    if (user.roles.includes(role)) {
                        res.status(200).json({
                            message: "Logged in as admin",
                            loggedAs: role,
                            _id: user._id,
                            name: user.name,
                            email: user.email,
                            roles: user.roles,
                            admin: user.admin,
                            token: await generateToken(user._id)
                        })
                    } else {
                        res.status(401).json({ message: "Unauthorized" })
                    }
                }

            } else {
                res.status(400)
                    .json({ message: "Invalid Crendentials" })
                // throw new Error("Invalid credentials");
            }
        } else {
            res.status(400).json({ message: "Invalid Crendentials" })
        }

        // }
    } catch (error) {
        res.status(500)
        throw new Error(error);
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
    const { _id, name, email, roles, admin } = await User.findById(req.user._id);
    res.status(400).json({
        _id,
        name,
        email,
        roles,
        admin,
    });
}

export {
    registerUser,
    loginUser,
    getMe,
}
