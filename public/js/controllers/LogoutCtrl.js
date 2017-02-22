//logout controller
angular.module('LogoutCtrl', []).controller('LogoutController', function($http,$scope,$location,$window) {
    //function for logout
    $scope.logoutUser = function(){
    email = localStorage.getItem('User-Data');
    var email = {
      email:email
    }
    //console.log(email);
    $http.post('api/user/logout',email).success(function(response,headers){
    $window.localStorage.clear();
    //$location.path('/');
    var url = window.location.origin;
    $window.location.href = url;

    }).error(function(error){
    console.log(error);
  });
}
    });
