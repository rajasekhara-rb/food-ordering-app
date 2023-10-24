import express from 'express';
const userRouter = express.Router();
import { forgotPassword, getMe, loginUser, registerUser, resetPassword, verifyLinkExpiry } from "../controllers/userController.js";
import { authenticateUser } from '../middlewares/auth.js';

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/getme", authenticateUser, getMe);
userRouter.post("/forgotpassword", forgotPassword);
userRouter.get("/verifylinkexpiry/:token", verifyLinkExpiry);
userRouter.post("/resetpassword", resetPassword);

export default userRouter;