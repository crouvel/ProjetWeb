var express = require('express');
var mongoose = require ('mongoose');
var app = express();
var nunjucks = require('nunjucks');

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
nunjucks.configure('views', {
	autoescape: true,
	express: app
});
app.get('/',(req, res) =>{
	res.send('salut');
})

console.log('MusicManager lancé sur le port 3000');
app.listen(3000);