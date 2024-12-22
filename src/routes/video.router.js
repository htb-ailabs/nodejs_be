// import express from "express";
import express, { raw } from "express";
import models from "../common/sequelize/init.sequelize.js";
import videoController from "../controllers/video.controller.js";

// import { DataTypes, Sequelize } from "sequelize";
// import initModels from "../models/init-models.js";
// import routeRouter from "./root.router";

const videoRouter = express.Router();

// const sequelize = new Sequelize(
//   "mysql://root:123456@localhost:3306/node_46_media"
// ); // Example for mysql

// const models = initModels(sequelize);

videoRouter.get("/video-list", videoController.videoList);

export default videoRouter;
