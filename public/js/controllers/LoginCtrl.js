//login controller
angular.module('LoginCtrl', []).controller('LoginController', function($scope,$http,$window,$location,$timeout) {
//$scope.tagline = 'The square root of life is pi!';
$scope.usernotpresent = false;
//function for login
$scope.loginUser = function(){
//http request for login controller for finding login details
$http.post('api/user/login', $scope.newUser).success(function(response){
//if error from server
if(response.error){
//if password not match error
if(response.error == "password not match")
{
$scope.isError = true;
$scope.error = response.error;
}
//user not exist
else{
$scope.isError = true;
$scope.error = "user not exist redirecting to signup ....";
//redirect to register page
var url = window.location.origin;
url = url + "/register";
$timeout(function(){$window.location.href = url;},1000);
}
}else{
//for tracking sessions
localStorage.setItem('User-Data', JSON.stringify(response));
//redirect to index page
var url = window.location.origin;
$window.location.href = url;
}
}).error(function(error){
console.log(error);
});
}
});
