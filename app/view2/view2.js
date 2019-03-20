'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl',[ '$scope','$window','checkout',function($scope, $window,checkout) {

  $scope.ducks = JSON.parse($window.localStorage.getItem('ducksBought'));
  $scope.user = JSON.parse($window.localStorage.getItem('userInfo'));
  $scope.user['total'] = count($scope.ducks);

//console.log($scope.user);
  //complete the order

  // post data via http service to api

 $scope.checkout = function() {

   console.log(checkout.userCheckout($scope.user, $scope.ducks));
 };

}]);

function count(ducks){
  var count = 0;
  for (var k in ducks) {
    if (ducks.hasOwnProperty(k)) {
      ++count;
    }
  }
  return count;
}