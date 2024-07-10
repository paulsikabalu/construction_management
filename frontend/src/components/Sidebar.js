import React, { useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faProjectDiagram, faTasks, faUsers, faChartBar, faCog, faBars } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true); // Initially collapsed

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? '' : 'expanded'}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faTachometerAlt} />
              {!isCollapsed && <span>Dashboard</span>}
            </a>
          </li>
          <li>
            <a href="/projects">
              <FontAwesomeIcon icon={faProjectDiagram} />
              {!isCollapsed && <span>Projects</span>}
            </a>
          </li>
          <li>
            <a href="/tasks">
              <FontAwesomeIcon icon={faTasks} />
              {!isCollapsed && <span>Tasks</span>}
            </a>
          </li>
          <li>
            <a href="/teams">
              <FontAwesomeIcon icon={faUsers} />
              {!isCollapsed && <span>Teams</span>}
            </a>
          </li>
          <li>
            <a href="/reports">
              <FontAwesomeIcon icon={faChartBar} />
              {!isCollapsed && <span>Reports</span>}
            </a>
          </li>
          <li>
            <a href="/settings">
              <FontAwesomeIcon icon={faCog} />
              {!isCollapsed && <span>Settings</span>}
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
