import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/Register';
import Login from './pages/login';
import About from './pages/about';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="https://cdn.sanity.io/images/cphrnle8/production/dc4e70fbc0520f2a2656a880832b76340277a7d1-3360x1680.webp?rect=560,0,2240,1680&w=800&h=600&q=100" alt="Header" className="header-image" />
          <nav className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;