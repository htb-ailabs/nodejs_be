import express from "express";
import videoRouter from "./video.router.js";
import carRouter from "./car.router.js";
import authRouter from "./auth.router.js";

const routeRouter = express.Router();

routeRouter.use("/video", videoRouter);
routeRouter.use("/car", carRouter);
routeRouter.use("/auth", authRouter);
// routeRouter.use("/user", userRouter);
// routeRouter.use("/role", roleRouter);

routeRouter.get(`/`, (request, response, next) => {
  //   console.log(`123`);
  response.json(`OK`);
});

export default routeRouter;
