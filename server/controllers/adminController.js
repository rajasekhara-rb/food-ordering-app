import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Admin from '../models/adminModel';

// defining a function to register the admin 

const registerAdmin = async (req, res, next) => {
    // get the admin infor the the req.body 
    const { name, email, password, restaurant_id } = req.body;

    try {
        // check if the admin exists 

    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

exports = {
    registerAdmin,
}
