import { DataTypes } from "sequelize";

export default (sequelize) => {
  const PropuestaPago = sequelize.define(
    "PropuestaPago",
    {
      idPropuesta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      clase: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      interes: { type: DataTypes.BIGINT, allowNull: false },
      valor: { type: DataTypes.BIGINT, allowNull: false },
      plazo: { type: DataTypes.BIGINT, allowNull: false },
    },
    { timestamps: false }
  );
  return PropuestaPago;
};
