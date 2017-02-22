//modules
'use strict'
//var seqcont = require('./index');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('login', 'root', 'root')
//var User = sequelize.define('loginuser', {
//  username: Sequelize.STRING,
//  email: Sequelize.STRING,
//  password: Sequelize.STRING
//});
//module.exports = User;
//module.exports = sequelize;
//exports = module.exports = User;
//exports = module.exports = sequelize;

//module.exports = function(sequelize, DataTypes) {
module.exports.User = sequelize.define("loginuser", {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
  });

module.exports.sequelize = sequelize;
