/***
    D3 bullet chart directive
***/
(function() {
'use strict';

angular.module('mpDashboard.directives', []).
directive('scDirective', ['d3', function (d3) {
  return {
    restrict: 'E',
    scope: {
        // attributes
        margin: '@',
        width: '@',
        height: '@',

        // Binding with controller
        data: '='
    },
    // link declares the function to be evaluated when bound data changes
    link: function postLink(scope, element, attrs) {
        // default values
        var margin = {top: 5, right: 40, bottom: 20, left: 120},
            width = 960 - margin.left - margin.right,
            height = 50 - margin.top - margin.bottom;

        // scope var
        var data;

        //chart var
        var svg, chart, title;

        // check and set attributes, else keep default values
        if (angular.isDefined(attrs.width)) width = attrs.width;
        if (angular.isDefined(attrs.height)) height = attrs.height;
        if (angular.isDefined(attrs.margin)) margin = attrs.margin;

        // check scope
        if (angular.isDefined(scope.data)) data = scope.data;

        //create chart
        var buildChart = function (data) {
            //create svg for chart injection
            chart = d3.bullet().
                width(width).
                height(height);
            // select attributes    
            svg = d3.select("body").selectAll("svg").
                data(data).
                enter().append("svg").
                attr("class", "bullet").
                attr("width", width + margin.left + margin.right).
                attr("height", height + margin.top + margin.bottom).
                append("g").
                attr("transform", "translate(" + margin.left + "," + margin.top + ")").
                call(chart);
                
                title = svg.append("g").
                    style("text-anchor", "end").
                    attr("transform", "translate(-6," + height / 2 + ")");
        
                title.append("text").
                    attr("class", "title").
                    text(data.title);
            
                title.append("text").
                    attr("class", "subtitle").
                    attr("dy", "1em").
                    text(data.subtitle);
            }
        // helper function
        var parseChart = function (data) {
            if(angular.isDefined(scope.data)){
                data = scope.data;
                buildChart(data);
            }
            else{
                alert('you have no data');
            }
            return data;
        };

        // data not available during initial link, call when its detected
        var doDeepWatch = true;
        scope.$watch('data',parseChart,doDeepWatch);
        }
    };
}]);

/*** setup svg objects using global width and heights; can we call d3.select this way?
createSVG = function(scope, element, d3) {
    if (scope.data === null) {
        return scope.svg
    }
};
***/

}).call(this);