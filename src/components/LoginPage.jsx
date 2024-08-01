import React from 'react';


function LoginPage() {
  return (
    <div className='llogin'>
            <div className="login-container">
            <div className="login-form">
                <h2 style={{fontSize:"30px"}}>LOGIN</h2>
                <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />

                <div className="remember-me">
                    <input type="checkbox" id="remember" name="remember" />
                    <label htmlFor="remember"> Remember me</label>
                </div>

                <button type="submit">Sign In</button>
                <p>Don't Have Any Account? <a href="#">Sing Up</a></p>
                </form>
            </div>
            <div className="welcome-section">
                <h1>Hey</h1>
                <h1>Welcome</h1>
                <h1>Back</h1>
            </div>
            </div>
    </div>
    
  );
}

export default LoginPage;
