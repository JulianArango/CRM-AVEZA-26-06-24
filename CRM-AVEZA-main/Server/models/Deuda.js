import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Deuda = sequelize.define(
    "Deuda",
    {
      idDeuda: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tipoDeuda: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipoGarantia: { type: DataTypes.STRING, allowNull: false },
      documentoSoporte: { type: DataTypes.STRING, allowNull: false },
      capital: { type: DataTypes.BIGINT, allowNull: false },
      intereses: {
        type: DataTypes.STRING,
        defaultValue: "Desconozco esta información",
      },
      cuantiaTotal: { type: DataTypes.BIGINT, allowNull: false },
      clasificacion: { type: DataTypes.STRING, allowNull: false },
      diasMora: {
        type: DataTypes.STRING,
        defaultValue: "Más de 90 días",
      },
    },
    { timestamps: false }
  );
  return Deuda;
};
