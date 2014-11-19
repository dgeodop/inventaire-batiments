var ctrlEtablNomCourt = angular.module('ctrlEtablNomCourt', []);

ctrlEtablNomCourt.controller("ctrlEtablNomCourt", function($http, $scope, $routeParams){
	var app = this;
	$http.get('/ctip/nometabl/')
	.success(function(data) {
		$scope.etabls = data;	
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
