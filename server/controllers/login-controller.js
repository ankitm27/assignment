//modules
var connection = require('../dataset/users');
var path = require('path');
var bcrypt = require("bcrypt-nodejs");

//login controller
module.exports.login = function(req,res){
fullname = req.body.fullname;
email = req.body.email;
password = req.body.password;
//query for accessing particular user in present or not
connection.query('select email,password from users where email = ?',email, function(err,results){
if(err){
console.log("Error Out");
}
//check result is present or not
else{
if(results.length == 1){
//if any user present with same email-id
if(bcrypt.compareSync(password,results[0].password)){
//if password match
res.json({email: email});
}else{
//password not match
res.json({error: "password not match"});
}
}
//user not exist
else{
res.json({error: "user not exist"});
}
}
});
}
