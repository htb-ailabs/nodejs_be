import { responseSuccess } from "../common/helpers/response.helper.js";
import authService from "../services/auth.service.js";

const loginController = {
login: async (req, res, next) => {
    try {
      const data = await authService.login(req);
      const resData = responseSuccess(data, `login successfully`, 200);

      res.json(resData);
    } catch (error) {
      // const errorData = responseError(error.message, error.code, error.stack);
      // res.status(errorData.code).json(errorData);
      next(error);
    }
  },
}

export default loginController