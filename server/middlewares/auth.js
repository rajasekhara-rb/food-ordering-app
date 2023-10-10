import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

// define a middlware function for authenticating users 
const authenticateUser = async (req, res, next) => {
    let token;
    // check if req.headers contains authorization headers starting with bearer 
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            // if req.headers.authorization starts with bearer then get token by splitting 
            token = req.headers.authorization.split(' ')[1];

            // verify token 
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // using id from the decoded 
            req.user = await User.findById(decoded.id).select('-password');
            // console.log(req.user)
            next()

        } else {
            res.status(401);
            throw new Error("Unauthorized")
        }
    } catch (error) {
        res.status(401);
        throw new Error("Unauthorized")
    }
}

export {
    authenticateUser
}