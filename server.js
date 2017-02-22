// modules =================================================
var express            = require('express');
var app                = express();
var mysql              = require('mysql');
var path               = require('path');
var bodyParser         = require('body-parser');
var methodOverride     = require('method-override');
var redis              = require("redis");
var session            = require('express-session');
var redisStore         = require('connect-redis')(session);
var loginController    = require('./server/controllers/login-controller.js');
var registerController = require('./server/controllers/register-controller.js');
var usernameController = require('./server/controllers/username-controller.js');
var logoutController = require('./server/controllers/logout-controller.js');
var checkloginController = require('./server/controllers/checklogin-controller.js');
//set port number
var port = process.env.PORT || 8080;

//connection to redis server
module.exports.client = redis.createClient("6379", "127.0.0.1");

//parsing
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true }));             // parse application/x-www-form-urlencoded

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

//use public folder(front end folder) for this app
app.use('/public',express.static(path.join(__dirname,'public')));
app.use('/bower_components', express.static(path.join(__dirname + '/bower.json')));
//use front page
app.get('/*',function(req,res){
res.sendFile(path.join( __dirname, 'public/index.html'));
});

//use node controllers
app.post('/api/user/login',loginController.login);
app.post('/api/user/register',registerController.register);
app.post('/api/user/username',usernameController.username);
app.post('/api/user/logout',logoutController.logout);
app.post('/api/user/checklogin',checkloginController.checklogin);
// start app ===============================================
app.listen(port);
console.log('Magic happens on port ' + port); 			// shoutout to the user
//exports app for other files
exports = module.exports = app;
