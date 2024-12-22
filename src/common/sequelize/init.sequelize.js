import { Sequelize } from "sequelize";
import initModels from "../../models/init-models.js";
import { DATABASE_URL } from "../constant/app.constant.js";

export const sequelize = new Sequelize(
  DATABASE_URL,
  { logging: false }
  // "mysql://root:123456@localhost:3306/node_46_media",
  // { logging: false }
); // Example for mysql

const models = initModels(sequelize);

// kiểm tra kết nối với csdl
sequelize
  .authenticate()
  .then((params) => {
    console.log(`ket noi db thanh cong`);
  })
  .catch((params) => {
    console.log(`ket noi db KHONG thanh cong`);
  });

export default models;
