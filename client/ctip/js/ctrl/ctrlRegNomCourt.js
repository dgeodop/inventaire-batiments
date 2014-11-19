var ctrlRegNomCourt = angular.module('ctrlRegNomCourt', []);

ctrlRegNomCourt.controller("ctrlRegNomCourt", function($http, $scope, $routeParams){
	var app = this;
	$http.get('/ctip/nomreg/')
	.success(function(data) {
		$scope.regs = data;
		app.modifNomCourt = function(event) {
			var idReg = event.id_reg;
			$http.post('/ctip/nomreg/' + idReg, event)
			.success(function(data) {
				$scope.regs = data;
			})
		}
	});
});
