const mongoose = require('mongoose');

const seasonSchema = new mongoose.Schema({
  seasonNumber: { type: Number, required: true },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
});

const Season = mongoose.model('Season', seasonSchema);

module.exports = Season;
