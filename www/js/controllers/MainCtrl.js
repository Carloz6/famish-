//Main controller
app.controller('MainCtrl', function($scope, $ionicSideMenuDelegate){
/*  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };*/
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
})
