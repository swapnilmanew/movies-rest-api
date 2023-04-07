const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Route to get all movies with pagination
router.get('/', movieController.getAllMovies);

// Route to get a specific movie by ID
router.get('/:id', movieController.getMovieById);

// Route to create a new movie
router.post('/', movieController.createMovie);

// Route to update a specific movie by ID
router.put('/:id', movieController.updateMovieById);

// Route to delete a specific movie by ID
router.delete('/:id', movieController.deleteMovieById);

module.exports = router;
