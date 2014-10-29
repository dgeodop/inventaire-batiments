var express = require('express');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var passportLocal = require('passport-local');
var auth = require('./auth');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressSession({ 
	secret: 'key',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/etb/:idEtabl/js', express.static(__dirname + '/client/js'));
app.use('/etb/:idEtabl/css', express.static(__dirname + '/client/css'));
app.use('/etb/:idEtabl/partials', express.static(__dirname + '/client/partials'));

app.get('/login', function(req,res) { res.render('login'); });
app.post('/login', passport.authenticate('local'), function(req,res){
	var idEtabl= req.user.id;
	res.redirect('/etb/' + idEtabl + '/');
});
app.get('/etb/:idEtabl/', auth.check, function(req, res){
	res.sendFile(__dirname + '/client/index.html');
});

app.get('/etb/:idEtabl/api/bat/', auth.check, function(req, res){
	var data = [{id_bat:1, nom_bat: "Truc"},{id_bat:2, nom_bat: "Machin"},{id_bat:3, nom_bat: "Machintruc"}];
	res.send(data);
});
app.get('/etb/:idEtabl/api/bat/:idBat', auth.check, function(req, res){
	var data = [{id_bat:3, nom_bat: "Machintruc", rue: "rue truc"}];
	res.send(data);
});
app.listen(3000, function() { console.log('Listening on 3000'); });
