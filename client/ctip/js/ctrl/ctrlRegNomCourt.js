var ctrlRegNomCourt = angular.module('ctrlRegNomCourt', []);

ctrlRegNomCourt.controller("ctrlRegNomCourt", function($http, $scope, $routeParams){
	var app = this;
	$http.get('/ctip/nomreg/')
	.success(function(data) {
		$scope.regs = data;	console.log(data);
/*
		app.modifNomCourt = function(bat) {
			$http.post('/ctip/nomcourt2', bat)
			.success(function(data) {
				$scope.bat = data;
			})
		} 
*/
	});
});
