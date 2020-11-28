require('dotenv').config();

var express = require('express');
var	port = process.env.PORT || 8000;
var	app = express();
	
var http = require('http');
var	reload = require('reload');

app.use(express.static('dist'));

app.get('/', function(req, res){
    res.render('index.html');
});

var server = http.createServer(app);
reload(app).then(function () {	
	server.listen(port, () => console.log(`Starting my server on NodeJS: Listening on ${ port }`));
}).catch(function (err) {
	console.error('Reload could not start, could not start server/sample app', err);
});