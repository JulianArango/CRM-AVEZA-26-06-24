import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Acreedor = sequelize.define(
    "Acreedor",
    {
      NIT: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nombre: { type: DataTypes.STRING, allowNull: true, primaryKey: true },
      direccion: { type: DataTypes.STRING, allowNull: true },
      ciudad: { type: DataTypes.STRING, allowNull: true },
      telefono: { type: DataTypes.STRING, allowNull: true },
    },
    { timestamps: false }
  );
  return Acreedor;
};
