var express            = require('express');
var app                = express();
var Sequelize          = require('sequelize');

//var Sequelize = require('sequelize');
var sequelize = new Sequelize('login', 'root', 'root');

var User = sequelize.define('newcheck', {
  username: Sequelize.STRING,
  firstname: Sequelize.STRING
});

var log = function(inst){
  console.log(inst.get())
}
var q = {
  username: 'janedoefesrgtuyioi',
  firstname: 'bdjfnkelm'
}
//sequelize.sync().then(function() {
//  return User.create(q);
//  }).then(function(jane) {
//  console.log(jane.get({
//    plain: true
//  }));
//});

User.count({where: {username:"janedoefesrgtuyioi"}}).then(function(user) {
  // project will be the first entry of the Projects table with the title 'aProject' || null
  // project.title will contain the name of the project
  //user.forEach(log)
  console.log(user)
})

//User.find().then('sql',console.log).then(console.log("chek"))

//console.log("check");
//.then(function(jane) {
//  console.log(jane.get({
//    plain: true
//  }));
//});

//console.log(User.findAll({}));
//t = 0;
//console.log(User.findAll({attributes: ['username']}));
//console.log(t);
//User.findAll()
//console.log("check");
//console.log(response);
//console.log("check2");

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Magic happens on port ' + port); 			// shoutout to the user
//exports app for other files
exports = module.exports = app;
