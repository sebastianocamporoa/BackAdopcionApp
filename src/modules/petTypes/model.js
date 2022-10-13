import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import { Breed } from "../breeds/model.js";
import { Pet } from "../pets/model.js";

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

PetType.hasMany(Pet, {
  foreignKey: "pet_type_id",
  sourceKey: "id",
});

Pet.belongsTo(PetType, {
  foreignKey: "pet_type_id",
  targetKey: "id",
});

PetType.hasMany(Breed, {
  foreignKey: "pet_type_id",
  targetKey: "id",
});
Breed.belongsTo(PetType, {
  foreignKey: "pet_type_id",
  sourceKey: "id",
});
