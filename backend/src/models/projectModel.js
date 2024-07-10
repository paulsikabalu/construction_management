const db = require('../db/sqlite');

// Create projects table
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      description TEXT
    )
  `);
});

module.exports = {
  getAllProjects(callback) {
    db.all('SELECT * FROM projects', callback);
  },
  // Add more methods as needed (e.g., insertProject, updateProject, deleteProject)
};
