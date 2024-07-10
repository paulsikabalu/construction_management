import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const response = await axios.get('/api/projects');
    setProjects(response.data);
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/projects', { name, description });
      setMessage(response.data.message);
      fetchProjects();
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleUpdateProject = async (id) => {
    const updatedName = prompt('Enter new name');
    const updatedDescription = prompt('Enter new description');
    try {
      const response = await axios.put(`/api/projects/${id}`, { name: updatedName, description: updatedDescription });
      setMessage(response.data.message);
      fetchProjects();
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      const response = await axios.delete(`/api/projects/${id}`);
      setMessage(response.data.message);
      fetchProjects();
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="projects">
      <h2>Projects</h2>
      <form onSubmit={handleCreateProject}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Create Project</button>
      </form>
      {message && <p>{message}</p>}
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button onClick={() => handleUpdateProject(project.id)}>Update</button>
            <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
