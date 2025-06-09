E-commerce Sales Chatbot

This project is a sales chatbot system built for an e-commerce platform that allows users to interactively search and explore products. It includes user authentication, a conversational UI, and a Flask-based backend with a PostgreSQL database seeded with 100+ mock products.

📌 Features:-
* User Signup & Login with secure password hashing and JWT authentication
* Conversational chatbot UI for product search
* Dynamic product search using keywords
* Mock product inventory with 100+ items across categories (electronics, books, textiles, etc.)
* Timestamped messages & reset chat session functionality
* API-driven architecture using Flask and RESTful endpoints
* CORS-enabled for full-stack integration
* Responsive frontend (works on mobile, tablet, and desktop)

🛠️ Tech Stack:-

Frontend:
  React.js
  JavaScript (with utils for timestamping)
  HTML5 & CSS3

Backend:
  Python + Flask
  Flask SQLAlchemy
  Flask CORS
  JWT for user session authentication
  PostgreSQL for database

Tools:
  dotenv for config management
  Faker + random for mock data generation
  Postman (for testing APIs)
  
Architecture Overview:-

  Client (React)
     └── /api/auth/signup (POST)
     └── /api/auth/login  (POST)
     └── /api/chat        (POST)
  
  Backend (Flask)
     └── auth/routes.py      → Handles login & signup
     └── chatbot/routes.py   → Handles chatbot product search
     └── models/__init__.py  → SQLAlchemy models (User, Product)
     └── database/seed.py    → Seeds database with sample products
     └── app.py              → App configuration & blueprint registration
     └── config.py           → DB & secret config from `.env`
     
  Database (PostgreSQL)

 Getting Started:-

1. Clone the Repository

  git clone https://github.com/sivakumar0506/E-commerce-Sales-Chatbot.git
  cd E-commerce-Sales-Chatbo

2. Backend Setup

  cd back
  python -m venv venv
  source venv/bin/activate  # or venv\Scripts\activate (on Windows)
  pip install -r requirements.txt

  Create a .env file with:

  SECRET_KEY=your-secret-key
  DB_NAME=chatbotdb
  DB_USER=postgres
  DB_PASSWORD=5432
  DB_HOST=localhost
  DB_PORT=5432

  Start the database and seed it:

  python seed.py  # seeds 100+ products
  python app.py   # starts Flask server on port 5000

3. Frontend Setup

    cd client
    npm install
    npm run dev  # Starts React+vite app on port 5173
    
    Sample API Usage
    Signup:
      POST /api/auth/signup
      Content-Type: application/json
      
      {
        "name": "Siva",
        "email": "siva@example.com",
        "password": "secret123"
      }
    
    Login:
      POST /api/auth/login
      {
        "email": "siva@example.com",
        "password": "secret123"
      }
    
    Chat Query:
      POST /api/chat
      {
        "message": "iphone"
      }

   
 Author:-

Siva Kumar S B.Tech in Information Technology (Graduating 2027)
