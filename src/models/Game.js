const db = require('../config/database');

class Game {
  static async paginate(page = 1, limit = 20, filters = {}) {
    const offset = (page - 1) * limit;
    
    let query = db('games')
      .join('genres', 'games.genre_id', 'genres.id')
      .join('platforms', 'games.platform_id', 'platforms.id')
      .select(
        'games.*',
        'genres.name as genre',
        'platforms.name as platform'
      );

    if (filters.name) {
      query = query.where('games.name', 'like', `%${filters.name}%`);
    }
    if (filters.year) {
      query = query.where('games.year', filters.year);
    }
    if (filters.genre) {
      query = query.where('genres.name', 'like', `%${filters.genre}%`);
    }
    if (filters.platform) {
      query = query.where('platforms.name', 'like', `%${filters.platform}%`);
    }

    const results = await query.clone().limit(limit).offset(offset);
    
    const countQuery = db('games')
      .join('genres', 'games.genre_id', 'genres.id')
      .join('platforms', 'games.platform_id', 'platforms.id');

    if (filters.name) countQuery.where('games.name', 'like', `%${filters.name}%`);
    if (filters.year) countQuery.where('games.year', filters.year);
    if (filters.genre) countQuery.where('genres.name', 'like', `%${filters.genre}%`);
    if (filters.platform) countQuery.where('platforms.name', 'like', `%${filters.platform}%`);

    const totalCountResult = await countQuery.count('games.id as count').first();
    const totalCount = totalCountResult.count;

    return {
      results,
      totalCount,
      pages: Math.ceil(totalCount / limit)
    };
  }

  static async findById(id) {
    return db('games')
      .join('genres', 'games.genre_id', 'genres.id')
      .join('platforms', 'games.platform_id', 'platforms.id')
      .select(
        'games.*',
        'genres.name as genre',
        'platforms.name as platform'
      )
      .where('games.id', id)
      .first();
  }

  static async findByIds(ids) {
    return db('games')
      .join('genres', 'games.genre_id', 'genres.id')
      .join('platforms', 'games.platform_id', 'platforms.id')
      .select(
        'games.*',
        'genres.name as genre',
        'platforms.name as platform'
      )
      .whereIn('games.id', ids);
  }

  static async count() {
    const result = await db('games').count('id as count').first();
    return result.count;
  }
}

module.exports = Game;
