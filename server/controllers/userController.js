import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/userModel.js';
import sendResetPasswordEmail from '../utils/sendPasswordResetMail.js';
// import Restaurant from '../models/restaurantModel.js';

// defining a function to register the user

const registerUser = async (req, res) => {
    // get the admin infor the the req.body 
    const { name, email, password, role } = req.body;

    try {
        // check if the user exists 
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            // if user already exists and role as admin 
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
                // if user already exists as customer 
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
            // if user does not exists 
            if (role === "admin") {
                // if registering as admin 
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
                // if registering as customer 
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
                // checking the role if login as customer 
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
                    // if role is admmin 
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


// define a function to reset the password 
const forgotPassword = async (req, res) => {
    const email = req.body.email;
    try {
        const user = await User.findOne({ email: email })
        if (user !== null) {
            // generaring a token reset password link 
            forgotToken = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: "5m" });
            // setting the token in db 
            await User.updateOne({ email: email }, { $set: { forgotToken: forgotToken } });
            // genetating the reset password link email 
            sendResetPasswordEmail(user.name, user.email, forgotToken);
            res.status(200).json({ message: "Check your registered email for reset password link" });
        } else {
            res.status(400).json({ message: "Invalid Email" });
        }
    } catch (error) {
        res.status(500)
        throw new Error(error);
    }
}

// defining a function to verify the reset password link expiry 
const verifyLinkExpiry = async (req, res) => {
    const token = req.params.token;
    try {
        const userTokenData = await User.findOne({ forgotToken: token });
        if (userTokenData !== null) {
            const decodedData = jwt.decode(userTokenData.forgotToken);
            const currentTime = Math.round(new Date() / 1000);
            if (currentTime <= decodedData.exp) {
                res.status(200).json({ message: "Token verified Successfully" });
            } else {
                res.status(400).json({ message: "Link has been expired" });
            }
        } else {
            res.status(400).json({ message: "Link was already used" });
        }

    } catch (error) {
        res.status(500)
        throw new Error(error);
    }
}

// defining a function to update old password with new one in database
const resetPassword = async (req, res) => {
    try {
        const { token } = req.params;
        const password = req.body.password;
        const decodedData = jwt.decode(token)
        await User.findOneAndUpdate(
            { email: decodedData.email },
            { $set: { password: password, forgotToken: "" } },
            { new: true }
        );

        res.status(200).json({ message: "Password Reset Successful" })
    } catch (error) {
        res.status(500)
        throw new Error(error);
    }
}

export {
    registerUser,
    loginUser,
    getMe,
    forgotPassword,
    verifyLinkExpiry,
    resetPassword,
}
