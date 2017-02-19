'use strict';
//proving route to every url
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
$routeProvider
// home page
.when('/', {
templateUrl: 'public/views/home.html',
controller: 'MainController'
})
//login page
.when('/login', {
templateUrl: 'public/views/login.html',
controller: 'LoginController'
})
//register page
.when('/register', {
templateUrl: 'public/views/register.html',
controller: 'RegisterController'
})
//logout page
.when('/logout', {
controller: 'LogoutController'
});
$locationProvider.html5Mode(true);
}]);
