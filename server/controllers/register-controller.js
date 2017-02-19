//modules
var connection = require('../dataset/users');
var path = require('path');
var datetime = require('node-datetime');
var bcrypt = require("bcrypt-nodejs");

//register controller
module.exports.register = function(req,res){
username = req.body.fullname;
email = req.body.email;
password = req.body.password;
//convert password into hash sync
var password_hash = bcrypt.hashSync(password);
//find current date
var dt = datetime.create();
var created_date= dt.format('Y-m-d');
var q = {username:username,email:email,password:password_hash,created_date:created_date};
//query for checking user exist with same email-is or not
connection.query('select email from users where email = ?',email  , function(err,results){
if(err){
console.log("Error Out");
}
//user exist with same email-id
if(results && results.length > 0){
res.json({error: "This email address already exists."});
}else{
//insert new user into db
connection.query('INSERT into users set ?',q, function(err, rows){
if(err)
{
  console.log(err);
}
});
res.json(req.body);
};
});
}
