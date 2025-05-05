# Prisma Express MongoDB Starter

A minimalist RESTful API using Express.js, Prisma ORM, and MongoDB

**Tech Stack:** Express.js | Prisma | MongoDB | Node.js

---

## ✨ Features

- Simple User model with basic fields
- Complete CRUD operations via RESTful API
- Clean architecture with Controllers, Routes, and Middleware
- Modern error handling middleware
- Environment configuration
- Database seeding for quick setup

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB database (local or Atlas)

### Installation Steps

1.  **Clone the repository** and navigate to the project folder:

    ```bash
    git clone [https://github.com/yourusername/prisma-express-mongo-starter.git](https://github.com/yourusername/prisma-express-mongo-starter.git)
    cd prisma-express-mongo-starter
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Create a `.env` file** and add your MongoDB connection string:

    ```env
    DATABASE_URL="mongodb+srv://username:password@cluster0.mongodb.net/mydb?retryWrites=true&w=majority"
    PORT=3000
    ```

4.  **Generate Prisma client:**

    ```bash
    npx prisma generate
    ```

5.  **Push the schema** to your database:

    ```bash
    npx prisma db push
    ```

6.  **Seed the database** with initial data (optional):

    ```bash
    node prisma/seed.js
    ```

7.  **Start the development server:**

    ```bash
    npm run dev
    ```

    The server will be running at `http://localhost:3000`

---

## 🔌 API Endpoints

- **GET** `/api/users`

  - Get all users

- **GET** `/api/users/:id`

  - Get user by ID

- **POST** `/api/users`

  - Create a new user
  - **Request Body Example:**
    ```json
    {
      "name": "Jane Doe",
      "email": "jane@example.com",
      "age": 30
    }
    ```

- **PUT** `/api/users/:id`

  - Update an existing user
  - **Request Body Example:**
    ```json
    {
      "name": "Jane Smith",
      "age": 31
    }
    ```

- **DELETE** `/api/users/:id`
  - Delete a user

---

## 📁 Project Structure
