const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('pokemons', {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    HP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    attack: {
      type: DataTypes.STRING,
      allowNull: true
    },
    defence: {
      type: DataTypes.STRING,
      allowNull: true
    },
    speed: {
      type: DataTypes.INTEGER
    },
    height: {
      type: DataTypes.FLOAT
    },
    weight: {
      type: DataTypes.FLOAT
    }
  },
  { timestamps: false });
};
