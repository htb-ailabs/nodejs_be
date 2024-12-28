import jwt from "jsonwebtoken";
import prisma from "../prisma/init.prisma.js";
import { UnauthorizationException } from "../helpers/error.helper.js";
// import prisma from "@prisma/client";

export const protect = async (req, res, next) => {
  // console.log(req.headers.authorization.split(" ")[1]);
  try {
    const accessToken = req.headers.authorization?.split(" ")[1];

    if(!accessToken){
      throw new UnauthorizationException(`vui long cung cap token de tiep tuc su dung`)
    }

    const decode = jwt.verify(accessToken, `ACCESS_TOKEN_SECRET`);

    console.log({ decode });

    const user = await prisma.users.findUnique({
      where: { user_id: decode.userId },
    });
    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};
