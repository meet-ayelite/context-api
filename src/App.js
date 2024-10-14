// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { LoginContext } from './context/LoginContext'; 
import Home from './components/Home';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Login from './components/Login';
import { LoginProvider } from './context/LoginContext'; // Import LoginProvider
import './styles.css';

function App() {

  const { user, logout } = useContext(LoginContext); // Access user and logout from context

  return (
    <LoginProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              {!user && <li><Link to="/login">Login</Link></li>}

              {user && (
                <li>
                  <span>Welcome, {user.username}!</span>
                  <button onClick={logout} className="logout-button">Logout</button>
                </li>
              )}
            </ul>
          </nav>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </Router>
    </LoginProvider>
  );
}

export default App;