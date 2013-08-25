// return some data to the controller
mpDashboard.factory('bulletDataServices', ['$resource', function($resource) {
	return $resource('press/api/v1/bullets/?format=json', {
  		
  		query: {method:'GET', isArray:true, cache:true, withCredentials:true}
  			});
}]);