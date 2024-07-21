import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Ingresos = sequelize.define(
    "Ingresos",
    {
      idIngreso: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      concepto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      valor: { type: DataTypes.BIGINT, allowNull: false },
    },
    { timestamps: false }
  );
  return Ingresos;
};
