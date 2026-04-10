const db = require('../config/database');

class Genre {
  static async paginate(page = 1, limit = 20) {
    const offset = (page - 1) * limit;
    
    const results = await db('genres')
      .select('*')
      .limit(limit)
      .offset(offset);
    
    const totalCountResult = await db('genres').count('id as count').first();
    const totalCount = totalCountResult.count;

    return {
      results,
      totalCount,
      pages: Math.ceil(totalCount / limit)
    };
  }

  static async findById(id) {
    return db('genres').where({ id }).first();
  }

  static async findByIds(ids) {
    return db('genres').whereIn('id', ids);
  }

  static async count() {
    const result = await db('genres').count('id as count').first();
    return result.count;
  }
}

module.exports = Genre;
