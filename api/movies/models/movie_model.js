const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieTitle: { type: String, required: true },
  ratings: { type: Number, required: true },
  releaseDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isFeatured: { type: Boolean, default: false },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
