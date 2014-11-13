var ctrlClItin = angular.module('ctrlClItin', []);

ctrlClItin.controller("ctrlClItin", function($http, $scope, $routeParams){
	var idBat = $routeParams.idBat;
	var app = this;
	$scope.idBat = idBat;
	$http.get('/ctip/unBat/' + idBat)
	.success(function(data) {
		$scope.bat = data;	
		app.modifClItin = function(bat) {
			$http.post('/ctip/clitin', bat)
			.success(function(data) {
				$scope.bat = data;
			})
		} 
	});
});
