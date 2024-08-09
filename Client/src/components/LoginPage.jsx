import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';


function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const[errors,setErrors]=useState("false");
  const[passerrors ,setPassError]=useState("false");
  const[loginStatus, setLoginStatus]=useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Authentication logic
    if (username === '123' && password === '123') {
      navigate('/home');
    } else {
      Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
      }).then((response) => {
      if(response.data.message){
          setLoginStatus(response.data.message);
      }else{
         navigate('/home', {state: {username: username}})
          //navigate(`/sPanel/${prn}`,{state:{prn:props.prn}});
      }
      })
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
          <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>
          <p>Don't Have Any Account? <a href="#">Sign Up</a></p>
        </form>
      </div>
      <div className="welcome-section">
        <h1 style={{ color: 'white', fontSize: '60px', marginBottom:"10px" }}>SymbiAnatomy.</h1>
      </div>
    </div>
  );
}

export default LoginPage;
