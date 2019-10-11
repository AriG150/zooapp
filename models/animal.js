'use strict';
module.exports = (sequelize, DataTypes) => {
  const animal = sequelize.define('animal', {
    firstName: DataTypes.STRING,
    location: DataTypes.STRING,
    species: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  animal.associate = function(models) {
    // associations can be defined here
  };
  return animal;
};