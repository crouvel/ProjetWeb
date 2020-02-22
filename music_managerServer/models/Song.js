var mongoose = require('mongoose');

var SongSchema = new mongoose.Schema({
	name: String,
	kinds : [
     {
     	kind: mongoose.Kinds.ObjectId,
     	ref: 'Kinds'
     }
	]
});

var Song = mongoose.model('Song', SongSchema);

module.exports = Song; 