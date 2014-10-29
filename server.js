//dependencies
var express = require('express');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var passportLocal = require('passport-local');
var auth = require('./auth');
var app = express();

//controllers

var ctrlEtabl = require('./controllers/etabl');
var ctrlBat = require('./controllers/bat');
var ctrlPostBat = require('./controllers/postbat');
var ctrlSal = require('./controllers/sal');
var ctrlPostSal = require('./controllers/postsal');
var ctrlAdr = require('./controllers/adr');

//config
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

//client routes
app.use('/etb/:idEtabl/js', express.static(__dirname + '/client/js'));
app.use('/etb/:idEtabl/css', express.static(__dirname + '/client/css'));
app.use('/etb/:idEtabl/partials', express.static(__dirname + '/client/partials'));
app.get('/etb/:idEtabl/', auth.check, function(req, res){
	res.sendFile(__dirname + '/client/index.html');
});

//login avec jade
app.get('/login', function(req,res) { res.render('login'); });
app.post('/login', passport.authenticate('local'), function(req,res){
	var idEtabl= req.user.id;
	res.redirect('/etb/' + idEtabl + '/');
});

//api routes
app.get('/api/etabl', ctrlEtabl.getAllEtabl);
app.get('/etb/:idEtabl/api/bat', ctrlBat.getAllBatOfEtabl);
app.get('/etb/:idEtabl/api/ancienbat', ctrlBat.getAllAncienBatOfEtabl);
app.get('/etb/:idEtabl/api/bat/:idBat', ctrlBat.getOne);
app.get('/etb/:idEtabl/api/locbat/', ctrlBat.getAllLocWhereBat);
app.get('/etb/:idEtabl/api/batinloc/:nomLoc', ctrlBat.getAllBatInLoc);

app.post('/etb/:idEtabl/api/bat/:idBat/add/ancien', ctrlPostBat.addAncienBat);
app.post('/etb/:idEtabl/api/bat/:idBat/add/autretabl', ctrlPostBat.addAutreEtablBat);
app.post('/etb/:idEtabl/api/bat/add/nouveau', ctrlPostBat.addNewBat);
app.post('/etb/:idEtabl/api/bat/:idBat/del', ctrlPostBat.delBat);
app.post('/etb/:idEtabl/api/bat/:idBat/nom', ctrlPostBat.editNom);
app.post('/etb/:idEtabl/api/bat/:idBat/anconstr', ctrlPostBat.editAnConstr);
app.post('/etb/:idEtabl/api/bat/:idBat/anrenov', ctrlPostBat.editAnRenov);
app.post('/etb/:idEtabl/api/bat/:idBat/site', ctrlPostBat.editSite);

app.get('/etb/:idEtabl/api/sal/:idBat', ctrlSal.getAllOfBat);
app.get('/etb/:idEtabl/api/sal/:idBat/notinbat', ctrlSal.getAllNotInBat);
app.post('/etb/:idEtabl/api/sal/:idBat/:idSal/qte', ctrlPostSal.editQte);
app.post('/etb/:idEtabl/api/sal/:idBat/:idSal/del', ctrlPostSal.delSal);
app.post('/etb/:idEtabl/api/sal/:idBat/new', ctrlPostSal.newSal);

app.get('/etb/:idEtabl/api/adr/loc', ctrlAdr.getLocalite);
app.get('/etb/:idEtabl/api/adr/loc/:idLoc', ctrlAdr.getRue);
app.get('/etb/:idEtabl/api/adr/loc/:idLoc/rue/:idRue', ctrlAdr.getRueNo);
app.get('/etb/:idEtabl/api/adr/loc/:idLoc/rue/:idRue/no/:idRueNo', ctrlAdr.getAdr);
app.post('/etb/:idEtabl/api/bat/:idBat/adr', ctrlPostBat.editAdr);

//start server
app.listen(3000, function() { console.log('Listening on 3000'); });
