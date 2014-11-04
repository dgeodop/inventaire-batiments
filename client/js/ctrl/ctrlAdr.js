var ctrlAdr = angular.module('ctrlAdr', []);

ctrlAdr.controller("ctrlLoc", function($scope,$http,$routeParams){
	var idBat = $routeParams.idBat;
	$scope.idBat = idBat;
	$http.get("api/adr/loc")
	.success(function(data) {
		$scope.locs= data;
	})
	var app = this;
	app.choixLoc = function(lo) {
		var idLoc = app.lo.idLoc;
		window.location = "#/" + idBat + "/modif_adresse_bat/" + idLoc;
	}
});

ctrlAdr.controller("ctrlRue", function($scope,$http,$routeParams){
	var idBat = $routeParams.idBat;
	var idLoc = $routeParams.idLoc;
	$scope.idBat = idBat;
	$scope.idLoc = idLoc;
	$http.get("api/adr/loc/" + idLoc)
	.success(function(data) {
		$scope.rues= data;
	})
	var app = this;
	app.choixRue = function(ru) {
		var idRue = app.ru.idRue;
		window.location = "#/" + idBat + "/modif_adresse_bat/" + idLoc + "/" + idRue;
	}
});

app.controller("ctrlRueNo", function($scope,$http,$routeParams){
	var idBat = $routeParams.idBat;
	var idLoc = $routeParams.idLoc;
	var idRue = $routeParams.idRue;
	$scope.idBat = idBat;
	$scope.idLoc = idLoc;
	$scope.idRue = idRue;
	$http.get("api/adr/loc/" + idLoc + "/rue/" + idRue)
	.success(function(data) {
		$scope.ruenos= data;
	})
	var app = this;
	app.choixRueNo = function(no) {
		var idRueNo = app.no.idRueNo;
		window.location = "#/" + idBat + "/modif_adresse_bat/" + idLoc + "/" + idRue + "/" + idRueNo;
	}
});

app.controller("ctrlAdrFin", function($scope,$http,$routeParams){
	var idBat = $routeParams.idBat;
	var idLoc = $routeParams.idLoc;
	var idRue = $routeParams.idRue;
	var idRueNo = $routeParams.idRueNo;
	var app = this;
	$http.get("api/adr/loc/" + idLoc + "/rue/" + idRue + "/no/" + idRueNo)
		.success(function(data) {
			$scope.adr = data[0];
			$scope.adr.idBat = parseInt(idBat);
			app.adr = $scope.adr;
		})
	app.editAdr = function(adr) {
		$http.post("api/bat/" + idBat + "/adr", adr)
			.success(function(data) {
				window.location = "#/" + idBat;
			})
	}
});
