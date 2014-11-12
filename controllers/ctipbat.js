var pg = require('pg');
var bd = require('../credentials/bd');
var connectString = 'tcp://' + bd.username + ':' + bd.password + '@localhost/postgres';

exports.eventModif = function(req, res) {
	var query = 'SELECT * FROM ctip_event_unchecked';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query, null, function(err, result) {
			done();
			if(err) { return console.error('ctrlCtipBat.eventModif', err); }
			var events=result.rows;
			res.send(events);
		});
	});
}

exports.noNomBat = function(req, res) {
	var query = 'SELECT bat.id_bat, bat_dgeo.id_bat_dgeo, nom_bat, ctip_bat_nom FROM bat_dgeo, bat WHERE bat.id_bat=bat_dgeo.id_bat AND ctip_bat_nom IS NULL ORDER BY bat_dgeo.id_bat_dgeo';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query, null, function(err, result) {
		  done();
		  if(err) { return console.error('ctrlCtipBat.noNomBat', err); }
			var bats=result.rows;
			res.send(bats);
		});
	});
}

exports.tousBat = function(req, res) {
	var query = 'SELECT bat.id_bat, id_bat_dgeo, nom_bat, ctip_bat_nom, util FROM bat, bat_dgeo WHERE bat.id_bat=bat_dgeo.id_bat ORDER BY id_bat_dgeo';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query, null, function(err, result) {
			done();
			if(err) { return console.error('ctrlCtipBat.tousBat', err); }
			var bats = result.rows;
			res.send(bats);
		});
	});
}

exports.modifNomCourt = function(req, res) {
	var idBat = req.params.idBat;
	var nomBat = req.body.nouvNomCtip;
	var query1 = 'UPDATE bat SET ctip_bat_nom=$1 WHERE id_bat=$2';
	var query2 = 'UPDATE event SET vu=1 WHERE id_bat=$1';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query1, [nomBat, idBat], function(err, result) {
			done();
			if(err) { return console.error('Problème avec la requête', err); }
			pg.connect(connectString, function(err, client, done) {
				if(err) { return console.error('ctrlCtipBat.modifNomCourt.query1', err); }
				client.query(query2, [idBat], function(err, result) {
					done();
					if(err) { return console.error('ctrlCtipBat.modifNomCourt.query2', err); }
					res.redirect('/ctip/nonombat');
				});
			});
		});
	});
}

exports.ajoutNomCourt = function(req, res) {
	var idBat = req.params.idBat;
	var nomBat = req.body.nouvNomCtip;
	var query1 = 'UPDATE bat SET ctip_bat_nom=$1 WHERE id_bat=$2';
	var query2 = 'UPDATE event SET vu=1 WHERE id_bat=$1';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query1, [nomBat, idBat], function(err, result) {
			done();
			if(err) { return console.error('ctrlCtipBat.ajoutNomCourt.query1', err); }
			pg.connect(connectString, function(err, client, done) {
				if(err) { return console.error('Problème de connection à la base de données', err); }
				client.query(query2, [idBat], function(err, result) {
					done();
					if(err) { return console.error('ctrlCtipBat.ajoutNomCourt.query2', err); }
					res.redirect('/ctip/event');
				});
			});
		});
	});
}

exports.comment = function(req, res) {
	var comment = req.body.comment;
	var idBatDgeo = req.body.idBatDgeo;
	var query = 'UPDATE bat_dgeo SET ctip_comment=$1 WHERE id_bat_dgeo=$2';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query, [comment, idBatDgeo], function(err, result) {
			done();
			if(err) { return console.error('ctrlCtipBat.comment', err); }
			res.redirect('/ctip/tousbat');
		});
	});
}

exports.clItin = function(req, res) {
	var clItin = req.body.clItin;
	var idBatDgeo = req.body.idBatDgeo;
	var query = 'UPDATE bat_dgeo SET ctip_cl_itin=$1 WHERE id_bat_dgeo=$2';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query, [clItin, idBatDgeo], function(err, result) {
			done();
			if(err) { return console.error('ctrlCtipBat.clitin', err); }
			res.redirect('/ctip/tousbat');
		});
	});
}

exports.vu = function(req, res) {
	var idBat = req.params.idBat;
	var query = 'UPDATE event SET vu=1 WHERE id_bat=$1';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query, [idBat], function(err, result) {
			done();
			if(err) { return console.error('ctrlCtipBat.vu', err); }
			res.redirect('/ctip/event');
		});
	});
}
