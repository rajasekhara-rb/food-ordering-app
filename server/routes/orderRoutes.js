import express from 'express';
import { authenticateUser } from '../middlewares/auth.js';
import { createOrder, getOrderByCustomerId, getOrderByOrderId, getOrderByRestaurnatId, getOrders, orderStatusUpdate } from '../controllers/orderController.js';
import { OnlyAdminsAccess } from '../middlewares/access.js';

const orderRoutes = express.Router();

orderRoutes.post("/", authenticateUser, createOrder);
orderRoutes.get("/", authenticateUser, getOrders);
orderRoutes.get("/order/:id", authenticateUser, getOrderByOrderId);
orderRoutes.patch("/:id", authenticateUser, OnlyAdminsAccess, orderStatusUpdate);
orderRoutes.get("/customer", authenticateUser, getOrderByCustomerId);
orderRoutes.get("/restaurnat/?", authenticateUser, OnlyAdminsAccess, getOrderByRestaurnatId);

export default orderRoutes;