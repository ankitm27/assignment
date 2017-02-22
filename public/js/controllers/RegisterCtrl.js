//controller for register
angular.module('RegisterCtrl', []).controller('RegisterController', function($scope,$http,$window,$timeout,$location) {
//regex for checking password must be alphanumaric with special character and length must be greater the 8
$scope.regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@#$%^&+=.\-_*])([a-zA-Z0-9@#$%^&+=*.\-_]){8,}$/;
$scope.maxlength = 20;
//finction for create user
$scope.createUser = function(){
var password = $scope.newUser.password;
var confirm_password =$scope.newUser.confirm_password;
$scope.isError = false;
$scope.error = "check";
//check password and confirm_password matches or not
if (password != confirm_password){
  $scope.isError = true;
  $scope.error = "password and confirm password not matched";
}
if(!$scope.isError)
{
username = $scope.newUser.username;
email = $scope.newUser.email;
password = $scope.newUser.password;
var registerUser = {
  username : username,
  email: email,
  password: password
}
console.log(registerUser);
//http request to register controller of server to adding new user
$http.post('/api/user/register', registerUser).success(function(response,headers){
if(response.error){
$scope.isError = true;
$scope.error = response.error;
}else{
$scope.issuccess = true;
$scope.success = "sucessfully register";
//change url after sucessfully register
//var url = window.location.origin;
//url = url + "/login";
//$location.path('/login');
$timeout(function(){$location.path('/login');},1000);
}
}).error(function(error){
console.log(error);
});
}
}
});
