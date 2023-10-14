import express from 'express';
import { authenticateUser } from '../middlewares/auth.js';
import { createOrder, getOrderByCustomerId, getOrderByOrderId, getOrderByRestaurnatId, orderStatusUpdate } from '../controllers/orderController.js';
import { OnlyAdminsAccess } from '../middlewares/access.js';

const orderRoutes = express.Router();

orderRoutes.post("/", authenticateUser, createOrder);
orderRoutes.get("/order/:id", authenticateUser, getOrderByOrderId);
orderRoutes.get("/customer", authenticateUser, getOrderByCustomerId);
orderRoutes.get("/restaurant", authenticateUser, OnlyAdminsAccess, getOrderByRestaurnatId);
orderRoutes.put("/:id", authenticateUser, OnlyAdminsAccess, orderStatusUpdate);

export default orderRoutes;