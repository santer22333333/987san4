'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nomer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nomer.init({
    name: DataTypes.STRING,
    chel: DataTypes.STRING,
    razm: DataTypes.STRING,
    descr: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nomer',
  });
  return Nomer;
};