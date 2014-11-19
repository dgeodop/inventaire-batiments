var ctrlEtablNomRelatif = angular.module('ctrlEtablNomRelatif', []);

ctrlEtablNomRelatif.controller("ctrlEtablNomRelatif", function($http, $scope, $routeParams){
	var app = this;
	$http.get('/ctip/nomreletabl/')
	.success(function(data) {
		$scope.etabls = data;	
		app.modifNomRelatif = function(event) {
			var idEtabl = event.id_etabl;
			$http.post('/ctip/nomreletabl/' + idEtabl, event)
			.success(function(data) {
				$scope.etabls = data;
			})
		}
	});
});
