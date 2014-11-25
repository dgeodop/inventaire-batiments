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
var ctrlLogin = require('./controllers/login');
var ctrlCarte = require('./controllers/carte');
var ctrlCtip = require('./controllers/ctip');
var ctrlCtipBat = require('./controllers/ctipbat');

//config
app.set('views', './views');
app.set('view engine', 'jade');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressSession({ 
	secret: 'key',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//login avec jade
app.get('/login', ctrlLogin.loginView);
app.post('/login', passport.authenticate('local'), ctrlLogin.loginPost);
app.get('/logout', ctrlLogin.logout);

//lib JS sclients
app.use('/lib', express.static(__dirname + '/client/lib'));

//client index
app.use('/js', express.static(__dirname + '/client/index/js'));
app.use('/css', express.static(__dirname + '/client/index/css'));
app.use('/partials', express.static(__dirname + '/client/index/partials'));
app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/index/index.html');
});
app.get('/carte_bat.html', function(req, res){
	res.sendFile(__dirname + '/client/index/carte.html');
});
app.get('/carte/:idEtabl', ctrlCarte.batOfEtabl);

//client etb
app.use('/etb/:idEtabl/js', express.static(__dirname + '/client/etb/js'));
app.use('/etb/:idEtabl/css', express.static(__dirname + '/client/etb/css'));
app.use('/etb/:idEtabl/partials', express.static(__dirname + '/client/etb/partials'));
app.get('/etb/:idEtabl/', auth.check, function(req, res){
	res.sendFile(__dirname + '/client/etb/index.html');
});
app.get('/etb/:idEtabl/geocode.html', auth.check, function(req, res){
	res.sendFile(__dirname + '/client/etb/geocode.html');
});

//client ctip
app.use('/ctip/js', express.static(__dirname + '/client/ctip/js'));
app.use('/ctip/css', express.static(__dirname + '/client/ctip/css'));
app.use('/ctip/partials', express.static(__dirname + '/client/ctip/partials'));
app.get('/ctip/', function(req, res){
	res.sendFile(__dirname + '/client/ctip/index.html');
});

//api routes
app.get('/api/etabl', ctrlEtabl.getAllEtabl);
app.get('/etb/:idEtabl/api/etabl', ctrlEtabl.getId);
app.get('/etb/:idEtabl/api/bat', ctrlBat.getAllBatOfEtabl);
app.get('/etb/:idEtabl/api/ancienbat', ctrlBat.getAllAncienBatOfEtabl);
app.get('/etb/:idEtabl/api/bat/:idBat', ctrlBat.getOne);
app.get('/etb/:idEtabl/api/locbat/', ctrlBat.getAllLocWhereBat);
app.get('/etb/:idEtabl/api/batinloc/:nomLoc', ctrlBat.getAllBatInLoc);

app.post('/etb/:idEtabl/api/bat/:idBat/add/ancien', ctrlPostBat.addAncienBat);
app.post('/etb/:idEtabl/api/bat/:idBat/add/autretabl', ctrlPostBat.addAutreEtablBat);
app.post('/etb/:idEtabl/api/bat/add/nouveau/:nomBat', ctrlPostBat.addNewBat);
app.post('/etb/:idEtabl/api/bat/:idBat/del', ctrlPostBat.delBat);
app.post('/etb/:idEtabl/api/bat/:idBat/nom', ctrlPostBat.editNom);
app.post('/etb/:idEtabl/api/bat/:idBat/anconstr', ctrlPostBat.editAnConstr);
app.post('/etb/:idEtabl/api/bat/:idBat/anrenov', ctrlPostBat.editAnRenov);
app.post('/etb/:idEtabl/api/bat/:idBat/site', ctrlPostBat.editSite);
app.post('/etb/:idEtabl/api/bat/:idBatDgeo/dir', ctrlPostBat.setDir);
app.post('/geo/api/bat/geo', ctrlPostBat.editGeo);

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

app.get('/ctip/nomreg', ctrlCtip.nomReg);
app.post('/ctip/nomreg/:idReg', ctrlCtip.modifNomReg);
app.get('/ctip/nometabl', ctrlCtip.nomEtabl);
app.post('/ctip/nometabl/:idEtabl', ctrlCtip.modifNomEtabl);
app.get('/ctip/nomreletabl', ctrlCtip.nomRelatifEtabl);
app.post('/ctip/nomreletabl/:idEtabl', ctrlCtip.modifNomRelatifEtabl);
app.get('/ctip/modifs', ctrlCtip.modifs);
app.get('/ctip/modifsTypes', ctrlCtip.modifsTypes);
app.get('/ctip/modifsParType/:typEvent', ctrlCtip.modifsParType);
app.get('/ctip/modifsParEtabl/:idEtabl', ctrlCtip.modifsParEtabl);

app.get('/ctip/event', ctrlCtipBat.eventModif);
app.get('/ctip/nonombat', ctrlCtipBat.noNomBat);
app.get('/ctip/tousbat', ctrlCtipBat.tousBat);
app.get('/ctip/unbatdgeo/:idBatDgeo', ctrlCtipBat.unBatDgeo);
app.get('/ctip/unbat/:idBat', ctrlCtipBat.unBat);
app.post('/ctip/nomcourt/:idBat', ctrlCtipBat.modifNomCourt);
app.post('/ctip/vu/:idBat', ctrlCtipBat.vu);
app.post('/ctip/ajoutnomcourt/:idBat', ctrlCtipBat.ajoutNomCourt);
app.post('/ctip/comment', ctrlCtipBat.comment);
app.post('/ctip/clitin', ctrlCtipBat.clItin);
app.post('/ctip/nomcourt2', ctrlCtipBat.modifNomCourt2);


//démarrer server
var port = process.env.PORT || 3000;
app.listen(port, function() { console.log('Listening on ' + port); });
