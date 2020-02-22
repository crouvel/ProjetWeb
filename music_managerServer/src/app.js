var express = require('express');
var mongoose = require ('mongoose');
var app = express();
var nunjucks = require('nunjucks');


nunjucks.configure('views', {
	autoescape: true,
	express: app
});
app.get('/',(req, res) =>{
	res.send('salut');
})

console.log('MusicManager lancé sur le port 3000');
app.listen(3000);