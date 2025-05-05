<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prisma Express MongoDB Starter</title>
    <style>
        :root {
            --primary-color: #3b82f6;
            --secondary-color: #1e40af;
            --accent-color: #60a5fa;
            --text-color: #1f2937;
            --light-bg: #f3f4f6;
            --dark-bg: #111827;
            --success: #10b981;
            --warning: #f59e0b;
            --danger: #ef4444;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background: linear-gradient(120deg, #f8fafc, #e2e8f0);
            min-height: 100vh;
        }
        
        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }
        
        header {
            text-align: center;
            margin-bottom: 40px;
            padding: 30px 0;
            background: var(--primary-color);
            background: linear-gradient(120deg, var(--primary-color), var(--secondary-color));
            color: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        
        .tech-stack {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 20px 0;
        }
        
        .tech-badge {
            background-color: rgba(255, 255, 255, 0.2);
            padding: 5px 15px;
            border-radius: 20px;
            font-weight: 500;
        }
        
        section {
            background-color: white;
            padding: 30px;
            margin-bottom: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        h2 {
            color: var(--secondary-color);
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid var(--light-bg);
        }
        
        h3 {
            color: var(--primary-color);
            margin: 15px 0;
        }
        
        p {
            margin-bottom: 15px;
        }
        
        ul, ol {
            margin-bottom: 15px;
            padding-left: 20px;
        }
        
        li {
            margin-bottom: 8px;
        }
        
        code {
            font-family: 'Consolas', 'Monaco', monospace;
            background-color: var(--light-bg);
            padding: 2px 5px;
            border-radius: 3px;
            font-size: 0.9em;
        }
        
        pre {
            background-color: var(--dark-bg);
            color: white;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
            margin-bottom: 20px;
        }
        
        pre code {
            background-color: transparent;
            color: white;
            padding: 0;
        }
        
        .endpoint {
            background-color: var(--light-bg);
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 15px;
            border-left: 4px solid var(--primary-color);
        }
        
        .endpoint-method {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 4px;
            font-weight: bold;
            margin-right: 10px;
        }
        
        .get {
            background-color: #93c5fd;
            color: #1e3a8a;
        }
        
        .post {
            background-color: #86efac;
            color: #14532d;
        }
        
        .put {
            background-color: #fcd34d;
            color: #92400e;
        }
        
        .delete {
            background-color: #fca5a5;
            color: #991b1b;
        }
        
        .step {
            display: flex;
            margin-bottom: 20px;
        }
        
        .step-number {
            width: 30px;
            height: 30px;
            background-color: var(--primary-color);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-right: 15px;
            flex-shrink: 0;
        }
        
        .step-content {
            flex-grow: 1;
        }
        
        .directory-structure {
            font-family: 'Consolas', 'Monaco', monospace;
            padding: 20px;
            background-color: var(--light-bg);
            border-radius: 5px;
        }
        
        .footer {
            text-align: center;
            padding: 20px;
            color: #6b7280;
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 10px;
            }
            
            header {
                padding: 20px 0;
            }
            
            header h1 {
                font-size: 2rem;
            }
            
            section {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Prisma Express MongoDB Starter</h1>
            <p>A minimalist RESTful API using Express.js, Prisma ORM, and MongoDB</p>
            <div class="tech-stack">
                <span class="tech-badge">Express.js</span>
                <span class="tech-badge">Prisma</span>
                <span class="tech-badge">MongoDB</span>
                <span class="tech-badge">Node.js</span>
            </div>
        </header>

        <section id="features">
            <h2>✨ Features</h2>
            <ul>
                <li>Simple User model with basic fields</li>
                <li>Complete CRUD operations via RESTful API</li>
                <li>Clean architecture with Controllers, Routes, and Middleware</li>
                <li>Modern error handling middleware</li>
                <li>Environment configuration</li>
                <li>Database seeding for quick setup</li>
            </ul>
        </section>

        <section id="installation">
            <h2>🚀 Getting Started</h2>

            <h3>Prerequisites</h3>
            <ul>
                <li>Node.js (v14 or higher)</li>
                <li>MongoDB database (local or Atlas)</li>
            </ul>

            <h3>Installation Steps</h3>

            <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <p>Clone the repository and navigate to the project folder:</p>
                    <pre><code>git clone https://github.com/yourusername/prisma-express-mongo-starter.git

cd prisma-express-mongo-starter</code></pre>

</div>
</div>

            <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <p>Install dependencies:</p>
                    <pre><code>npm install</code></pre>
                </div>
            </div>

            <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <p>Create a <code>.env</code> file and add your MongoDB connection string:</p>
                    <pre><code>DATABASE_URL="mongodb+srv://username:password@cluster0.mongodb.net/mydb?retryWrites=true&w=majority"

PORT=3000</code></pre>

</div>
</div>

            <div class="step">
                <div class="step-number">4</div>
                <div class="step-content">
                    <p>Generate Prisma client:</p>
                    <pre><code>npx prisma generate</code></pre>
                </div>
            </div>

            <div class="step">
                <div class="step-number">5</div>
                <div class="step-content">
                    <p>Push the schema to your database:</p>
                    <pre><code>npx prisma db push</code></pre>
                </div>
            </div>

            <div class="step">
                <div class="step-number">6</div>
                <div class="step-content">
                    <p>Seed the database with initial data (optional):</p>
                    <pre><code>node prisma/seed.js</code></pre>
                </div>
            </div>

            <div class="step">
                <div class="step-number">7</div>
                <div class="step-content">
                    <p>Start the development server:</p>
                    <pre><code>npm run dev</code></pre>
                    <p>The server will be running at <code>http://localhost:3000</code></p>
                </div>
            </div>
        </section>

        <section id="api-endpoints">
            <h2>🔌 API Endpoints</h2>

            <div class="endpoint">
                <span class="endpoint-method get">GET</span>
                <code>/api/users</code>
                <p>Get all users</p>
            </div>

            <div class="endpoint">
                <span class="endpoint-method get">GET</span>
                <code>/api/users/:id</code>
                <p>Get user by ID</p>
            </div>

            <div class="endpoint">
                <span class="endpoint-method post">POST</span>
                <code>/api/users</code>
                <p>Create a new user</p>
                <details>
                    <summary>Request Body Example</summary>
                    <pre><code>{

"name": "Jane Doe",
"email": "jane@example.com",
"age": 30
}</code></pre>

</details>
</div>

            <div class="endpoint">
                <span class="endpoint-method put">PUT</span>
                <code>/api/users/:id</code>
                <p>Update an existing user</p>
                <details>
                    <summary>Request Body Example</summary>
                    <pre><code>{

"name": "Jane Smith",
"age": 31
}</code></pre>

</details>
</div>

            <div class="endpoint">
                <span class="endpoint-method delete">DELETE</span>
                <code>/api/users/:id</code>
                <p>Delete a user</p>
            </div>
        </section>

        <section id="project-structure">
            <h2>📁 Project Structure</h2>

            <div class="directory-structure">

<pre>prisma-express-mongo-starter/
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── seed.js           # Seeding script
├── src/
│   ├── controllers/      # Request handlers
│   │   └── userController.js
│   ├── routes/           # API routes
│   │   └── userRoutes.js
│   ├── middleware/       # Middleware functions
│   │   └── errorHandler.js
│   └── app.js           # Express application
├── .env                 # Environment variables
├── package.json         # Project dependencies
└── README.md            # Project documentation</pre>

            </div>
        </section>

        <section id="helpful-commands">
            <h2>🛠️ Helpful Commands</h2>

            <h3>Development</h3>
            <ul>
                <li><code>npm run dev</code> - Start development server with auto-reload</li>
                <li><code>npm start</code> - Start production server</li>
            </ul>

            <h3>Prisma Commands</h3>
            <ul>
                <li><code>npx prisma generate</code> - Generate Prisma client</li>
                <li><code>npx prisma db push</code> - Push schema changes to database</li>
                <li><code>npx prisma studio</code> - Open Prisma Studio to view and edit data</li>
                <li><code>npx prisma format</code> - Format schema file</li>
            </ul>
        </section>

        <div class="footer">
            <p>Made with ❤️ by [Your Name]</p>
            <p>Licensed under MIT</p>
        </div>
    </div>

</body>
</html><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prisma Express MongoDB Starter</title>
    <style>
        :root {
            --primary-color: #3b82f6;
            --secondary-color: #1e40af;
            --accent-color: #60a5fa;
            --text-color: #1f2937;
            --light-bg: #f3f4f6;
            --dark-bg: #111827;
            --success: #10b981;
            --warning: #f59e0b;
            --danger: #ef4444;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background: linear-gradient(120deg, #f8fafc, #e2e8f0);
            min-height: 100vh;
        }
        
        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }
        
        header {
            text-align: center;
            margin-bottom: 40px;
            padding: 30px 0;
            background: var(--primary-color);
            background: linear-gradient(120deg, var(--primary-color), var(--secondary-color));
            color: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        
        .tech-stack {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 20px 0;
        }
        
        .tech-badge {
            background-color: rgba(255, 255, 255, 0.2);
            padding: 5px 15px;
            border-radius: 20px;
            font-weight: 500;
        }
        
        section {
            background-color: white;
            padding: 30px;
            margin-bottom: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        h2 {
            color: var(--secondary-color);
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid var(--light-bg);
        }
        
        h3 {
            color: var(--primary-color);
            margin: 15px 0;
        }
        
        p {
            margin-bottom: 15px;
        }
        
        ul, ol {
            margin-bottom: 15px;
            padding-left: 20px;
        }
        
        li {
            margin-bottom: 8px;
        }
        
        code {
            font-family: 'Consolas', 'Monaco', monospace;
            background-color: var(--light-bg);
            padding: 2px 5px;
            border-radius: 3px;
            font-size: 0.9em;
        }
        
        pre {
            background-color: var(--dark-bg);
            color: white;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
            margin-bottom: 20px;
        }
        
        pre code {
            background-color: transparent;
            color: white;
            padding: 0;
        }
        
        .endpoint {
            background-color: var(--light-bg);
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 15px;
            border-left: 4px solid var(--primary-color);
        }
        
        .endpoint-method {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 4px;
            font-weight: bold;
            margin-right: 10px;
        }
        
        .get {
            background-color: #93c5fd;
            color: #1e3a8a;
        }
        
        .post {
            background-color: #86efac;
            color: #14532d;
        }
        
        .put {
            background-color: #fcd34d;
            color: #92400e;
        }
        
        .delete {
            background-color: #fca5a5;
            color: #991b1b;
        }
        
        .step {
            display: flex;
            margin-bottom: 20px;
        }
        
        .step-number {
            width: 30px;
            height: 30px;
            background-color: var(--primary-color);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-right: 15px;
            flex-shrink: 0;
        }
        
        .step-content {
            flex-grow: 1;
        }
        
        .directory-structure {
            font-family: 'Consolas', 'Monaco', monospace;
            padding: 20px;
            background-color: var(--light-bg);
            border-radius: 5px;
        }
        
        .footer {
            text-align: center;
            padding: 20px;
            color: #6b7280;
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 10px;
            }
            
            header {
                padding: 20px 0;
            }
            
            header h1 {
                font-size: 2rem;
            }
            
            section {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Prisma Express MongoDB Starter</h1>
            <p>A minimalist RESTful API using Express.js, Prisma ORM, and MongoDB</p>
            <div class="tech-stack">
                <span class="tech-badge">Express.js</span>
                <span class="tech-badge">Prisma</span>
                <span class="tech-badge">MongoDB</span>
                <span class="tech-badge">Node.js</span>
            </div>
        </header>

        <section id="features">
            <h2>✨ Features</h2>
            <ul>
                <li>Simple User model with basic fields</li>
                <li>Complete CRUD operations via RESTful API</li>
                <li>Clean architecture with Controllers, Routes, and Middleware</li>
                <li>Modern error handling middleware</li>
                <li>Environment configuration</li>
                <li>Database seeding for quick setup</li>
            </ul>
        </section>

        <section id="installation">
            <h2>🚀 Getting Started</h2>

            <h3>Prerequisites</h3>
            <ul>
                <li>Node.js (v14 or higher)</li>
                <li>MongoDB database (local or Atlas)</li>
            </ul>

            <h3>Installation Steps</h3>

            <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <p>Clone the repository and navigate to the project folder:</p>
                    <pre><code>git clone https://github.com/yourusername/prisma-express-mongo-starter.git

cd prisma-express-mongo-starter</code></pre>

</div>
</div>

            <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <p>Install dependencies:</p>
                    <pre><code>npm install</code></pre>
                </div>
            </div>

            <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <p>Create a <code>.env</code> file and add your MongoDB connection string:</p>
                    <pre><code>DATABASE_URL="mongodb+srv://username:password@cluster0.mongodb.net/mydb?retryWrites=true&w=majority"

PORT=3000</code></pre>

</div>
</div>

            <div class="step">
                <div class="step-number">4</div>
                <div class="step-content">
                    <p>Generate Prisma client:</p>
                    <pre><code>npx prisma generate</code></pre>
                </div>
            </div>

            <div class="step">
                <div class="step-number">5</div>
                <div class="step-content">
                    <p>Push the schema to your database:</p>
                    <pre><code>npx prisma db push</code></pre>
                </div>
            </div>

            <div class="step">
                <div class="step-number">6</div>
                <div class="step-content">
                    <p>Seed the database with initial data (optional):</p>
                    <pre><code>node prisma/seed.js</code></pre>
                </div>
            </div>

            <div class="step">
                <div class="step-number">7</div>
                <div class="step-content">
                    <p>Start the development server:</p>
                    <pre><code>npm run dev</code></pre>
                    <p>The server will be running at <code>http://localhost:3000</code></p>
                </div>
            </div>
        </section>

        <section id="api-endpoints">
            <h2>🔌 API Endpoints</h2>

            <div class="endpoint">
                <span class="endpoint-method get">GET</span>
                <code>/api/users</code>
                <p>Get all users</p>
            </div>

            <div class="endpoint">
                <span class="endpoint-method get">GET</span>
                <code>/api/users/:id</code>
                <p>Get user by ID</p>
            </div>

            <div class="endpoint">
                <span class="endpoint-method post">POST</span>
                <code>/api/users</code>
                <p>Create a new user</p>
                <details>
                    <summary>Request Body Example</summary>
                    <pre><code>{

"name": "Jane Doe",
"email": "jane@example.com",
"age": 30
}</code></pre>

</details>
</div>

            <div class="endpoint">
                <span class="endpoint-method put">PUT</span>
                <code>/api/users/:id</code>
                <p>Update an existing user</p>
                <details>
                    <summary>Request Body Example</summary>
                    <pre><code>{

"name": "Jane Smith",
"age": 31
}</code></pre>

</details>
</div>

            <div class="endpoint">
                <span class="endpoint-method delete">DELETE</span>
                <code>/api/users/:id</code>
                <p>Delete a user</p>
            </div>
        </section>

        <section id="project-structure">
            <h2>📁 Project Structure</h2>

            <div class="directory-structure">

<pre>prisma-express-mongo-starter/
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── seed.js           # Seeding script
├── src/
│   ├── controllers/      # Request handlers
│   │   └── userController.js
│   ├── routes/           # API routes
│   │   └── userRoutes.js
│   ├── middleware/       # Middleware functions
│   │   └── errorHandler.js
│   └── app.js           # Express application
├── .env                 # Environment variables
├── package.json         # Project dependencies
└── README.md            # Project documentation</pre>

            </div>
        </section>

        <section id="helpful-commands">
            <h2>🛠️ Helpful Commands</h2>

            <h3>Development</h3>
            <ul>
                <li><code>npm run dev</code> - Start development server with auto-reload</li>
                <li><code>npm start</code> - Start production server</li>
            </ul>

            <h3>Prisma Commands</h3>
            <ul>
                <li><code>npx prisma generate</code> - Generate Prisma client</li>
                <li><code>npx prisma db push</code> - Push schema changes to database</li>
                <li><code>npx prisma studio</code> - Open Prisma Studio to view and edit data</li>
                <li><code>npx prisma format</code> - Format schema file</li>
            </ul>
        </section>

        <div class="footer">
            <p>Made with ❤️ by Isaac Godwin Udofia</p>
        </div>
    </div>

</body>
</html>
