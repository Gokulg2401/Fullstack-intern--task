const express = require('express');
const cors = require('cors');
const db = require('./database');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const templateRoutes = require('./routes/templates');

const app = express();

app.use(cors());
app.use(express.json());

// Initialize database tables
const initDatabase = async () => {
  try {
    // Create users table
    await db.schema.hasTable('users').then(exists => {
      if (!exists) {
        return db.schema.createTable('users', table => {
          table.increments('id').primary();
          table.string('name').notNullable();
          table.string('email').unique().notNullable();
          table.string('password').notNullable();
          table.timestamps(true, true);
        });
      }
    });

    // Create templates table
    await db.schema.hasTable('templates').then(exists => {
      if (!exists) {
        return db.schema.createTable('templates', table => {
          table.increments('id').primary();
          table.string('name').notNullable();
          table.text('description').notNullable();
          table.string('thumbnail_url').notNullable();
          table.string('category').notNullable();
          table.timestamps(true, true);
        });
      }
    });

    // Create user_favorites table
    await db.schema.hasTable('user_favorites').then(exists => {
      if (!exists) {
        return db.schema.createTable('user_favorites', table => {
          table.increments('id').primary();
          table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
          table.integer('template_id').references('id').inTable('templates').onDelete('CASCADE');
          table.unique(['user_id', 'template_id']);
          table.timestamps(true, true);
        });
      }
    });

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
  }
};

initDatabase();

app.use('/api/auth', authRoutes);
app.use('/api/templates', templateRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));