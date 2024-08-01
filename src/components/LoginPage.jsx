import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Authentication logic
    if (username === '123' && password === '123') {
      navigate('/home');
    } else {
      alert('Invalid username or password');
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
              type={showPassword ? "text" : "password"}
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
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          <div className="remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember"> Remember me</label>
          </div>

          <button type="submit">Sign In</button>
          <p>Don't Have Any Account? <a href="#">Sign Up</a></p>
        </form>
      </div>
      <div className="welcome-section">
        <h1>Hey!</h1>
        <h1>Welcome Back</h1>
       
      </div>
    </div>
  );
}

export default LoginPage;
