//main controller
angular.module('NavigationCtrl', []).controller('NavigationController', function($scope,$http,$window) {
//check login or not
$scope.isLoggedIn = false;
if(localStorage.getItem('User-Data')){
//console.log(localStorage.getItem('User-Data'))
$scope.isLoggedIn = true;
}
//funtion of finding all users
$scope.listOfUser = function(){
//http request to username server controller
$http.post('api/user/username').success(function(response){
if(response.error){
$scope.error = response.error;
}else{
console.log(response);
//set all the available username
$scope.listOfAllUser = response;
}
}).error(function(error){
console.log(error);
});
};
});
