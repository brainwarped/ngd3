/***
	D3 bullet chart directive
	$scope.data.data.subtitle;
    $scope.data.data.ranges;
    $scope.data.data.measures;
    $scope.data.data.markers;
***/
(function() {
// constants
var margin = {top: 5, right: 40, bottom: 20, left: 120},
    width = 960 - margin.left - margin.right,
    height = 50 - margin.top - margin.bottom;
var createSVG, updateBarAttr, updateGraph, updateTextAttr;

angular.module('mpDashboard.directives', []).
directive('scDirective', ['d3', function (d3) {
  return {
  	restrict: 'E',
  	scope: {
  		val: '=' //sets two way binding with controller
	},
	// link declares the function to be evaluated when bound data changes
	link: function (scope, element, attrs, d3) {
		createSVG(scope, element);
		return scope.$watch('val', updateGraph, true); 
    	}
  	};
}]);

// setup svg objects using global width and heights; can we call d3.select this way?
createSVG = function(scope, element, d3) {
	if (!(scope.svg != null)) {
		scope.svg = d3.select("body").selectAll("svg").
			data(scope.data).
    	  	enter().
    	  	append("svg").
      		attr("class", "bullet").
      		attr("width", width + margin.left + margin.right).
      		attr("height", height + margin.top + margin.bottom).
    	  	append("g").
      		attr("transform", "translate(" + margin.left + "," + margin.top + ")").
      		call(chart);
      	return scope.svg
	}
};

updateGraph = function(newVal, oldVal, scope) {
	// clear elements inside directive
	//vis.selectAll('*').remove();

	// if val is undefined, exit
    var title = scope.svg.append("g").
  		style("text-anchor", "end").
  	  	attr("transform", "translate(-6," + height / 2 + ")");
	
	title.append("text").
  		  attr("class", "title").
  		  text(scope.data.title);
		
	title.append("text").
  		  attr("class", "subtitle").
  		  attr("dy", "1em").
  		  text(scope.data.subtitle);

	// return new data with transition
    return $scope.svg.call(chart.duration(1000));
};

}).call(this);