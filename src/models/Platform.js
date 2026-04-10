const db = require('../config/database');

class Platform {
  static async paginate(page = 1, limit = 20) {
    const offset = (page - 1) * limit;
    
    const results = await db('platforms')
      .select('*')
      .limit(limit)
      .offset(offset);
    
    const totalCountResult = await db('platforms').count('id as count').first();
    const totalCount = totalCountResult.count;

    return {
      results,
      totalCount,
      pages: Math.ceil(totalCount / limit)
    };
  }

  static async findById(id) {
    return db('platforms').where({ id }).first();
  }

  static async findByIds(ids) {
    return db('platforms').whereIn('id', ids);
  }

  static async count() {
    const result = await db('platforms').count('id as count').first();
    return result.count;
  }
}

module.exports = Platform;
