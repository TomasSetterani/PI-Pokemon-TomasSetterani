const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Pokemons', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    defense: {
      type: DataTypes.INTEGER,
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
