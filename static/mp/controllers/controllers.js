// controllers
(function() {
'use strict';

angular.module('mpDashboard.controllers', [])
.controller('mpBulletController', 
  ['$scope', function($scope) {
	// initial data for d3
    $scope.data = [
    				{"title":"Revenue","subtitle":"US$, in thousands","ranges":[150,225,300],"measures":[220,270],"markers":[250]},
				  	{"title":"Profit","subtitle":"%","ranges":[20,25,30],"measures":[21,23],"markers":[26]},
				  	{"title":"Order Size","subtitle":"US$, average","ranges":[350,500,600],"measures":[100,320],"markers":[550]},
				  	{"title":"New Customers","subtitle":"count","ranges":[1400,2000,2500],"measures":[1000,1650],"markers":[2100]},
				  	{"title":"Satisfaction","subtitle":"out of 5","ranges":[3.5,4.25,5],"measures":[3.2,4.7],"markers":[4.4]}
		];
	/***
	// Adds 5 new charts with random data
	$scope.updateData = function () {
		$scope.data.push(randomData($scope.data));
		$scope.data.shift();
	  };

	// functions that generate new data
  	var randomData = function(d) {
    	if (!d.randomizer) d.randomizer = randomizer(d);
      	d.ranges = d.ranges(d.randomizer);
      	d.markers = d.markers(d.randomizer);
      	d.measures = d.measures(d.randomizer);
      	return d;
    };

    function randomizer(d) {
    	var k = d.ranges * .2;
      	return function(d) {
        	return Math.max(0, d + k * (Math.random() - .5));
      	};
    };
    ***/
}]);
}).call(this);