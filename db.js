// connect to cloud database.

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

var username = "RusKovv";
var password = "Curiosity2012KovRus";
var adress = '@ds037368.mongolab.com:37368/deskdb';
connect();

function connect() {
	var url = 'mongodb://' + username + ':' + password + adress;
	mongoose.connect(url);
}

function disconnect() {mongoose.disconnect()}

