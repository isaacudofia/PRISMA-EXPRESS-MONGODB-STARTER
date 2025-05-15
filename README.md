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

Okay, GitHub README files use Markdown, not HTML and CSS for styling. I will convert the content and structure of your HTML into standard Markdown format that GitHub can display properly. You will lose the custom styling (colors, fonts, step circles, endpoint boxes), but the information and layout will be clear and readable on your repository page.

Here is the Markdown version of your README:

Markdown

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

prisma-express-mongo-starter/
├── prisma/
│ ├── schema.prisma # Database schema
│ └── seed.js # Seeding script
├── src/
│ ├── controllers/ # Request handlers
│ │ └── userController.js
│ ├── routes/ # API routes
│ │ └── userRoutes.js
│ ├── middleware/ # Middleware functions
│ │ └── errorHandler.js
│ └── app.js # Express application
├── .env # Environment variables
├── package.json # Project dependencies
└── README.md # Project documentation

---

## 🛠️ Helpful Commands

### Development

- `npm run dev` - Start development server with auto-reload
- `npm start` - Start production server

### Prisma Commands

- `npx prisma generate` - Generate Prisma client
- `npx prisma db push` - Push schema changes to database
- `npx prisma studio` - Open Prisma Studio to view and edit data
- `npx prisma format` - Format schema file

---

Made with ❤️ by Isaac Godwin Udofia
