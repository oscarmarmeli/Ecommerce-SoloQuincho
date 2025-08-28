"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  productos.init(
    {
      Nombre: DataTypes.STRING,
      Descripcion: DataTypes.STRING,
      Price: DataTypes.DECIMAL,
      Categoria: DataTypes.STRING,
      Url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "productos",
      timestamps: false,
    }
  );
  return productos;
};
