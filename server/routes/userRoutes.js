import express from 'express';
const userRouter = express.Router();
import { getMe, loginUser, registerUser } from "../controllers/userController.js";
import { authenticateUser } from '../middlewares/auth.js';

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/getme", authenticateUser, getMe);

export default userRouter;