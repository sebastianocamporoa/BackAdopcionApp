import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("sqlite::memory:");

const Fish = sequelize.define("Fishes", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
  },
});

(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();
