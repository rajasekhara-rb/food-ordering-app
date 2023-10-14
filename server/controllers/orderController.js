import Order from '../models/orderModel.js';

const createOrder = async (req, res) => {
    try {
        const { cart, address } = req.body;

        const order = await Order.create({
            userId: req.user._id,
            user_name: req.user.name,
            user_email: req.user.email,
            shipping_address: address,
            items: cart.items,
            sub_total: cart.sub_total,
            restaurant_id: "",
            order_status: "Order Placed",
        });

        res.status(201).json(order);
        // await order.save();

    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message })
    }
}

// const getOrders = async (req, res) => {
//     try {
//         const orders = 

//     } catch (error) {
//         res.status(500);
//         throw new Error({ error: error.message })
//     }
// }

const getOrderByOrderId = async (req, res) => {
    const orderId = req.params.id;
    try {
        const order = await Order.findById(orderId);
        res.status(201).json(order);
    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message });
    }
}

const getOrderByCustomerId = async (req, res) => {
    try {
        const customerId = req.user._id;
        const orders = await Order.find({ userId: customerId });
        res.status(201).json({ orders });
    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message })
    }
}

const getOrderByRestaurnatId = async (req, res) => {
    try {
        const restaurantId = req.user._id;
        const orders = await Order.find({ restaurant_id: restaurantId });
        res.status(201).json({ orders });
    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message })
    }
};

const orderStatusUpdate = async (req, res) => {
    const status = req.body;
    try {
        const orderId = req.params.id;
        const orders = await Order.findByIdAndUpdate(
            { _id: orderId },
            { order_status: status },
            { new: true }
        );
        res.status(201).json({ orders });
    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message })
    }
};



export {
    createOrder,
    getOrderByOrderId,
    getOrderByCustomerId,
    getOrderByRestaurnatId,
    orderStatusUpdate,
}