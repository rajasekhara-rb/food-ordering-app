import express from 'express';
import { createCart, deleteCart, deleteCartItems, getcart, } from '../controllers/cartController.js';
import { authenticateUser } from '../middlewares/auth.js';

const cartRoutes = express.Router();

cartRoutes.get("/", authenticateUser, getcart);
cartRoutes.post("/", authenticateUser, createCart);
cartRoutes.delete("/item/:id", authenticateUser, deleteCartItems);
cartRoutes.delete("/cart/:id", authenticateUser, deleteCart);

export default cartRoutes;
