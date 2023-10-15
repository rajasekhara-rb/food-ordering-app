import Order from '../models/orderModel.js';

const createOrder = async (req, res) => {
    try {
        const { cart, address } = req.body;

        // const order = await Order.create({
        //     userId: req.user._id,
        //     user_name: req.user.name,
        //     user_email: req.user.email,
        //     shipping_address: address,
        //     items: cart.items,
        //     sub_total: cart.sub_total,
        //     restaurant_id: "",
        //     order_status: "Order Placed",
        // });
        if (cart && cart.items.length > 0) {
            cart.items?.map(async (item) => {
                await Order.create({
                    userId: req.user._id,
                    user_name: req.user.name,
                    user_email: req.user.email,
                    shipping_address: address,
                    // items: cart.items,
                    item_id: item.item_id,
                    item_name: item.item_name,
                    item_price: item.item_price,
                    item_quantity: item.item_quantity,
                    restaurant_id: item.restaurant_id,
                    amount: item.item_price * item.item_quantity,
                    order_status: "Order Placed",
                });
            })
            res.status(201).json({ message: "Order placed" });
        } else {
            res.status(400).json({ message: "No items in the cart" });
        }

        // await order.save();

    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message })
    }
}

const getOrders = async (req, res) => {
    try {
        const orders = Order.find({});

        res.status(201).json({ orders })

    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message })
    }
}

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
    const restaurant_id = req.query.restaurant_id;
    try {
        const orders = await Order.find({ restaurant_id });
        res.status(201).json({ orders });
    } catch (error) {
        res.status(500);
        throw new Error({ error: error.message })
    }
};

const orderStatusUpdate = async (req, res) => {
    const {order_status} = req.body;
    const orderId = req.params.id;
    try {
        const orders = await Order.findByIdAndUpdate(
            orderId,
            { order_status: order_status },
            { new: true }
        );
        res.status(201).json({ orders });
    } catch (error) {
        console.log(error);
        res.status(500);
        throw new Error({ error: error.message })
    }
};


export {
    createOrder,
    getOrders,
    getOrderByOrderId,
    getOrderByCustomerId,
    getOrderByRestaurnatId,
    orderStatusUpdate,
}