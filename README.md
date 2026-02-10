🚀 SkillSwap — Full Stack Skill Exchange Platform

SkillSwap is a full-stack web application that enables users to exchange
skills with each other instead of paying for courses or services. Users
can list skills they offer, specify skills they want to learn, and
connect with matching users through a modern web interface.

This project demonstrates a scalable architecture using Django REST APIs
and a React frontend.

  -------------
  📌 FEATURES
  -------------

✅ Authentication - User login using JWT authentication - Secure
token-based API access - Protected routes on frontend

✅ Skills Management - Add new skills - View available skills - Skill
card-based UI - Categorized skill listing

✅ Dashboard - Modern dashboard layout - Skill display using reusable
components - Responsive UI structure

✅ API Architecture - RESTful endpoints using Django REST Framework -
Centralized API service layer in frontend

  ---------------
  🧱 TECH STACK
  ---------------

Backend: - Python - Django - Django REST Framework - JWT Authentication
(SimpleJWT) - MySQL Database

Frontend: - React.js - React Router - Axios - Component-based
architecture

  ------------------------
  🏗️ SYSTEM ARCHITECTURE
  ------------------------

React Frontend | | HTTP Requests (JWT Auth) | Django REST API Backend |
| MySQL Database

Frontend handles UI and user interaction while Django manages business
logic, authentication, and database operations.

  -------------------------
  ⚙️ INSTALLATION & SETUP
  -------------------------

1️⃣ Clone Repository

git clone cd skillswap

  --------------------------------------------------
  2️⃣ Backend Setup (Django)
  --------------------------------------------------
  3️⃣ Frontend Setup (React)

  Open new terminal:

  cd frontend npm install npm start

  Frontend runs at: http://localhost:3000
  --------------------------------------------------

🔐 AUTHENTICATION FLOW

1.  User logs in from React UI.
2.  Django generates JWT access token.
3.  Token stored in browser localStorage.
4.  API requests include: Authorization: Bearer

  ----------------------
  📂 PROJECT STRUCTURE
  ----------------------

skillswap/ │ ├── backend/ │ ├── accounts/ │ ├── skills/ │ ├── exchanges/
│ └── messaging/ │ ├── frontend/ │ ├── src/ │ │ ├── api/ │ │ ├──
components/ │ │ ├── layout/ │ │ └── pages/ │ └── README.txt

  ------------------------
  🌟 FUTURE ENHANCEMENTS
  ------------------------

-   Skill matching algorithm
-   Real-time messaging (WebSockets)
-   User profile system
-   Reviews and ratings
-   Notifications system
-   Advanced search and filtering
-   AI-based skill recommendations

  ------------------------
  🎯 LEARNING OBJECTIVES
  ------------------------

-   Full-stack application development
-   REST API design
-   JWT authentication workflow
-   React component architecture
-   Backend–frontend integration

  --------------------------------------------------
  📄 LICENSE

  This project is for educational and portfolio
  purposes.
  --------------------------------------------------

👨‍💻 AUTHOR

Developed as a full-stack learning project using Django and React.
