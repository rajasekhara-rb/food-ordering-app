import orderModel from '../models/orderModel.js';

const createOrder = async (req, res) => {
    try {

    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message })
    }
}

const getOrders = async (req, res) => {
    try {

    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message })
    }
}

const getOrderByOrderId = async (req, res) => {
    try {

    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message })
    }
}

const getOrderByCustomerId = async (req, res) => {
    try {

    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message })
    }
}

const getOrderByRestaurnatId = async (req, res) => {
    try {

    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message })
    }
}

export {
    createOrder,
}