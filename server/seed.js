const Template = require('./models/Template');
const db = require('./database');
require('dotenv').config();

const sampleTemplates = [
  {
    name: "E-commerce Dashboard",
    description: "Modern dashboard template for online stores",
    additional_description: "Features responsive design with advanced analytics and inventory management tools.",
    thumbnail_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
    category: "Dashboard"
  },
  {
    name: "Blog Template",
    description: "Clean and minimal blog template",
    additional_description: "Perfect for writers and content creators with SEO optimization and social sharing.",
    thumbnail_url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
    category: "Blog"
  },
  {
    name: "Portfolio Website",
    description: "Professional portfolio template for creatives",
    additional_description: "Showcase your work with stunning galleries and smooth animations.",
    thumbnail_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
    category: "Portfolio"
  },
  {
    name: "Landing Page",
    description: "High-converting landing page template",
    additional_description: "Optimized for conversions with A/B testing support and lead capture forms.",
    thumbnail_url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop",
    category: "Marketing"
  },
  {
    name: "Admin Panel",
    description: "Complete admin panel with charts and tables",
    additional_description: "Built with modern UI components and real-time data visualization capabilities.",
    thumbnail_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
    category: "Dashboard"
  },
  {
    name: "Corporate Website",
    description: "Professional corporate website template",
    additional_description: "Includes contact forms, team sections, and service pages for business growth.",
    thumbnail_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop",
    category: "Business"
  }
];

async function seedDatabase() {
  try {
    console.log('Initializing database tables...');
    
    // Create tables if they don't exist
    await db.schema.hasTable('templates').then(async exists => {
      if (!exists) {
        return db.schema.createTable('templates', table => {
          table.increments('id').primary();
          table.string('name').notNullable();
          table.text('description').notNullable();
          table.text('additional_description');
          table.string('thumbnail_url').notNullable();
          table.string('category').notNullable();
          table.timestamps(true, true);
        });
      } else {
        // Add additional_description column if it doesn't exist
        const hasColumn = await db.schema.hasColumn('templates', 'additional_description');
        if (!hasColumn) {
          await db.schema.alterTable('templates', table => {
            table.text('additional_description');
          });
        }
      }
    });
    
    console.log('Clearing existing templates...');
    await Template.deleteAll();
    
    console.log('Inserting sample templates...');
    await Template.insertMany(sampleTemplates);
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();