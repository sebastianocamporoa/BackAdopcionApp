import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

// fks
import { User } from "../users/model.js";

export const OAuth = sequelize.define(
  "oauth",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
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
    freezeTableName: true,
  }
);

OAuth.hasMany(User, {
  foreignKey: "oauth_id",
  sourceKey: "id",
});

User.belongsTo(OAuth, {
  foreignKey: "oauth_id",
  targetKey: "id",
});
