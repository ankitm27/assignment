//modules
'use strict'
var Sequelize = require('sequelize');
var sequelize = new Sequelize('login', 'root', 'root')

//model structure
module.exports.User = sequelize.define("loginuser", {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
  });

//export to node controller
module.exports.sequelize = sequelize;
