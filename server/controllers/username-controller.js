//modules
var connection = require('../dataset/users');
var path = require('path');

//controller for findind all username
module.exports.username = function(req,res){
//query for finding all available
connection.query('select email from users', function(err,results){
if(err){
console.log("Error Out");
}
res.json(results);
});
}
