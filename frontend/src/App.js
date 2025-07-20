import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <header className="app-header">
          <div className="select-study">
            <select>
              <option>Select a Study</option>
            </select>
          </div>
          <div className="header-icons">
            <span><i className="far fa-comment-alt"></i></span>
            <span><i className="fas fa-globe"></i></span>
            <span><i className="far fa-user-circle"></i></span>
          </div>
        </header>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;