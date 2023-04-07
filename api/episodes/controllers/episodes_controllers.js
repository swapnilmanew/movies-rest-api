const Episode = require('../models/episode');

// CREATE episode
const createEpisode = async (req, res) => {
  try {
    const { seasonId, episodeNumber, downloadLink } = req.body;
    const episode = new Episode({ seasonId, episodeNumber, downloadLink });
    const newEpisode = await episode.save();
    res.status(201).json(newEpisode);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// GET all episodes
const getAllEpisodes = async (req, res) => {
  try {
    const episodes = await Episode.find().populate('seasonId', 'seasonNumber');
    res.status(200).json(episodes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// GET episode by ID
const getEpisodeById = async (req, res) => {
  try {
    const { id } = req.params;
    const episode = await Episode.findById(id).populate(
      'seasonId',
      'seasonNumber'
    );
    if (!episode) {
      return res.status(404).json({ message: 'Episode not found' });
    }
    res.status(200).json(episode);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// UPDATE episode
const updateEpisode = async (req, res) => {
  try {
    const { id } = req.params;
    const { episodeNumber, downloadLink } = req.body;
    const episode = await Episode.findByIdAndUpdate(
      id,
      { episodeNumber, downloadLink },
      { new: true }
    );
    if (!episode) {
      return res.status(404).json({ message: 'Episode not found' });
    }
    res.status(200).json(episode);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// DELETE episode
const deleteEpisode = async (req, res) => {
  try {
    const { id } = req.params;
    const episode = await Episode.findByIdAndDelete(id);
    if (!episode) {
      return res.status(404).json({ message: 'Episode not found' });
    }
    res.status(200).json({ message: 'Episode deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createEpisode,
  getAllEpisodes,
  getEpisodeById,
  updateEpisode,
  deleteEpisode,
};
