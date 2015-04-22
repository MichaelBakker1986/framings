var application_root = __dirname, express = require("express"), path = require("path");
var app = express();
var router = express.Router();
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var connect = require('connect')
app.use(methodOverride('X-HTTP-Method-Override'))
var databaseUrl = "user.db";
// var Datastore = require('nedb');
// var bson = require("bson");
// db = {};
// db.users = new Datastore({
// filename : databaseUrl,
// autoload : true
// });
app.use(bodyParser.urlencoded({
	extended : false
}))
app.use(bodyParser.json());
app.use(express.static('.'));
app.listen(1212);