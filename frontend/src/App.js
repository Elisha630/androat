import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import FileManager from './components/FileManager';
import Keylogger from './components/Keylogger';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/files">File Manager</Link></li>
          <li><Link to="/keylogger">Keylogger</Link></li>
        </ul>
      </nav>

      <div className="App-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/files" element={<FileManager />} />
          <Route path="/keylogger" element={<Keylogger />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
