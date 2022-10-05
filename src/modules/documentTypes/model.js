import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

// fks
import { User } from "./User.js";

export const DocumentType = sequelize.define(
  "document_types",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    external_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

DocumentType.hasMany(User, {
  foreignKey: "document_type_id",
  sourceKey: "id",
});

User.belongsTo(DocumentType, {
  foreignKey: "document_type_id",
  targetKey: "id",
});
