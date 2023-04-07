const Movie = require('../models/movie');

// Controller to get all movies with pagination
exports.getAllMovies = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = 10;

  try {
    const count = await Movie.countDocuments();
    const movies = await Movie.find()
      .skip((page - 1) * perPage)
      .limit(perPage);

    const totalPages = Math.ceil(count / perPage);
    const nextPage = page < totalPages ? `/movies?page=${page + 1}` : null;
    const prevPage = page > 1 ? `/movies?page=${page - 1}` : null;

    res.status(200).json({
      movies,
      totalPages,
      currentPage: page,
      nextPage,
      prevPage,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to get a specific movie by ID
exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      res.status(200).json(movie);
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to create a new movie
exports.createMovie = async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    director: req.body.director,
    releaseDate: req.body.releaseDate,
  });
  try {
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller to update a specific movie by ID
exports.updateMovieById = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedMovie) {
      res.status(200).json(updatedMovie);
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller to delete a specific movie by ID
exports.deleteMovieById = async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    if (deletedMovie) {
      res.status(200).json(deletedMovie);
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
