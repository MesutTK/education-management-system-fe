import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Departments from './pages/Departments';
import Courses from './pages/Courses';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
