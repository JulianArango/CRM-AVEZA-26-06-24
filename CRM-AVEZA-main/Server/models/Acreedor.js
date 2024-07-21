import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Acreedor = sequelize.define(
    "Acreedor",
    {
      NIT: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombre: { type: DataTypes.STRING, allowNull: false },
      direccion: { type: DataTypes.STRING, allowNull: false },
      telefono: { type: DataTypes.BIGINT, allowNull: false },
    },
    { timestamps: false }
  );
  return Acreedor;
};
