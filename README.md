# Mini SaaS Template Store

A full-stack web application that allows users to browse, favorite, and manage website templates.

## Tech Stack

**Frontend:** React.js with React Router
**Backend:** Node.js + Express.js
**Database:** MongoDB
**Authentication:** JWT

## Features

- User registration and login with JWT authentication
- Browse available templates with image, title, and description
- Mark templates as favorites (authenticated users only)
- View personal favorites in a dedicated section
- Responsive design with clean UI

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/templatestore
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
3. Click the heart icon to add templates to your favorites
4. View your favorite templates in the "My Favorites" section
5. Logout when done

## Development Notes

- The application uses JWT tokens stored in localStorage for authentication
- Password hashing is implemented using bcryptjs
- CORS is enabled for cross-origin requests
- Input validation is implemented on both frontend and backend
- Responsive design works on desktop and mobile devices