var ctrlBat = angular.module('ctrlEtabl', []);

ctrlBat.controller("ctrlEtabl", function($scope, $http, $routeParams) {
	$http.get("api/etabl/")
		.success(function(data) {
			$scope.etabls = data;
		});
	var app = this;
	app.choix = function(etb) {
		var idEtabl = app.etb.idEtabl;
		window.location = "#/liste_etabl/" + idEtabl;
	}
});
