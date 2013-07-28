'use strict'

var assert = require('assert'),
	should = require('should');

var exchangeData = {};

suite('exchange', function(){

});

test('buy should add smth', function(done){
	exchangeData = exchange.buy(40, 100, exchangeData);
	exchangeData.buys.volumes[40].should.eql(100);
	done();
});

test('sell should add a sell order', function(done){
	exchangeData = exchange.sell(41, 200, exchangeData);
	exchangeData.sells.volumes[41].should.eql(200);
	done();
});

test('should prodeuce trades', function(done){
	exchangeData = exchange.buy(40, 75, exchangeData);
	exchangeData.trades[0].price.should.eql(40);
	exchangeData.trades[0].volumes.should.eql(75);
	exchangeData.buys.volumes[41].should.eql(25);
	exchangeData.sells.volumes[41].should.eql(200);
	done();
});