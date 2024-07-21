import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Gastos = sequelize.define(
    "Gastos",
    {
      idGastos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      energia: { type: DataTypes.BIGINT, allowNull: false },
      agua: { type: DataTypes.BIGINT, allowNull: false },
      gas: { type: DataTypes.BIGINT, allowNull: false },
      telecomunicaciones: { type: DataTypes.BIGINT, allowNull: false },
      television: { type: DataTypes.BIGINT, allowNull: false },
      arriendo: { type: DataTypes.BIGINT, allowNull: false },
      seguros: { type: DataTypes.BIGINT, allowNull: false },
      alimentación: { type: DataTypes.BIGINT, allowNull: false },
      transporte: { type: DataTypes.BIGINT, allowNull: false },
      otros: { type: DataTypes.BIGINT, allowNull: false },
    },
    { timestamps: false }
  );
  return Gastos;
};
