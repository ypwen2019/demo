const path = require('path');
const _ = require('lodash');
const sequelize = require('./sequelize');

/**
 * 用于强制同步数据库
 */
sequelize.sync({
  force: true
});

['students'].map(mapName => {
  exports[mapName] = require(path.join(__dirname, _.snakeCase(mapName)));
});