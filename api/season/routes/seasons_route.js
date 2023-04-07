const express = require('express');
const router = express.Router();
const seasonsController = require('../controllers/seasonsController');

// Create a new season
router.post('/', seasonsController.createSeason);

// Get all seasons
router.get('/', seasonsController.getAllSeasons);

// Get a single season by ID
router.get('/:id', seasonsController.getSeasonById);

// Update an existing season by ID
router.put('/:id', seasonsController.updateSeasonById);

// Delete a season by ID
router.delete('/:id', seasonsController.deleteSeasonById);

module.exports = router;
