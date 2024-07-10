import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup'; // Import Signup component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 main-content">
              <Routes>
              <Route path="/signup" element={<Signup />} /> {/* Route for Signup component */}
              {/* Add more routes as needed */}
                <Route path="/" element={<Dashboard />} />
                
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
