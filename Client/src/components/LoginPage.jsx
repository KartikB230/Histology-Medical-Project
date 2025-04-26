import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState('');

  useEffect(() => {
    // Reset authentication state when the login page is accessed
    localStorage.setItem('isAuthenticated', 'false');
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Authentication logic
    if (username === '123' && password === '123') {
      onLogin(); // Set authentication state to true
      navigate('/home'); // Navigate to the home page
    } else {
      Axios.post('http://localhost:3001/login', {
        username: username,
        password: password,
      })
        .then((response) => {
          if (response.data.message) {
            setLoginStatus(response.data.message); // Display login error
          } else {
            onLogin(); // Set authentication state to true
            navigate('/home', { state: { username: username } }); // Navigate with user state
          }
        })
        .catch((error) => {
          setLoginStatus('An error occurred during login. Please try again.');
          console.error(error);
        });
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          <div className="remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember"> Remember me</label>
          </div>

          <button type="submit">Sign In</button>
          <h1
            style={{
              color: 'red',
              fontSize: '15px',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            {loginStatus}
          </h1>
          {/* Login Status Message */}
          {loginStatus && (
            <div
              style={{
                color: 'red',
                textAlign: 'center',
                marginTop: '10px',
              }}
            >
              
            </div>
          )}

          <p>
            {/* Don't Have Any Account? <fa href="#">Sign Up</a> */}
          </p>
        </form>
      </div>
      <div className="welcome-section">
      <h1>
          HistoMatix
        </h1>
      </div>
    </div>
  );
}

export default LoginPage;
