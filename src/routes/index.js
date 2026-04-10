const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
const Genre = require('../models/Genre');
const Platform = require('../models/Platform');

const gameRoutes = require('./games');
const genreRoutes = require('./genres');
const platformRoutes = require('./platforms');

// API root info
router.get('/', async (req, res) => {
  try {
    const [gameCount, genreCount, platformCount] = await Promise.all([
      Game.count(),
      Genre.count(),
      Platform.count()
    ]);

    res.json({
      info: {
        games: gameCount,
        genres: genreCount,
        platforms: platformCount
      },
      endpoints: {
        games: `http://${req.get('host')}/api/game`,
        genres: `http://${req.get('host')}/api/genre`,
        platforms: `http://${req.get('host')}/api/platform`
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.use('/game', gameRoutes);
router.use('/genre', genreRoutes);
router.use('/platform', platformRoutes);

module.exports = router;
