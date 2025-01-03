import express from "express";
import authController from "../controllers/auth.controller.js";
import loginController from "../controllers/login.controller.js";

const authRouter = express.Router();

authRouter.post('/register', authController.register)
authRouter.post('/login', loginController.login)
authRouter.post('/facebook-login', authController.facebookLogin)

export default authRouter
