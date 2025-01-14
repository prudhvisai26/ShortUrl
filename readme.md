# Short URL Service

Short URL Service is a simple web application for generating short URLs from long URLs. Built with Node.js, Express, Sequelize, and SQLite, it allows users to shorten URLs and redirect to the original URLs seamlessly. This project demonstrates basic operations with a database and the use of tools like shortid for generating unique identifiers.

---

## Features

- Shorten long URLs to concise, unique short URLs.
- Store and retrieve URLs using a database.
- Redirect users from a short URL to the original long URL.

---

## Getting Started

Follow these steps to set up and run the project on your local system.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org) (v12 or higher)
- npm (comes with Node.js)

---

## Project Setup

### Step 1: Create a Node.js Project
Initialize a new Node.js project:
```bash
npm init -y
```

### Step 2: Install Required Packages
Install the required dependencies:
```bash
npm install express shortid sequelize sqlite3
```

### Step 3: Add Middleware
Configure the middleware in the project:
- Use Express for routing and serving static files.
- Use Sequelize for database operations.
- Use shortid for generating short, unique identifiers.

### Step 4: Create Routes
Implement the following routes:
1. **Home Route**: Serves the `index.html` file from the `public` folder.
2. **Short URL Route**: Handles:
   - Converting long URLs to short URLs.
   - Redirecting short URLs to their original long URLs.

### Step 5: Create Database and Models
Use Sequelize to define and manage models:
- Create a `URL` model to store `longUrl` and `shortUrl` fields in the database.

---

## Usage

1. Start the server:
   ```bash
   node index.js
   ```
2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
3. Use the interface to:
   - Enter a long URL to generate a short URL.
   - Use the short URL to be redirected to the original URL.

---

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express**: Framework for building web applications and APIs.
- **Sequelize**: ORM for managing SQLite database.
- **SQLite3**: Database for storing URLs.
- **shortid**: Library for generating unique, short identifiers.

---

## License

This project is licensed under the MIT License. See `LICENSE` for more details.

