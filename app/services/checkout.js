'use strict';


angular.module('myApp')
.service('checkout',function($http){

  this.userCheckout = function(user, items) {
    var data = {
      totalAmount: {
        'amount': items.totalAmount,
        'currency': 'USD',
      },
      consumer: {
        "phoneNumber": user.phone,
        "givenNames": user.userName,
        "surname": user.userName,
        "email": user.email
      },
      items: items
    };

    var postHeaders = {
      'Authorization': 'Basic MTAwMTAwMTgzOjU3NDA0MWZkNzc1ODhjNTNiNDQ5ZGFiYjM5NWExODg1OWRjYjJiYzg5YzdiMDNhMWNhY2VlZWI0OTdjNzU5NTE1MzU2MzIwZWYwZTUzYzE2N2IyMmYyZDBiYzMyNTg4ODVhODAwNzQ4OGE3MDUwMWY5ZDgwYjc5NDQ1OWQwNzE1)',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    var config = {
      method: 'POST',
      url: "https://api.us-sandbox.afterpay.com/v1/orders",
      data: data,
      headers: postHeaders
    };
    console.log(config);
    $http.post(JSON.stringify(config)).then(function successCallback(response){
      return response;
    }, function errorCallback(response){
       try{

       } catch (e) {
         console.log(e);
       }
    });
  };
});