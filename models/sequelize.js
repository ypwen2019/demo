const Sequelize = require('sequelize');
const config = require('./config').database.mysql;

/**
 * 如果是mysql， 请将postgres改为mysql
 */
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  dialectOptions: {
    charset: 'utf8mb4',
  },
  pool: {
    max: 5,
    min: 1,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    timestamps: true,
  },
  logging: false,
});

module.exports = sequelize;