import {
  responseError,
  responseSuccess,
} from "../common/helpers/response.helper.js";
import carService from "../services/car.service.js";

const carController = {
  carList: async (req, res, next) => {
    try {
      const cars = await carService.carList(req);
      const resData = responseSuccess(cars, `Get list car successfully`, 200);

      res.json(resData);
    } catch (error) {
      // const errorData = responseError(error.message, error.code, error.stack);
      // res.status(errorData.code).json(errorData);
      next(error);
    }
  },
};

export default carController;
