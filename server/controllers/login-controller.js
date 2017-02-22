//modules
var UserCont  = require('../dataset/users.js');
var path = require('path');
var bcrypt = require("bcrypt-nodejs");
var Client = require('../../server.js');
//login controller
module.exports.login = function(req,res){
email = req.body.email;
password = req.body.password;
//query for accessing particular user in present or not
UserCont.User.find({where: {email:email},attributes: ['email','password']}).then(function(user) {
console.log(user);
if(user==null){
console.log("user not exist");
var response = {
error:"user not exist"
}
res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify(response));
}
else{
console.log(user.email);
console.log(user.password);
if(bcrypt.compareSync(password,user.password)){
console.log("password match");
      //set session key
Client.client.set(email, email, function(err, reply) {
       //console.log(reply);
       //console.log(err);
});
var response = {
email:email
}
      //set header
res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify(response));
}
else{
console.log("password not match");
      //res.json({error: "password not match"});
var response = {
error:"password not match"
}
res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify(response));
}
}
})
}
