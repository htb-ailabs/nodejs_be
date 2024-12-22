import prisma from "../common/prisma/init.prisma.js";
import { BadRequestException } from "../common/helpers/error.helper.js";
import bcrypt from "bcrypt";

const authService = {
  register: async (req) => {
    // bước 1: nhận dữ liệu: full_name, email, password
    const { full_name, email, pass_word } = req.body;
    console.log({ full_name, email, pass_word });
    // bước 2: lấy email và kiểm tra trong db, nếu đã có thì báo đã tồn tại
    const userExist = await prisma.users.findFirst({
      where: { email: email },
    });
    // console.log({ userExist });
    if (userExist) {
      throw new BadRequestException(`tai khoan da ton tai`);
    }
    // ma hoa password
    const passHash = bcrypt.hashSync(pass_word, 10);
    // bước 3: tạo người dùng mới
    const userNew = await prisma.users.create({
      data: { email: email, full_name: full_name, pass_word: passHash },
    });

    // xoa password khi tra ve de khong bi hack
    delete userNew.pass_word;
    // bước 4: trả kết quả thành công
    return userNew;
  },
  login: async (req) => {
    const { email, pass_word } = req.body;
    const userExists = await prisma.users.findFirst({
      where: { email: email },
    })
    
   
    if (!userExists) {
      throw new BadRequestException(`tai khoan khong ton tai, vui long dang ky`)
    }

    const isPassword = await bcrypt.compareSync(pass_word,userExists.pass_word)
    if(!isPassword){
      throw new BadRequestException(`password kg chinh xac`)
    }
    return {
      accessToken: `123`,
      refreshToken: `456`
    };
  },
};

export default authService;
