import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

export const PetType = sequelize.define(
  "pet_types",
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
