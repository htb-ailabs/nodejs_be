import { responseSuccess } from "../common/helpers/response.helper.js";
import authService from "../services/auth.service.js";

const authController = {
  register: async (req, res, next) => {
    try {
      const userNew = await authService.register(req);
      const resData = responseSuccess(userNew, `register successfully`, 200);

      res.json(resData);
    } catch (error) {
      // const errorData = responseError(error.message, error.code, error.stack);
      // res.status(errorData.code).json(errorData);
      next(error);
    }
  },
  facebookLogin: async (req, res, next) => {
    try {
      const data = await authService.facebookLogin(req);
      const resData = responseSuccess(data, `FB Login successfully`, 200);
      res.status(resData.code).json(resData);
    } catch (error) {
      // const errorData = responseError(error.message, error.code, error.stack);
      // res.status(errorData.code).json(errorData);
      next(error);
    }
  },
  refreshToken: async (req, res, next) => {
    try {
      const data = await authService.refreshToken(req);
      const resData = responseSuccess(data, `Refresh token successfully`, 200);
      res.status(resData.code).json(resData);
    } catch (error) {
      // const errorData = responseError(error.message, error.code, error.stack);
      // res.status(errorData.code).json(errorData);
      next(error);
    }
  },
};

export default authController;
