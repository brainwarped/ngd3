// controllers

mpDashboard.controller('mpBulletController', 
  function($scope, bulletDataServices) {
	// query data to pass to d3
    $scope.bullets = [];

    init();

    function init() {
       $scope.bullets = bulletDataServices.query();
    }
});