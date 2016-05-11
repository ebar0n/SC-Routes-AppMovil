angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {
	$scope.routes = [
		{
			company: '21 de mayo',
			price: 40,
			initialRoutesCompany: 'Centro',
			mainRoutesCompany: [
				'La guayana',
				'Pueblo nuevo'
			],
			finalRoutesCompany: 'Hospital militar'
		}
	];
})
   
.controller('acercaCtrl', function($scope) {

})
    