var express = require('express');
var redis   = require("redis");
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var bodyParser = require('body-parser');
//var client  = redis.createClient();
var app = express();
client = redis.createClient("6379", "127.0.0.1");

client.get('framewo', function(err, reply) {
    console.log(reply);
});
//app.use(session({
//    secret: 'ssshhhhh',
    // create new redis store.
//    store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl :  260}),
//    saveUninitialized: false,
//    resave: false
//}));

//session.check = "hello";
//console.log(session.key["check"]);


app.listen(3000,function(){
    console.log("App Started on PORT 3000");
});
