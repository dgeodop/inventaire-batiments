var routes = angular.module('routes', []);

routes.config(['$routeProvider',
 function($routeProvider) {
 $routeProvider
 	.when('/', {templateUrl: 'partials/bat_in_etabl.html'})
	.when('/suppr_bat', {templateUrl: 'partials/suppr_bat.html'})
	.when('/ajout_bat', {templateUrl: 'partials/ajout_bat.html'})
	.when('/ajout_bat/ancien', {templateUrl: 'partials/ajout_bat_ancien.html'})
	.when('/ajout_bat/autre_etabl', {templateUrl: 'partials/ajout_bat_autre_etabl.html'})
	.when('/ajout_bat/autre_etabl/:nomLoc', {templateUrl: 'partials/ajout_bat_autre_etabl_loc.html'})
	.when('/ajout_bat/nouveau', {templateUrl: 'partials/ajout_bat_nouveau.html'})
 	.when('/:idBat', {templateUrl: 'partials/bat.html'})
	.when('/:idBat/modif_nom_bat', {templateUrl: 'partials/modif_nom_bat.html'})
	.when('/:idBat/modif_salles_bat', {templateUrl: 'partials/modif_salles_bat.html'})
	.when('/:idBat/modif_annees_bat', {templateUrl: 'partials/modif_annees_bat.html'})
	.when('/:idBat/modif_site_bat', {templateUrl: 'partials/modif_site_bat.html'})
	.when('/:idBat/modif_adresse_bat', {templateUrl: 'partials/modif_adresse_bat.html'})
	.when('/:idBat/modif_adresse_bat/:idLoc', {templateUrl: 'partials/modif_adresse_bat_rue.html'})
	.when('/:idBat/modif_adresse_bat/:idLoc/:idRue', {templateUrl: 'partials/modif_adresse_bat_rueno.html'})
	.when('/:idBat/modif_adresse_bat/:idLoc/:idRue/:idRueNo', {templateUrl: 'partials/modif_adresse_bat_fin.html'})
 	.otherwise({redirectTo: '/'});
 }]);
