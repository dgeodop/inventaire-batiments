var ctrlPasNomBat = angular.module('ctrlPasNomBat', []);

ctrlPasNomBat.controller("ctrlPasNomBat", function($scope, $http) {
	var app = this;
	$http.get("/ctip/nonombat")
	.success(function(data) {
		$scope.bats = data;
		app.ajoutNomCtip = function(bat) {
			idBat = bat.id_bat;
			nouvNomCtip = bat.nouvNomCtip;
			$http.post('/ctip/nomcourt/' + idBat, bat)
			.success(function(data) {
				$scope.bats = data;
			});
		}
	});
});

