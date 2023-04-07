const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
  episodeNumber: { type: Number, required: true },
  episodeDownloadLink: { type: String, required: true },
  season: { type: mongoose.Schema.Types.ObjectId, ref: 'Season' },
});

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = Episode;
