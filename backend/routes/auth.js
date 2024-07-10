// backend/routes/auth.js

const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/User');

// Route to handle user registration
router.post('/signup', createUser);

module.exports = router;
