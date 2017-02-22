//modules
var connection    = require('../dataset/users');
var path          = require('path');
var datetime      = require('node-datetime');
var bcrypt        = require("bcrypt-nodejs");
var UserCont  = require('../dataset/users.js');
module.exports.register = function(req,res){
username = req.body.username;
email = req.body.email;
password = req.body.password;
console.log(username);
console.log(email);
console.log(password);
//convert password into hash sync
var password_hash = bcrypt.hashSync(password);
console.log(password_hash);

var newUser = {
  username: username,
  email:email,
  password:password_hash
}

UserCont.User.count({where: {email: email}}).then(function(user) {
  if(user==0){
    UserCont.sequelize.sync().then(function() {
   return UserCont.User.create(newUser);
     }).then(function(jane) {
    console.log("user created");
     console.log(jane.get({plain: true}));
      //res.json(req.body);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(req.body));
    });
  }
  else{
    console.log("user present");
    //res.json({error: "This email address already exists."});
    var response = {
      error:"This email address already exists."
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(response));
  }
})

}
