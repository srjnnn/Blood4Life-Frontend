import './signin.css';
import backgroundAuth from '/backgroundAuth.png'; // use correct relative path

function signin() {
  return (
    <div
      className="auth-container"
      style={{ backgroundImage: `url(${backgroundAuth})` }}
    >
      <div className="header-section">
        <div className="logo"> <img src='/blood.svg' alt="" height='100px' width='50px'/></div>
        <p className="tagline">One drop Can SaveLife!</p>
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
        Don't have an account? <a href="#">sign up!</a>
      </div>
    </div>
  );
}

export default signin;
