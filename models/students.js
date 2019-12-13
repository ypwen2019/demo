const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

var students = sequelize.define(
  'students', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sid: {
      type: Sequelize.STRING,
      field: 'sid',
    },
    sname: {
      type: Sequelize.STRING,
      field: 'sname',
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'updated_at'
    },
    deletedAt: {
      type: Sequelize.DATE,
      field: 'deleted_at'
    },
  }, {
    paranoid: true,
    underscored: true,
    tableName: 'students',
  }
);
module.exports = students;
/*
module.exports = function (sequelize, DataTypes) {
  var students = sequelize.define('students', {
    sid: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    sname: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  });
  return students;
};*/