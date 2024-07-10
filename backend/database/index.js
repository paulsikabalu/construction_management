// backend/database/index.js

const sqlite3 = require('sqlite3').verbose();

// Create an SQLite database in memory
const db = new sqlite3.Database(':memory:');

// Create users table if not exists
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    )
  `);
});

module.exports = db;
