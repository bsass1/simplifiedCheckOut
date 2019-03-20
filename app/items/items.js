'use strict';

angular.module('myApp.items', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/items', {
      templateUrl: 'items/items.html',
      controller: 'itemsCtrl'
    });
  }])

  .controller('itemsCtrl', ['$scope','$window' ,function($scope, $window) {
    $scope.ducks = {};

$scope.selectedItem = function(item){
  var duck = item.split('/')[2].split('.')[0];

  if($scope[duck]){
    $scope[duck] = false;
    $scope.ducks[duck] = null;
    delete $scope.ducks[duck];
  }else{
    $scope[duck] = true;
    $scope.ducks[duck] = item;
  }

$window.localStorage.setItem('ducksBought', JSON.stringify($scope.ducks));

};

  }]);