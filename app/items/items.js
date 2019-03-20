'use strict';

angular.module('myApp.items', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/items', {
      templateUrl: 'items/items.html',
      controller: 'itemsCtrl'
    });
  }])

  .controller('itemsCtrl', [function() {
    //onclick save image to localstorage


    //higlight image as selected

    //should diplay amount


  }]);