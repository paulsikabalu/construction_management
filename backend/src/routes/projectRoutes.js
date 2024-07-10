const express = require('express');
const router = express.Router();
const projectModel = require('../models/projectModel');

// GET all projects
router.get('/', (req, res) => {
  projectModel.getAllProjects((err, projects) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(projects);
    }
  });
});

// Add more routes for CRUD operations as needed

module.exports = router;
