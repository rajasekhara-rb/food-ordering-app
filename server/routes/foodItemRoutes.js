import express from 'express';
import { addFoodItems, changeAvilabilityOfFoodItems, deleteFoodItems, getFoodItemById, getFoodItems, getFoodItemsByRestaurantId, updateFoodItems } from '../controllers/foodItemsController.js';
import { authenticateUser } from '../middlewares/auth.js';
import { OnlyAdminsAccess } from '../middlewares/access.js';
const foodItemsRouter = express.Router();

foodItemsRouter.post("/new", authenticateUser, OnlyAdminsAccess, addFoodItems);
foodItemsRouter.get("/all", authenticateUser, getFoodItems)
foodItemsRouter.post("/byrestaurant", authenticateUser, OnlyAdminsAccess, getFoodItemsByRestaurantId);
foodItemsRouter.get("/:id", authenticateUser, getFoodItemById);
foodItemsRouter.route("/:id", authenticateUser, OnlyAdminsAccess).put(updateFoodItems).delete(deleteFoodItems);
foodItemsRouter.patch("/:id", authenticateUser, OnlyAdminsAccess, changeAvilabilityOfFoodItems);

export default foodItemsRouter;