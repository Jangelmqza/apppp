const Game = require('../models/Game');

const getAllGames = async (req, res, next) => {
  try {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    if (isNaN(page) || page < 1) {
      const error = new Error('Page must be a positive integer');
      error.status = 400;
      throw error;
    }

    const year = req.query.year ? parseInt(req.query.year) : null;
    if (req.query.year && (isNaN(year) || year < 1900)) {
      const error = new Error('Year must be a valid four-digit number');
      error.status = 400;
      throw error;
    }

    const limit = 20;
    const filters = {
      name: req.query.name,
      year: year,
      genre: req.query.genre,
      platform: req.query.platform
    };

    const { results, totalCount, pages } = await Game.paginate(page, limit, filters);

    if (results.length === 0) {
      const error = new Error('There is nothing here');
      error.status = 404;
      throw error;
    }

    res.json({
      info: {
        count: totalCount,
        pages: pages,
        next: page < pages ? `http://${req.get('host')}${req.baseUrl}${req.path}?page=${page + 1}` : null,
        prev: page > 1 ? `http://${req.get('host')}${req.baseUrl}${req.path}?page=${page - 1}` : null
      },
      results
    });
  } catch (error) {
    next(error);
  }
};

const getGameById = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    if (id.includes(',')) {
      const idArray = id.split(',').map(i => i.trim());
      const ids = idArray.map(i => parseInt(i)).filter(i => !isNaN(i));
      
      if (ids.length === 0) {
        const error = new Error('No valid IDs provided');
        error.status = 400;
        throw error;
      }

      const games = await Game.findByIds(ids);
      return res.json(games);
    }

    const numericId = parseInt(id);
    if (isNaN(numericId)) {
      const error = new Error('ID must be a number');
      error.status = 400;
      throw error;
    }

    const game = await Game.findById(numericId);
    if (!game) {
      const error = new Error('Game not found');
      error.status = 404;
      throw error;
    }
    res.json(game);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllGames,
  getGameById
};
