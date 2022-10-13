import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

// fks
import { Locality } from "../localities/model.js";
import { User } from "../users/model.js";

export const City = sequelize.define(
  "cities",
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
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    timestamps: false,
  }
);

City.hasMany(Locality, {
  foreignKey: "city_id",
  sourceKey: "id",
});

Locality.belongsTo(City, {
  foreignKey: "city_id",
  targetKey: "id",
});

City.hasMany(User, {
  foreignKey: "city_id",
  sourceKey: "id",
});

User.belongsTo(City, {
  foreignKey: "city_id",
  targetKey: "id",
});
