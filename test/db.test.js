'use stict';

var assert = require('assert');
	, db = require('../lib/db')
	, nocklib = require('..lib/nocklib');
	, should = require('should');

var exchangeData = {};

suite('database', function(){
	var insertOrder;

	test('open should open a database', function (done) {
		db.open(done);
	});

	test('inset should insert a transcation', function(done){
		var ord = nocklib.generateRandomOrder(exchangeData)
		db.insertOne('transcation', ord, function(err, order){
			should.not.exist(err);
			should.exist(order._id);
			insertOrder = order;
			done();
		});
	});

	test('findOne should find a single transcation', function(done){
		var id = insertOrder._id;
		db.findOne('transcation', id, function(done){
			should.not.exist(err);
			should.exist(order._id);
			order.price.should.eql(insertOrder.price);
			order.volume.should.eql(insertOrder.volume);
			done();
		});
	});
});