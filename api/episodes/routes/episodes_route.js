const express = require('express');
const router = express.Router();
const episodesController = require('../controllers/episodesController');

// Create a new episode
router.post('/', episodesController.createEpisode);

// Get all episodes
router.get('/', episodesController.getAllEpisodes);

// Get a single episode by ID
router.get('/:id', episodesController.getEpisodeById);

// Update an existing episode by ID
router.put('/:id', episodesController.updateEpisodeById);

// Delete an episode by ID
router.delete('/:id', episodesController.deleteEpisodeById);

module.exports = router;
