//access server.js variable
var Client = require('../../server.js');

//checklogin controller
module.exports.checklogin = function(req,res){
email = req.body.email;
//check redis that particuar email is login or not
Client.client.get(email,function(err, reply) {
 if(reply==null){
response=0
 }else{
response=1
 }
var eresponse ={
response:response
}
console.log(eresponse);
res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify(eresponse));
})
}
