var pg = require('pg');
var bd = require('../credentials/bd');
var connectString = 'tcp://' + bd.username + ':' + bd.password + '@localhost/postgres';

exports.batOfEtabl = function(req, res) {
	var idEtabl = req.params.idEtabl;
	var query = 'SELECT id_bat_dgeo, bat.nom_bat, lat, lng FROM bat, bat_dgeo WHERE bat.id_bat=bat_dgeo.id_bat AND util=1 AND id_etabl=$1 ORDER BY nom_bat';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query, [idEtabl], function(err, result) {
		  done();
		  if(err) { return console.error('ctrlLogin.liste', err); }
			var data = result.rows;
			res.render('carte', {data:data});
		});
	});
}
