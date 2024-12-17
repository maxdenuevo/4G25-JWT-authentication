# JWT Authentication With Flask & React

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)

A secure authentication system built with Flask REST API backend and React.js frontend, featuring JWT token-based authentication and session management.

[Features](#features) • [Getting Started](#getting-started) • [API Documentation](#api-documentation) • [Project Structure](#project-structure)

</div>

## Features

- User registration and authentication
- JWT token-based session management
- Protected routes and API endpoints
- Secure password hashing with bcrypt
- Client-side token storage using sessionStorage
- Automatic redirects for unauthorized access
- Clean and responsive Bootstrap UI

## Getting Started

### Prerequisites

- Python 3.x
- Node.js
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/maxdenuevo/4G25-JWT-authentication

# Backend Setup
cd api
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Frontend Setup
cd ..
npm install

# Start the servers
# Terminal 1 - Backend
cd api
flask run

# Terminal 2 - Frontend
npm run dev
```

## Authentication Flow

The authentication system is implemented in 4 parts:

![Authentication Diagram](src/assets/login_diagram.jpg?raw=true)

### 1. User Signup

1. User navigates to `/signup`
2. React Router renders the signup component
3. User submits email and password
4. Frontend sends POST request to Flask API
5. API creates new user with hashed password
6. User is redirected to login

### 2. User Login

1. User navigates to `/login`
2. React Router renders login component
3. User submits credentials
4. Frontend sends POST request to API
5. API validates credentials and returns JWT token
6. Frontend stores token in sessionStorage
7. User is redirected to private area

### 3. Token Validation

1. User attempts to access private route
2. React component checks for token in sessionStorage
3. If no token, redirects to login
4. If token exists, renders protected content
5. All API requests include token in headers

### 4. User Logout

1. User clicks logout button
2. Frontend removes token from sessionStorage
3. User is redirected to public area

## API Documentation

The backend provides the following REST API endpoints:

### Authentication Endpoints

| Method | Endpoint | Description             | Request Body        |
| ------ | -------- | ----------------------- | ------------------- |
| POST   | /signup  | Register a new user     | {email, password}   |
| POST   | /login   | Authenticate user       | {email, password}   |
| GET    | /private | Protected route example | JWT token in header |

## Project Structure

```
.
├── README.md
├── api/
│   ├── app.py          # Flask application setup
│   ├── config.py       # Configuration settings
│   ├── models.py       # Database models
│   ├── routes.py       # API endpoints
│   └── requirements.txt
└── src/
    ├── App.jsx         # Main React component
    ├── components/
    │   ├── Login.jsx   # Login form component
    │   ├── Signup.jsx  # Registration form component
    │   └── Private.jsx # Protected component
    └── services/       # API integration services
```

## Component Routes

| Path       | Component   | Description                                             |
| ---------- | ----------- | ------------------------------------------------------- |
| `/signup`  | `<Signup>`  | User registration form with email and password          |
| `/login`   | `<Login>`   | Authentication form that generates JWT token on success |
| `/private` | `<Private>` | Protected route that requires valid JWT token to access |

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Sources

This exercise is part of the complete 4Geeks Academy Full Stack course:

[![4Geeks Academy](https://img.shields.io/badge/4Geeks%20Academy-blue.svg)](https://4geeks.com/syllabus/santiago-pt-49/project/jwt-authentication-with-flask-react)

## Acknowledgments

- [Flask-JWT-Extended](https://flask-jwt-extended.readthedocs.io/) for JWT functionality
- [React Router](https://reactrouter.com/) for client-side routing
- [Bootstrap](https://getbootstrap.com/) for UI components
