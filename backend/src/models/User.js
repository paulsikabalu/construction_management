// backend/models/User.js

const db = require('../database');

class User {
  static createUser(username, email, password, callback) {
    db.run(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, password],
      callback
    );
  }
}

module.exports = User;
