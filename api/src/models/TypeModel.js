const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('types', {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false });
};