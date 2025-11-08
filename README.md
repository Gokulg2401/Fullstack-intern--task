# Personal Info
Gokul A
7708113676
gokul240102@gmail.com

# 🎨 Mini SaaS Template Store

A modern, full-stack web application that allows users to browse, favourite, and manage website templates with advanced search functionality and beautiful UI design.

## 🚀 Tech Stack

**Frontend:** React.js 18 with React Router v6  
**Backend:** Node.js + Express.js  
**Database:** SQLite with Knex.js ORM  
**Authentication:** JWT (JSON Web Tokens)  
**Styling:** Modern CSS with Glassmorphism design  
**State Management:** React Context API  

## ✨ Key Features

### 🔐 **Authentication System**
- User registration and login with JWT authentication
- Protected routes and middleware
- Secure password hashing with bcryptjs
- Persistent login sessions

### 📱 **Template Management**
- Browse 6+ sample templates with high-quality images
- Detailed template information with dual descriptions
- Category-based organization (Dashboard, Blog, Portfolio, etc.)
- Responsive card-based layout

### 🔍 **Advanced Search & Filtering**
- **Real-time search** with 🔎 emoji indicator
- Filter by template name or category
- Case-insensitive search functionality
- Available on both Templates and Favourites pages

### ❤️ **Favourites System**
- Add/remove templates from favourites with heart icon
- Dedicated "My Favourites" page
- Search through personal favourites
- Real-time updates across pages

### 🎨 **Modern UI/UX Design**
- **Glassmorphism design** with backdrop blur effects
- Gradient backgrounds and smooth animations
- Responsive design (desktop + mobile)
- Enhanced button styling and hover effects
- Improved navigation with better logout visibility

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- SQLite (automatically handled by sqlite3 package)

### Quick Start (Recommended)

1. **Clone the repository:**
```bash
git clone https://github.com/Gokulg2401/Fullstack-intern--task.git
cd Fullstack-intern--task
```

2. **Install all dependencies:**
```bash
npm run install-all
```

3. **Setup environment variables:**
Create `.env` file in server directory:
```
JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000
```

4. **Initialize database:**
```bash
cd server && node seed.js
```

5. **Start both frontend and backend:**
```bash
# Terminal 1 - Backend
cd server && npm run dev

# Terminal 2 - Frontend  
cd client && npm start
```

The application will be available at `http://localhost:3000`

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration with name, email, password
- `POST /api/auth/login` - User login with email, password

### Templates
- `GET /api/templates` - Get all templates with search support
- `GET /api/templates/:id` - Get specific template by ID
- `POST /api/templates/favorites/:templateId` - Add template to favourites (authenticated)
- `DELETE /api/templates/favorites/:templateId` - Remove template from favourites (authenticated)
- `GET /api/templates/favorites/user` - Get user's favourite templates (authenticated)

## 📁 Project Structure

```
├── client/                     # React Frontend Application
│   ├── public/
│   │   └── index.html         # Main HTML template
│   ├── src/
│   │   ├── components/        # Reusable UI Components
│   │   │   └── Navbar.js      # Navigation component
│   │   ├── pages/             # Main Page Components
│   │   │   ├── Login.js       # Login page with form
│   │   │   ├── Register.js    # Registration page
│   │   │   ├── Templates.js   # Main templates browsing page
│   │   │   └── Favorites.js   # User favourites page
│   │   ├── utils/             # Utilities & Configuration
│   │   │   ├── AuthContext.js # Authentication context
│   │   │   └── api.js         # API configuration
│   │   ├── App.js             # Main app with routing
│   │   ├── index.css          # Enhanced styling
│   │   └── index.js           # React entry point
│   └── package.json           # Frontend dependencies
├── server/                     # Node.js Backend Application
│   ├── models/                # Database Models
│   │   ├── Template.js        # Template model with Knex
│   │   └── User.js            # User model with Knex
│   ├── routes/                # API Route Handlers
│   │   ├── auth.js            # Authentication routes
│   │   └── templates.js       # Template & favourites routes
│   ├── middleware/            # Custom Middleware
│   │   └── auth.js            # JWT authentication middleware
│   ├── database.js            # SQLite database configuration
│   ├── server.js              # Express server setup
│   ├── seed.js                # Database seeding with sample data
│   ├── database.sqlite        # SQLite database file
│   └── package.json           # Backend dependencies
├── package.json               # Root package.json for deployment
├── vercel.json                # Vercel deployment configuration
└── README.md                  # Project documentation
```

## 🎯 How to Use

### **Getting Started**
1. **Register** a new account with name, email, and password
2. **Login** with your credentials to access the application

### **Browsing Templates**
3. **Browse** 6+ available templates on the main page
4. **Search** 🔎 templates by name (e.g., "Blog") or category (e.g., "Dashboard")
5. **View** detailed information including dual descriptions for each template

### **Managing Favourites**
6. **Add to favourites** by clicking the heart icon (♡ → ❤️)
7. **Remove from favourites** by clicking the filled heart icon
8. **Visit "My Favourites"** page to see your saved templates
9. **Search your favourites** using the dedicated search bar

### **Navigation**
10. **Navigate** between Templates and Favourites using the navbar
11. **Logout** securely when done using the logout button

## 🔧 Technical Implementation

### **Frontend Architecture**
- **React 18** with functional components and hooks
- **React Router v6** for client-side routing
- **Context API** for global state management
- **Axios** with custom API configuration
- **Protected Routes** for authentication

### **Backend Architecture**
- **Express.js** RESTful API server
- **Knex.js** query builder for database operations
- **JWT** for stateless authentication
- **bcryptjs** for secure password hashing
- **CORS** enabled for cross-origin requests

### **Database Design**
- **SQLite** for lightweight, portable database
- **Users table**: id, name, email, password_hash, timestamps
- **Templates table**: id, name, description, additional_description, thumbnail_url, category, timestamps
- **User_favorites table**: user_id, template_id (junction table)

### **Key Features Implemented**

#### ✨ **Recent Enhancements**
1. **🔍 Advanced Search System**
   - Real-time filtering by template name or category
   - Case-insensitive search with instant results
   - Search available on both Templates and Favourites pages

2. **📝 Enhanced Template Information**
   - Dual description system (main + additional)
   - Rich template metadata with categories
   - High-quality placeholder images

3. **🎨 Modern UI/UX Design**
   - Glassmorphism design with backdrop blur
   - Smooth animations and hover effects
   - Responsive design for all screen sizes
   - Improved button styling and navigation

4. **🔧 Technical Improvements**
   - Environment-based API configuration
   - Improved error handling and user feedback
   - Optimized database queries with Knex.js
   - Enhanced security with JWT middleware

## 🌟 What Makes This Special

- **🚀 Production Ready**: Environment-based configuration for easy deployment
- **🔒 Secure**: JWT authentication with protected routes and password hashing
- **📱 Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **🎨 Modern Design**: Beautiful glassmorphism UI with smooth animations
- **⚡ Fast**: Real-time search with optimized database queries
- **🔍 User-Friendly**: Intuitive interface with clear navigation and feedback
- **💾 Portable**: SQLite database for easy setup and deployment

## 💡 Development Notes

### **Security & Authentication**
- JWT tokens stored in localStorage with automatic header injection
- Password hashing using bcryptjs with salt rounds
- Protected API routes with authentication middleware
- Input validation on both frontend and backend

### **Database & Performance**
- SQLite database with Knex.js ORM for efficient queries
- Automatic database seeding with sample templates
- Optimized API calls with proper error handling
- Real-time search with case-insensitive filtering

### **UI/UX & Design**
- Glassmorphism design with CSS backdrop-filter
- Responsive design using CSS Grid and Flexbox
- Smooth animations and hover effects
- Accessibility considerations with proper ARIA labels

### **Code Quality & Architecture**
- Clean component architecture with separation of concerns
- Custom hooks for authentication state management
- Environment-based configuration for different deployments
- Consistent error handling and user feedback

---

**🎉 This application demonstrates modern full-stack development practices with a focus on user experience, security, and scalability.**