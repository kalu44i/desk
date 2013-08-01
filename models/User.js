var  mongoose = require('mongoose')
   , Schema = mongoose.Schema;


var UserSchema = new mongoose.Schema({
	username : {type: String, unique: true},
	password : String,
});

module.exports = mongoose.model('User', UserSchema, "UserCollection");