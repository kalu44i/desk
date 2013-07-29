var  mongoose = require('mongoose')
	,User = require('../models/User.js');


var username = "RusKovv";
var password = "Curiosity2012KovRus";
var adress = '@ds037368.mongolab.com:37368/deskdb';
var url = 'mongodb://' + username + ':' + password + adress;

mongoose.connect(url);
var db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));

module.exports = {
	addUser: function addUser(user, callback){
		user.save(callback);
	},
	findUser: function findOne(query, populate, callback) {
		User
		.find(query)
		.populate({options: { limit: 1 }})
		.exec(callback)
	},
	findUsers: function findUsers(query, populate, callback){
		User
		.find(query)
		.populate(populate)
		.exec(callback)
	},

	deleteUser: function(query, callback){
		User.remove(query, callback);
	},

	checkConnection: function checkConnection(callback){
		db.once('open', callback);
	}
};

function disconnect() {mongoose.disconnect()}

//module.exports = User;
/*
var aaron = new Person({ _id: 0, name: 'Aaron', age: 100 });

aaron.save(function (err) {
  if (err) return handleError(err);
  
  var story1 = new Story({
    title: "Once upon a timex.",
    _creator: aaron._id    // assign the _id from the person
  });
  
  story1.save(function (err) {
    if (err) return handleError(err);
    // thats it!
  });
})
*/
