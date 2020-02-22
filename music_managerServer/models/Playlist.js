var mongoose = require('mongoose');

var PlaylistSchema = new mongoose.Schema({
	name: String,
	creatingDate: Number,
	description: String,
	kinds : [
     {
     	kind: mongoose.Kinds.ObjectId,
     	ref: 'Kinds'
     }
	]
});

var Playlist = mongoose.model('Playlist', PlaylistSchema);

module.exports = Playlist; 