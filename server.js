
var express = require('express')
  , routes = require('./routes')
  , fs = require('fs')
  , User = require('./models/User')
  , db = require('./lib/db');

var app = module.exports = express.createServer();

db.checkConnection(function callback(){
	console.log("done");
});
db.findUser({ _id: "51f6e64fc738403c28000001" },{}, function (err, users) {
  			if (err) return handleError(err);
  				console.log('The stories are an array: ', users);
		});


app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

//request to form
app.get('/form', function(req, res) {
	fs.readFile('./views/form.html', function(error, content) {
		if (error) {
			res.writeHead(500);
			res.end();
		}
		else {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end(content, 'utf-8');
		}
	});
});

app.post("/signup", function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	var i = new User();
	i.username = req.body.username;
	i.password = req.body.username;
	db.addUser(i, function(err, user){
		if(err) throw err;
		res.redirect('/form');
	});

});
var port = process.env.PORT || 8080;
app.listen(port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
