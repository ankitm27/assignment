//modules
var Client = require('../../server.js');

//node controller
module.exports.logout = function(req,res){
email = req.body.email;
//delete session
Client.client.del(email,function(err, reply) {
 console.log(reply);
})
var email ={
  email:email
}
res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify(email));
}
