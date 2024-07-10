import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-content">
        <div className="summary">
          <h2>Project Summary</h2>
          <div className="summary-details">
            <div className="summary-item">
              <h3>Total Projects</h3>
              <p>15</p>
            </div>
            <div className="summary-item">
              <h3>Active Projects</h3>
              <p>8</p>
            </div>
            <div className="summary-item">
              <h3>Completed Projects</h3>
              <p>7</p>
            </div>
          </div>
        </div>
        <div className="recent-activities">
          <h2>Recent Activities</h2>
          <ul>
            <li>
              <span>Project A - Updated</span>
              <span className="activity-time">2 hours ago</span>
            </li>
            <li>
              <span>Project B - Task completed</span>
              <span className="activity-time">5 hours ago</span>
            </li>
            <li>
              <span>Project C - New task added</span>
              <span className="activity-time">1 day ago</span>
            </li>
          </ul>
        </div>
        <div className="performance-metrics">
          <h2>Performance Metrics</h2>
          <div className="metrics">
            <div className="metric-item">
              <h3>Task Completion Rate</h3>
              <p>85%</p>
            </div>
            <div className="metric-item">
              <h3>Budget Utilization</h3>
              <p>75%</p>
            </div>
            <div className="metric-item">
              <h3>Resource Allocation</h3>
              <p>90%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="dashboard-links">
        <Link to="/tasks" className="dashboard-link">
          View Tasks
        </Link>
        <Link to="/projects" className="dashboard-link">
          View Projects
        </Link>
        <Link to="/teams" className="dashboard-link">
          View Teams
        </Link>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default Dashboard;
