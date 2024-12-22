import { responseError } from "./response.helper.js";

export const handleError = (err, req, res, next) => {
  const resData = responseError(err.message, err.code, err.stack);
  res.status(resData.code).json(resData);

  next();
};

export class BadRequestException extends Error {
  constructor(message = `BadRequestException`) {
    super(message);
    this.code = 400;
  }
}

export class ForbidenException extends Error {
  constructor(message = `ForbidenException`) {
    super(message);
    this.code = 403;
  }
}
