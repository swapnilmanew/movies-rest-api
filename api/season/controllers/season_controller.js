const Season = require('../models/season');

// create a season
exports.createSeason = async (req, res) => {
  try {
    const { seasonNumber, movie } = req.body;
    const season = await Season.create({ seasonNumber, movie });
    res.status(201).json(season);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// get all seasons
exports.getAllSeasons = async (req, res) => {
  try {
    const seasons = await Season.find();
    res.status(200).json(seasons);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// get a season by id
exports.getSeasonById = async (req, res) => {
  try {
    const { id } = req.params;
    const season = await Season.findById(id);
    if (!season) {
      return res.status(404).json({ error: 'Season not found' });
    }
    res.status(200).json(season);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// update a season by id
exports.updateSeasonById = async (req, res) => {
  try {
    const { id } = req.params;
    const { seasonNumber, movie } = req.body;
    const season = await Season.findByIdAndUpdate(
      id,
      { seasonNumber, movie },
      { new: true }
    );
    if (!season) {
      return res.status(404).json({ error: 'Season not found' });
    }
    res.status(200).json(season);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// delete a season by id
exports.deleteSeasonById = async (req, res) => {
  try {
    const { id } = req.params;
    const season = await Season.findByIdAndDelete(id);
    if (!season) {
      return res.status(404).json({ error: 'Season not found' });
    }
    res.status(204).json({ message: 'Season deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
