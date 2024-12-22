import { BadRequestException } from "../common/helpers/error.helper.js";
import Cars from "../models/Cars.model.js";

const carService = {
  carList: async (req) => {
    // lỗi kiểm soát được
    // const passNguoiDungGuiLen = 123;
    // const passLayTrongDb = 1235;
    // if (passNguoiDungGuiLen !== passLayTrongDb) {
    //   throw new BadRequestException(`Password kg chinh xac`);
    // }

    // lỗi không kiểm soát được, code = 500
    // console.log(abc);

    // const { page } = req.query;
    // console.log(+page);
    // dung ORM
    const cars = await Cars.findAll({ raw: true });
    // console.log({ cars });
    return cars;
  },
};

export default carService;
