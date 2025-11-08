const db = require('../database');
const bcrypt = require('bcryptjs');

class User {
  static async create(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const [id] = await db('users').insert({
      name: userData.name,
      email: userData.email,
      password: hashedPassword
    });
    return { id, name: userData.name, email: userData.email };
  }

  static async findByEmail(email) {
    return await db('users').where({ email }).first();
  }

  static async findById(id) {
    return await db('users').where({ id }).first();
  }

  static async comparePassword(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
  }

  static async addFavorite(userId, templateId) {
    return await db('user_favorites').insert({
      user_id: userId,
      template_id: templateId
    }).onConflict(['user_id', 'template_id']).ignore();
  }

  static async getFavorites(userId) {
    return await db('user_favorites')
      .join('templates', 'user_favorites.template_id', 'templates.id')
      .where('user_favorites.user_id', userId)
      .select('templates.*');
  }

  static async removeFavorite(userId, templateId) {
    return await db('user_favorites')
      .where({ user_id: userId, template_id: templateId })
      .del();
  }
}

module.exports = User;