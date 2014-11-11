var routes = angular.module('routes', []);

routes.config(['$routeProvider',
 function($routeProvider) {
 $routeProvider
 	.when('/', {templateUrl: 'partials/liste.html'})
	.when('/liste_etabl/:idEtabl', {templateUrl: 'partials/liste_etabl.html'})
	.when('/detail/:idEtabl/:idBat', {templateUrl: 'partials/detail.html'})
 	.otherwise({redirectTo: '/'});
 }]);
