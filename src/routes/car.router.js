import express from "express";
import Cars from "../models/Cars.model.js";
import carController from "../controllers/car.controller.js";
import { protect } from "../common/middlewares/protect.middleware.js";

const carRouter = express.Router();

carRouter.get(`/cars-list`,protect, carController.carList);

export default carRouter;
