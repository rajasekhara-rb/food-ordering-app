import express from 'express';
import { deleteRestaurant, getAllRestaurants, getRestaurantById, registerRestaurant, updateRestaurant } from '../controllers/restaurantController.js';
import { authenticateUser } from '../middlewares/auth.js';

const restaurantRouter = express.Router();

restaurantRouter.post("/register", authenticateUser, registerRestaurant);
restaurantRouter.get("/", getAllRestaurants);

// restaurantRouter.get("/:id", getRestaurantById);
restaurantRouter.route("/:id").get(getRestaurantById).put(updateRestaurant).delete(deleteRestaurant);

export default restaurantRouter;