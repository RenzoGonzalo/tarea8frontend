import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserBoard from './pages/UserBoard';
import AdminBoard from './pages/AdminBoard';
import ModeratorBoard from './pages/ModeratorBoard';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<UserBoard />} />
          <Route path="/admin" element={<AdminBoard />} />
          <Route path="/mod" element={<ModeratorBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
