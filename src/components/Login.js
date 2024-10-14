// src/Login.js
import React, { useState, useContext } from 'react';
import { LoginContext } from '../context/LoginContext'; // Import the context
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirect
import '../styles.css';

function Login() {
  const { login } = useContext(LoginContext); // Access login function from context
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation after login

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (formData.username === '' || formData.password === '') {
      setError('Please fill in all fields');
      return;
    }

    // Call login function from context
    login(formData.username);

    // Clear error and navigate to Home page (or any other page)
    setError('');
    navigate('/'); // Redirect to the home page after login
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
