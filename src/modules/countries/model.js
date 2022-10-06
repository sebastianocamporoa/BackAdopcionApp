import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

// fks
import { City } from "../cities/model.js";

export const Country = sequelize.define(
  "countries",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Country.hasMany(City, {
  foreignKey: "country_id",
  sourceKey: "id",
});

City.belongsTo(Country, {
  foreignKey: "country_id",
  targetKey: "id",
});
