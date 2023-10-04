import express from 'express';
const userRouter = express.Router();
import  registerUser from "../controllers/userController.js";

userRouter.post("/register", registerUser);

export default userRouter;