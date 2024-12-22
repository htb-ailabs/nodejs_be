import express from "express";
import { handleError } from "./src/common/helpers/error.helper.js";
import routeRouter from "./src/routes/root.router.js";
import cors from "cors";

const app = express();

// middleware giúp phân giải dữ liệu từ json sang đối tượng javascript
app.use(express.json());
// app.use(cors({ origin: ["google.com", "yahoo.com.vn"] }));
app.use(cors());
// app.use(
//   "/video/video-list",
//   (req, res, next) => {
//     console.log(`middleware 1`);
//     const payload = `payload new`;
//     req.payload = payload;
//     next(123);
//   },
//   (req, res, next) => {
//     console.log(`middleware 2`);
//     console.log(req);
//     next();
//   },
//   (req, res, next) => {
//     console.log(`middleware 3`);
//     next();
//   },
//   (err, req, res, next) => {
//     console.log(`middleware bat loi`);
//     console.log(err);
//     next();
//   }
// );

app.use(routeRouter);

// middleware
app.use(handleError);
// app.use((err, req, res, next) => {
//   const resData = responseError(err.message, err.code, err.stack);
//   res.status(resData.code).json(resData);

//   next();
// });
// console.log({ env: process.env });
app.listen(3069, () => {
  console.log(`Server Online At Port http://localhost:3069`);
});

///////////////
/**
 * Body
 * để nhận được dữ liệu từ body bắt buộc phải có
 *    - app.use(express.json())
 *    - hoặc sử dụng thư viện parser: https://www.npmjs.com/package/parser
 */
// app.post(`/body`, (request, response, next) => {
//   console.log(request.body);
//   response.json(`Body Parameters`);
// });

// /**
//  * Query Parameters
//  * Thường dùng: khi muốn phân trang, search, filter
//  */
// app.get(`/query`, (request, response, next) => {
//   console.log(request.query);

//   const { email, password } = request.query;

//   console.log(email, password);

//   response.json(`Query Parameters`);
// });

// /**
//  * Path Parameters
//  * Thường dùng: khi muốn lấy chi tiết (detail) của một user, product, ....
//  */
// app.get(`/path/:id`, (request, response, next) => {
//   console.log(request.params);
//   response.json(`Path Parameters`);
// });

// /**
//  * Headers
//  */
// app.get(`/headers`, (request, response, next) => {
//   console.log(request.headers);
//   response.json(`Header Parameters`);
// });

// const sequelize = new Sequelize(
//   "mysql://root:123456@localhost:3306/node_46_media"
// ); // Example for mysql

// // kiểm tra kết nối với csdl
// sequelize
//   .authenticate()
//   .then((params) => {
//     console.log(`ket noi db thanh cong`);
//   })
//   .catch((params) => {
//     console.log(`ket noi db KHONG thanh cong`);
//   });

// // code first: tao model
// const Cars = sequelize.define(
//   `Cars`,
//   {
//     car_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING },
//     description: { type: DataTypes.TEXT },
//     passengers: { type: DataTypes.INTEGER },
//     max_speed: { type: DataTypes.STRING },
//     gearbox_type: { type: DataTypes.STRING },
//     fuel_type: { type: DataTypes.STRING },
//     price_per_day: { type: DataTypes.DOUBLE },
//     discount_percentage: { type: DataTypes.INTEGER, defaultValue: 0 },
//     image_url: { type: DataTypes.STRING },
//     created_at: { type: DataTypes.DATE },
//     updated_at: { type: DataTypes.DATE },
//   },
//   {
//     tableName: `cars`,
//     timestamps: false,
//   }
// );
// Cars.sync()
//   .then((params) => {
//     console.log(`dong bo table cars thanh cong`);
//   })
//   .catch((params) => {
//     console.log(`dong bo table cars KHONG thanh cong`);
//   });

// app.get(`/cars`, async (req, res, next) => {
//   // const cars = await sequelize.query(`select * from cars`);
//   // console.log({ cars });
//   // console.log(`car - 1`, cars[0]);
//   // console.log(`car - 2`, cars[1]);
//   // res.json(cars[0]);

//   // dung ORM
//   const cars = await Cars.findAll({ raw: true });
//   // console.log({ cars });
//   res.json(cars);
// });

//npx sequelize-auto -h localhost -d db_cyber_media -u root -x 1234 -p 3307  --dialect mysql -o src/models -a src/models/additional.json
// const models = initModels(sequelize);
// app.get(`/video-list`, async (req, res, next) => {
//   const videos = await models.videos.findAll({ raw: true });
//   res.json(videos);
// });
