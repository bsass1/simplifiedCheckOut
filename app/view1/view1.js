'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$window', function($scope,$window) {

  $scope.logUserInfo = function(user){
    console.log($scope.user);
    $window.localStorage.setItem('userInfo', JSON.stringify($scope.user));
  };

}]);