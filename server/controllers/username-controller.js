//modules
var UserCont  = require('../dataset/users.js');
var connection = require('../dataset/users');
var path = require('path');

var arr = [];
var log = function(inst){
  console.log(inst.get());
  arr.push(inst.get());
}

//controller for findind all username
module.exports.username = function(req,res){
UserCont.User.findAll({attributes: ['email']}).then(function(user) {
user.forEach(log);
console.log(arr);
res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify(arr));
arr = [];
})
}
