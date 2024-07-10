// backend/controllers/User.js

const User = require('../models/User');

const createUser = (req, res) => {
  const { username, email, password } = req.body;

  User.createUser(username, email, password, (err) => {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).json({ message: 'Error signing up. Please try again.' });
    } else {
      res.status(201).json({ message: 'User signed up successfully.' });
    }
  });
};

module.exports = {
  createUser,
};
