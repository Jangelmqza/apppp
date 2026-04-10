const Genre = require('../models/Genre');

const getAllGenres = async (req, res, next) => {
  try {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    if (isNaN(page) || page < 1) {
      const error = new Error('Page must be a positive integer');
      error.status = 400;
      throw error;
    }

    const limit = 20;
    const { results, totalCount, pages } = await Genre.paginate(page, limit);

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

const getGenreById = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    if (id.includes(',')) {
      const ids = id.split(',').map(i => parseInt(i.trim())).filter(i => !isNaN(i));
      if (ids.length === 0) {
        const error = new Error('No valid IDs provided');
        error.status = 400;
        throw error;
      }
      const genres = await Genre.findByIds(ids);
      return res.json(genres);
    }

    const numericId = parseInt(id);
    if (isNaN(numericId)) {
      const error = new Error('ID must be a number');
      error.status = 400;
      throw error;
    }

    const genre = await Genre.findById(numericId);
    if (!genre) {
      const error = new Error('Genre not found');
      error.status = 404;
      throw error;
    }
    res.json(genre);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllGenres,
  getGenreById
};
