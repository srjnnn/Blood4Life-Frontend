import './signin.css';
import { Link } from 'react-router-dom'; // 👈 import Link

function SignIn() {
  return (
    <div className="auth-container">
      <div className="header-section">
        <div className="logo">
          <img src='/blood.png' alt="Blood Logo" height='100px' width='50px' />
        </div>
        <p className="tagline">One drop Can Save Life!</p>
        <h2 className="welcome-text">Hello! Welcome Back</h2>
        <p className="signin-prompt">Sign in to your Account</p>
      </div>

      <div className="form-card">
        <div className="input-group">
          <label>
            📞
            <input type="text" placeholder="user123@gmail.com" />
          </label>
        </div>

        <div className="input-group">
          <label>
            🔒
            <input type="password" placeholder="Password" />
          </label>
        </div>

        <div className="options-row">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forget Password?</a>
        </div>

        <button className="signin-button">Sign in</button>
      </div>

      <div className="signup-footer">
        Don't have an account? <Link to="/signup">sign up!</Link>
      </div>
    </div>
  );
}

export default SignIn;
