var ctrlNomCourt = angular.module('ctrlNomCourt', []);

ctrlNomCourt.controller("ctrlNomCourt", function($http, $scope, $routeParams){
	var idBat = $routeParams.idBat;
	$scope.idBat = idBat;
	var app = this;
	$http.get('/ctip/unBat/' + idBat)
	.success(function(data) {
		$scope.bat = data;	
		app.modifNomCourt = function(bat) {
			$http.post('/ctip/nomcourt2', bat)
			.success(function(data) {
				$scope.bat = data;
			})
		} 
	});
});
