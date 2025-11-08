# Mini SaaS Template Store

A full-stack web application that allows users to browse, favorite, and manage website templates with advanced search functionality.

## Tech Stack

**Frontend:** React.js with React Router
**Backend:** Node.js + Express.js
**Database:** SQLite with Knex.js ORM
**Authentication:** JWT

## Features

- User registration and login with JWT authentication
- Browse available templates with image, title, and detailed descriptions
- **🔎 Advanced Search** - Filter templates by name or category with real-time results
- Mark templates as favourites (authenticated users only)
- View personal favourites in a dedicated section with search functionality
- **Enhanced Template Details** - Each template includes additional descriptive information
- Responsive design with modern glassmorphism UI
- Improved navbar with better logout button visibility

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- SQLite (automatically handled by sqlite3 package)

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your configuration:
```
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
```

4. Seed the database with sample templates:
```bash
node seed.js
```

5. Start the server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Templates
- `GET /api/templates` - Get all templates
- `GET /api/templates/:id` - Get template by ID
- `POST /api/templates/favorites/:templateId` - Add template to favorites (authenticated)
- `GET /api/templates/favorites/user` - Get user's favorite templates (authenticated)

## Project Structure

```
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── utils/          # Utilities and context
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/                 # Node.js backend
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── server.js           # Main server file
│   ├── seed.js             # Database seeding script
│   └── package.json
└── README.md
```

## Usage

1. Register a new account or login with existing credentials
2. Browse the available templates on the home page
3. Click the heart icon to add templates to your favourites
4. View your favourite templates in the "My Favourites" section
5. Logout when done

## Development Notes

- The application uses JWT tokens stored in localStorage for authentication
- Password hashing is implemented using bcryptjs
- CORS is enabled for cross-origin requests
- Input validation is implemented on both frontend and backend
- **SQLite database** with Knex.js ORM for efficient data management
- **Real-time search** functionality with case-insensitive filtering
- **Enhanced UI** with glassmorphism design and improved accessibility
- Responsive design works on desktop and mobile devices
- **Additional template metadata** including detailed descriptions for better user experience

## Recent Enhancements

### ✨ New Features Added:
1. **Advanced Search Functionality** - Real-time filtering by template name or category
2. **Enhanced Template Information** - Additional descriptive lines for each template
3. **Improved UI/UX** - Better styling, search icons, and visual feedback
4. **Database Schema Updates** - Added `additional_description` field to templates
5. **Search Integration** - Available on both Templates and Favourites pages
6. **Better Navigation** - Improved logout button visibility and styling

### 🛠️ Technical Improvements:
- Migrated to SQLite for better portability and easier setup
- Implemented Knex.js ORM for database operations
- Added real-time search with debounced filtering
- Enhanced responsive design with modern CSS techniques
- Improved error handling and user feedback