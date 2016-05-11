angular

.module('app.controllers', [])

.controller('homeCtrl', function($scope, $http, $timeout) {
  $scope.search = function(search_value){
  	$http.get("http://104.236.241.24:9000/api/search?search=" + search_value, {
  		headers: {
				'Content-Type': 'application/json; charset=utf-8'
			}
		})
	  .then(function(response){
	  	$scope.routes = response.data;
	  });
  };

})
   
.controller('acercaCtrl', function($scope) {

});
    