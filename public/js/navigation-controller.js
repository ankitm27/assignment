//main controller
angular.module('NavigationCtrl', []).controller('NavigationController', function($scope,$http,$window) {
//check login or not
$scope.isLoggedIn = false;
$scope.listOfUser = function(){
//http request to username server controller
$http.post('api/user/username').success(function(response,headers){
if(response.error){
$scope.error = response.error;
}else{
console.log(headers);
//set all the available username
$scope.listOfAllUser = response;
$scope.isUserList = true;
}
}).error(function(error){
console.log(error);
});
};

email = localStorage.getItem('User-Data');
email ={
  email:email
}
$http.post('api/user/checklogin',email).success(function(err,response){
if(err){
    if(err.response){
    $scope.isLoggedIn = true;
    $scope.listOfUser();
  }
}

});
});
