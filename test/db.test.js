'use stict';

var assert = require('assert')
	, db = require('../lib/db')
	, User = require('../models/User.js')
	, should = require('should');


var exchangeData = {};

suite('database', function(){
	var userTestEntity;

	test('check database', function (done) {
		db.checkConnection(done);
	});

	test('add a new user to db', function(done){
		var user = new User();
		user.username = "qessddd";
		user.password = "wddrsssde";
		db.addUser(user, function(err, user){
			should.not.exist(err);
			should.exist(user._id);
			userTestEntity = user;

			done();
		});
	});

	test('find the added user', function(done){
		var id = userTestEntity._id.toString();

		db.findUser({_id:id}, {}, function(err, user){
			should.not.exist(err);
			should.exist(user[0]._id);
			user[0].username.should.eql(userTestEntity.username);
			user[0].password.should.eql(userTestEntity.password);
			done();
		});
	});

	test('delete the added user', function(done){
		var id = userTestEntity._id.toString();

		db.deleteUser({_id:id}, function(err){
			should.not.exist(err);
			done();
		});
	});
});