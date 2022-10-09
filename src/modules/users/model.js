import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import { Pet } from "../pets/model.js";

export const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    document_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
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

User.hasMany(Pet, {
  foreignKey: "user_id",
  sourceKey: "id",
});

Pet.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});