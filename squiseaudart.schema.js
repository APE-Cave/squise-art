'use strict'

const Art = (sequelize, DataTypes) => {
  sequelize.define('Art', {
    artworkName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    meta: {
      type: DataTypes.JSON,
    },
  });
};

module.exports = Art;