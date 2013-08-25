// D3 bullet chart directive

mpDashboard.directive('bulletChart', ['d3', function (d3) {
	/***
	$scope.bullets.subtitle;
    $scope.bullets.ranges;
    $scope.measures = bulletData.measures;
    $scope.markers = bulletData.markers;
    ***/

  // constants
  var margin = {top: 5, right: 40, bottom: 20, left: 120},
      width = 960 - margin.left - margin.right,
      height = 50 - margin.top - margin.bottom;

  return {
  	restrict: 'E',
  	terminal: true,
  	scope: {
  		subtitle: '=',
  		ranges: '=',
  		measures: '=',
  		markers: '='
	},
	link: function (scope, element, attrs) {
	  // setup initial svg ob
	  var chart = d3.bullet()
	  	  .width(width)
	      .height(height);

	  // setup initial svg object
	  var vis = d3.select(element[0])
		  .append("svg")
		    .attr("width", width)
		    .attr("height", height + margin + 100);
	  // watch scope
	  scope.$watch('val', function (newVal, oldVal) {
		// clear elements inside directive
		vis.selectAll('*').remove();

		// if val is undefined, exit
		if (!newVal) {
			return;
		}
		// based on http://bl.ocks.org/mbostock/4061961
		//use data
		var svg = d3.select("body").selectAll("svg")
      				.data(data)
    	  .enter().append("svg")
      		.attr("class", "bullet")
      		.attr("width", width + margin.left + margin.right)
      		.attr("height", height + margin.top + margin.bottom)
    	  .append("g")
      		.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      		.call(chart);

  		var title = svg.append("g")
      	  .style("text-anchor", "end")
      	  .attr("transform", "translate(-6," + height / 2 + ")");

  		title.append("text")
      		 .attr("class", "title")
      		 .text(function(d) { return d.title; });

  		title.append("text")
      		 .attr("class", "subtitle")
      		 .attr("dy", "1em")
      		 .text(function(d) { return d.subtitle; });

	  	// randomize data functions
	  	function randomize(d) {
	      if (!d.randomizer) d.randomizer = randomizer(d);
	      d.ranges = d.ranges.map(d.randomizer);
	      d.markers = d.markers.map(d.randomizer);
	      d.measures = d.measures.map(d.randomizer);
	      return d;
	    }

	    function randomizer(d) {
	      var k = d3.max(d.ranges) * .2;
	      return function(d) {
	        return Math.max(0, d + k * (Math.random() - .5));
	      };
	    }
	// watch button or called by button?
	scope.$watch('button', function () {
		// button
		d3.selectAll("button").on("click", function() {
    	  svg.datum(randomize).call(chart.duration(1000)); // TODO automatic transition
		});
	  });
    });
  }
}
}]);

