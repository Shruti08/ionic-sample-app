// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var lnk = '';
angular.module('starter', ['ionic'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('MainCtrl', function ($scope, $http) {
    $scope.chngUrl = function () {
        lnk = document.getElementsByName("link")[0].value;
    };
    $http.post('https://api.idolondemand.com/1/api/sync/ocrdocument/v1', {
        'url': lnk,
        'apikey': '6c6a396b-c7ab-42e0-8d35-e414701294c7'
    }).then(function (resp){
        $scope.text_block = resp.data.text_block[0].text;
    });
});