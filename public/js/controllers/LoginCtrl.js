//login controller
angular.module('LoginCtrl', []).controller('LoginController', function($scope,$http,$window,$location,$timeout) {
//$scope.tagline = 'The square root of life is pi!';


//funtion of finding all users
$scope.listOfUser = function(){
//http request to username server controller
$http.post('api/user/username').success(function(response){
if(response.error){
$scope.error = response.error;
}else{
console.log(response);
//set all the available username
$scope.isUserList = true;
$scope.listOfAllUser = response;
}
}).error(function(error){
console.log(error);
});
};




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
$timeout(function(){$location.path('/register');},1000);
}
}else{
//console.log(response.email);
localStorage.setItem('User-Data', response.email);
//$scope.listOfUser();
var url = window.location.origin;
$window.location.href = url;
}
}).error(function(error){
console.log(error);
});
}
});
