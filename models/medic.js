'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Medic.init({
    diagnost: DataTypes.STRING,
    vann: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Medic',
  });
  return Medic;
};