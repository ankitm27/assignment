//logout controller
angular.module('LogoutCtrl', []).controller('LogoutController', function($scope,$window) {
    //function for logout
    $scope.logoutUser = function(){
    //remove data storage for localstorage
    $window.localStorage.clear();
    //redirect to index page
    var url = window.location.origin;
    $window.location.href = url;
}
});
