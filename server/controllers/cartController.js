import Cart from "../models/cartModel.js";
import FoodItem from "../models/foodItemsModel.js";

// definding a function to get the cart of the loggedin user 
const getcart = async (req, res) => {
    // getting the user id of user after authentication of jwt token 
    const userId = req.user._id;
    try {
        // finding the cart of the user using user id 
        const cart = await Cart.findOne({ userId: userId });
        // if cart has the items added to it then sends cart detais else sends as null 
        if (cart && cart.items.length > 0) {
            res.status(200).json({ message: "Cart fetched successfully", cart: cart })
        } else {
            res.json({ message: "Nothing in the cart", cart: null });
        }
    } catch (error) {
        console.log(error);
        res.status(500)
        throw new Error(error)
    }
}

// defining a function to create the cart for the logged in user 
const createCart = async (req, res) => {
    // getting the user id of user after authentication of jwt token 
    const userId = req.user._id;
    const { item_id, quantity } = req.body;
    try {
        // check if cart exist or not for the user 
        const cart = await Cart.findOne({ userId: userId });
        // check if the items exists or not 
        const item = await FoodItem.findOne({ _id: item_id });
        // console.log(item);

        // if item not exist sends response as item not found 
        if (!item) {
            res.status(404).json({ message: "Item not found" });
            return
        }

        const price = item.item_price;
        const name = item.item_name;
        const description = item.item_description;
        const restaurant_id = item.restaurant_id;
        const photo = item.item_photo;

        if (cart) {
            // if cart already exists for the user finding the selected item index
            // res.json("cart exists");
            const itemIndex = cart.items.findIndex((item) => item.item_id == item_id);

            // check if product exists in the cart or not 
            if (itemIndex > -1) {
                // res.send("Ddd")
                // if item exists then updating the item details in cart.
                let product = cart.items[itemIndex];
                product.item_quantity += quantity;

                // calculating the cart sub total amount 
                cart.sub_total = cart.items.reduce((acc, curr) => {
                    return acc + curr.item_quantity * curr.item_price;
                }, 0);
                cart.items[itemIndex] = product;
                // saving the cart details
                await cart.save();
                res.status(201).json({ message: "Item quantity updated to the cart", cart: cart });
            } else {
                // if item not existed in the cart pushing the item into cart.items 
                cart.items.push({
                    item_id: item_id,
                    item_name: name,
                    item_price: price,
                    item_description: description,
                    item_photo: photo,
                    item_quantity: quantity,
                    restaurant_id: restaurant_id,
                });
                // calculating the cart sub total amount 
                cart.sub_total = cart.items.reduce((acc, curr) => {
                    return acc + (curr.item_quantity * curr.item_price);
                }, 0);
                await cart.save();
                res.status(201).json({ message: "Item added to the cart", cart: cart });
            }

        } else {
            // if cart not exists create a cart for the user 
            const newCart = await Cart.create({
                userId: userId,
                items: [{
                    item_id: item_id,
                    item_name: name,
                    item_price: price,
                    item_description: description,
                    item_photo: photo,
                    item_quantity: quantity,
                    restaurant_id: restaurant_id,
                }],
                sub_total: quantity * price
            })
            res.status(201).json({ message: "Cart Created & Item added to the cart", cart: newCart })
        }
    } catch (error) {
        console.log(error);
        // res.status(500).json({ status: false, error: error })
        res.status(500);
        throw new Error(error)
    }
};

// defining a fucntion for deleting the sleected cart item
const deleteCartItems = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.user._id;
        // finds the cart based on user id 
        let cart = await Cart.findOne({ userId: userId });
        // finding the selected item index in the cart 
        const itemIndex = cart.items.findIndex((item) => item.item_id == id);

        if (itemIndex > -1) {
            let item = cart.items[itemIndex];
            cart.sub_total -= item.item_quantity * item.item_price;

            if (cart.sub_total < 0) {
                cart.sub_total = 0;
            }
            // removing the item form the cart 
            cart.items.splice(itemIndex, 1);
            // changing the sub_total value 
            cart.sub_total = cart.items.reduce((acc, curr) => {
                return acc + curr.item_quantity * curr.item_price
            }, 0);
            cart = await cart.save();
            res.status(201).json({ message: "Item removed", cart: cart });
        } else {
            res.status(404).json({ message: "Item not found" });
        }

    } catch (error) {
        console.log(error);
        // res.status(500).json({ status: false, error: error })
        res.status(500);
        throw new Error(error)
    }
}

// defining a function for deleteing a cart itself
const deleteCart = async (req, res) => {
    try {
        const id = req.params.id;
        await Cart.findByIdAndDelete(id);
        res.status(201).json({ message: "cart emptied" })
    } catch (error) {
        console.log(error);
        // res.status(500).json({ status: false, error: error })
        res.status(500);
        throw new Error(error)
    }
}

export {
    getcart,
    createCart,
    deleteCartItems,
    deleteCart,
}



