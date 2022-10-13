import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

// fks
import { User } from "../users/model.js";

export const Locality = sequelize.define(
  "localities",
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

Locality.hasMany(User, {
  foreignKey: "locality_id",
  sourceKey: "id",
});

User.belongsTo(Locality, {
  foreignKey: "locality_id",
  targetKey: "id",
});
