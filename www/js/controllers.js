angular.module('app')

.controller('loginCtrl', function($scope,AuthService,$ionicPopup,$state) {
  $scope.data = {};
  //controller for the login screen, calls the login in function passing the data and the assigns username variables
  $scope.login = function(data) {
    AuthService.login(data.username, data.password).then(function(authenticated) {
      $state.go('tabs.home', {}, {reload: true});
    }, function(err) {
      var alertPopup = $ionicPopup.alert({
        title: 'Login failed!',
        template: 'Please check your credentials!'
      });
    });
  };
})
  // Once user authenticated we proceed to home screen
.controller('homeCtrl', function($scope, $state, $http, $ionicPopup, AuthService) {
  //User can Log out
  $scope.logout = function() {
    AuthService.logout();
    $state.go('login');
  };
})

.controller('ordersCtrl', function($scope) {
})

.controller('tabController', function($scope){
});
