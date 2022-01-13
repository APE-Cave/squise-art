'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.POSTGRES_URI || 'sqlite:memory';
const artSchema = require('squiseaudart.schema.js');

let db = new Sequelize(POSTGRES_URI);

const ArtModel = artSchema(db, DataTypes);

module.exports = {
  db,
  ArtModel,
};

