var pg = require('pg');
var bd = require('../credentials/bd');
var connectString = 'tcp://' + bd.username + ':' + bd.password + '@localhost/postgres';

exports.nomReg = function(req, res) {
	var query = 'SELECT * FROM reg ORDER BY id_reg';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query, null, function(err, result) {
			done();
			if(err) { return console.error('ctrlCtip.nomReg', err); }
			var regs = result.rows;
			res.send(regs);
		});
	});
}

exports.modifNomReg = function(req, res) {
	var idReg = req.params.idReg;
	var nomReg = req.body.nomRegCtip;
	var query = 'UPDATE reg SET ctip_nom_reg=$1 WHERE id_reg=$2';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query, [nomReg, idReg], function(err, result) {
			done();
			if(err) { return console.error('ctrlCtip.modifNomReg', err); }
			res.redirect('/ctip/nomreg');
		});
	});
}

exports.nomEtabl = function(req, res) {
	var query = 'SELECT id_etabl, nom_court, ctip_nom_court FROM etabl WHERE util_ctip=1 ORDER BY nom_court';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query, null, function(err, result) {
			done();
			if(err) { return console.error('ctrlCtip.nomEtabl', err); }
			var etabls = result.rows;
			res.send(etabls);
		});
	});
}

exports.modifNomEtabl = function(req, res) {
	var idEtabl = req.params.idEtabl;
	var nomCourt = req.body.nomCourt;
	var query = 'UPDATE etabl SET ctip_nom_court=$1 WHERE id_etabl=$2';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query, [nomCourt, idEtabl], function(err, result) {
			done();
			if(err) { return console.error('ctrlCtip.modifNomEtabl', err); }
			res.redirect('/ctip/nometabl');
		});
	});
}

exports.nomRelatifEtabl = function(req, res) {
	var query = 'SELECT id_etabl, nom_court, ctip_nom_relatif FROM etabl WHERE util_ctip=1 ORDER BY nom_court';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query, null, function(err, result) {
			done();
			if(err) { return console.error('ctrlCtip.nomRelatifEtabl', err); }
			var etabls = result.rows;
			res.send(etabls);
		});
	});
}

exports.modifNomRelatifEtabl = function(req, res) {
	var idEtabl = req.params.idEtabl;
	var nomRelatif = req.body.nomRelatif;
	var query = 'UPDATE etabl SET ctip_nom_relatif=$1 WHERE id_etabl=$2';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query, [nomRelatif, idEtabl], function(err, result) {
			done();
			if(err) { return console.error('ctrlCtip.modifNomRelatifEtabl', err); }
			res.redirect('/ctip/nomreletabl');
		});
	});
}



