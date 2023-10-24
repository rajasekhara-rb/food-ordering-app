import FoodItem from '../models/foodItemsModel.js';
import Order from '../models/orderModel.js';


// function to create a order 
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

        // if cart has items creating the order for each items 
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
                    item_description: item.item_description,
                    item_photo: item.item_photo,
                    item_quantity: item.item_quantity,
                    restaurant_id: item.restaurant_id,
                    amount: item.item_price * item.item_quantity,
                    order_status: "Order Placed",
                });

                // finding the food item from the db 
                const seletedItem = await FoodItem.findById(item.item_id);
                // reducing the avialble quantity by the order quantity
                await FoodItem.findByIdAndUpdate(item.item_id,
                    { item_quantity: seletedItem.item_quantity - JSON.parse(item.item_quantity) },
                    { new: true });
            })
            res.status(200).json({ message: "Order placed" });
        } else {
            res.status(400).json({ message: "No items in the cart" });
        }

        // await order.save();

    } catch (error) {
        res.status(500);
        throw new Error(error)
    }
}


// funciton to get orders 
const getOrders = async (req, res) => {
    try {
        const orders = Order.find({});
        res.status(201).json({ orders })

    } catch (error) {
        res.status(500);
        throw new Error(error)
    }
}


// function to get order by its id 
const getOrderByOrderId = async (req, res) => {
    const orderId = req.params.id;
    try {
        const order = await Order.findById(orderId);
        res.status(201).json(order);
    } catch (error) {
        res.status(500);
        throw new Error(error);
    }
}

// function to get orders of customer 
const getOrderByCustomerId = async (req, res) => {
    try {
        const customerId = req.user._id;
        const orders = await Order.find({ userId: customerId });
        res.status(201).json({ orders });
    } catch (error) {
        res.status(500);
        throw new Error(error)
    }
}


// function to get orders of restaurant
const getOrderByRestaurnatId = async (req, res) => {
    const restaurant_id = req.query.restaurant_id;
    try {
        const orders = await Order.find({ restaurant_id });
        res.status(201).json({ orders });
    } catch (error) {
        res.status(500);
        throw new Error(error)
    }
};

// function to update the status accept or reject order 
const orderStatusUpdate = async (req, res) => {
    const { order_status } = req.body;
    const orderId = req.params.id;
    try {
        const orders = await Order.findByIdAndUpdate(
            orderId,
            { order_status: order_status },
            { new: true }
        );
        res.status(201).json({ message: "Order status updated", orders });
    } catch (error) {
        console.log(error);
        res.status(500);
        throw new Error(error)
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