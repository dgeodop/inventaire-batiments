var ctrlNewBat = angular.module('ctrlNewBat', []);

ctrlNewBat.controller("ctrlAncienBatEtabl", function($scope,$http,$routeParams) {
	$http.get("api/ancienbat/")
		.success(function(data) {
			$scope.bats = data;
		})
	var edit = this;
	edit.addBat = function(bat) {
		var idBat = bat.id_bat;
		$http.post("api/bat/" + idBat + "/add/ancien")
			.success(function(data) {
				window.location = "#/" + idEtabl + "/" + idBat;
			})
	}
});

ctrlNewBat.controller("ctrlLocBatAutreEtabl", function($scope,$http,$routeParams){
	$http.get("api/locbat")
	.success(function(data) {
		$scope.locs= data;
	})
	var app = this;
	app.choixLocBatAutreEtabl = function(lo) {
		var nomLoc = app.lo.nomLoc;
		window.location = "#/ajout_bat/autre_etabl/" + nomLoc;
	}
});

ctrlNewBat.controller("ctrlBatInLoc", function($scope,$http,$routeParams){
	var nomLoc = $routeParams.nomLoc;
	$scope.nomLoc = nomLoc;
	var idEtabl = $routeParams.idEtabl;
	$scope.idEtabl = idEtabl;
	$http.get("api/batinloc/" + nomLoc)
	.success(function(data) {
		$scope.bats= data;
	})
	var app = this;
	app.choixBatAutreEtabl = function(bat) {
		var idBat = bat.id_bat;
		$http.post("api/bat/" + idBat + "/add/autretabl")
			.success(function() {
				window.location = "#/" + idBat;
			});
	}
});

ctrlNewBat.controller("ctrlNouveauBat", function($scope,$http,$routeParams){
	var app = this;
	app.choixNomBat = function(bat) {
		$http.post("api/bat/add/nouveau", bat)
			.success(function(data) {
				var idBat = data.id_bat;
				window.location = "#/" + idBat + "/modif_adresse_bat";
			})
	}
});
