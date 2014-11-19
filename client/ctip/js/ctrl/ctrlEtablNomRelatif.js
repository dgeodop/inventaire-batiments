var ctrlEtablNomRelatif = angular.module('ctrlEtablNomRelatif', []);

ctrlEtablNomRelatif.controller("ctrlEtablNomRelatif", function($http, $scope, $routeParams){
	var app = this;
	$http.get('/ctip/nomreletabl/')
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
