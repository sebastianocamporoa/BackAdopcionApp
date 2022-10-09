import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import { Pet } from "../pets/model.js";

export const Breed = sequelize.define(
  "breeds",
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

Breed.hasMany(Pet, {
  foreignKey: "breed_id",
  sourceKey: "id",
});

Pet.belongsTo(Breed, {
  foreignKey: "breed_id",
  targetKey: "id",
});

