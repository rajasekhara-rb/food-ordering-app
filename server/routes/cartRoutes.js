import express from 'express';
import { createCart, deleteCartItems, getcart, } from '../controllers/cartController.js';
import { authenticateUser } from '../middlewares/auth.js';

const cartRoutes = express.Router();

cartRoutes.get("/", authenticateUser, getcart);
cartRoutes.post("/", authenticateUser, createCart);
cartRoutes.delete("/:id", authenticateUser, deleteCartItems);

export default cartRoutes;
