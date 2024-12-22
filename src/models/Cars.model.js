import { DataTypes } from "sequelize";
import { sequelize } from "../common/sequelize/init.sequelize.js";

// // code first: tao model
const Cars = sequelize.define(
  `Cars`,
  {
    car_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    passengers: { type: DataTypes.INTEGER },
    max_speed: { type: DataTypes.STRING },
    gearbox_type: { type: DataTypes.STRING },
    fuel_type: { type: DataTypes.STRING },
    price_per_day: { type: DataTypes.DOUBLE },
    discount_percentage: { type: DataTypes.INTEGER, defaultValue: 0 },
    image_url: { type: DataTypes.STRING },
    created_at: { type: DataTypes.DATE },
    updated_at: { type: DataTypes.DATE },
  },
  {
    tableName: `cars`,
    timestamps: false,
  }
);
Cars.sync()
  .then((params) => {
    console.log(`dong bo table cars thanh cong`);
  })
  .catch((params) => {
    console.log(`dong bo table cars KHONG thanh cong`);
  });

export default Cars;
