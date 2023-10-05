import express from 'express';
import { addFoodItems, deleteFoodItems, getFoodItemById, getFoodItems, updateFoodItems } from '../controllers/foodItemsController.js';
const foodItemsRouter = express.Router();

foodItemsRouter.post("/new", addFoodItems);
foodItemsRouter.get("/all", getFoodItems)

foodItemsRouter.route("/:id").get(getFoodItemById).put(updateFoodItems).delete(deleteFoodItems);

export default foodItemsRouter;