const db = require('../database');

class Template {
  static async findAll() {
    return await db('templates').select('*');
  }

  static async findById(id) {
    return await db('templates').where({ id }).first();
  }

  static async create(templateData) {
    const [id] = await db('templates').insert(templateData);
    return { id, ...templateData };
  }

  static async insertMany(templates) {
    return await db('templates').insert(templates);
  }

  static async deleteAll() {
    return await db('templates').del();
  }
}

module.exports = Template;