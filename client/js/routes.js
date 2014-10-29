var routes = angular.module('routes', []);

routes.config(['$routeProvider',
 function($routeProvider) {
 $routeProvider
 	.when('/', {templateUrl: 'partials/bat-of-etabl.html'})
 	.when('/:idBat', {templateUrl: 'partials/bat.html'})
 	.otherwise({redirectTo: '/'});
 }]);
