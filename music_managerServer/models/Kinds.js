var mongoose = require('mongoose');

var KindsSchema = new mongoose.Schema({
	name: {
		type: String,
		default:'Unknown type'
	}
	});

typeSchema.virtual('playlist',{
	ref: 'Playlist',
	localField: '_id',
	foreignField: 'types'
});

typeSchema.virtual('song',{
	ref: 'Song',
	localField: '_id',
	foreignField: 'songs'
});