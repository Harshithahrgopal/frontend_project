import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      if (response.data.success) {
        alert("✅ Login Successful!");
        // Optional: redirect to dashboard
      } else {
        alert("❌ Invalid Credentials");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("🚨 Server Error. Please try again later.");
    }
  };

  return (
    <div className="main-wrapper">
      <div className="main-container">
        {/* LEFT PANEL */}
        <div className="left-panel">
          <div className="left-panel-content">
            <div className="logo-text">
              <h1 className="logo">CAMPUS <span className="core">CORE</span></h1>
            </div>
            <h2>Welcome to Your Academic Journey</h2>
            <p className="subtitle">
              Manage your courses, track your schedule, and stay organized throughout your academic term with our comprehensive management platform.
            </p>

            <div className="features">
              <div className="feature-box">📚<br /><span>Course<br />Management</span></div>
              <div className="feature-box">🕒<br /><span>Schedule<br />Tracking</span></div>
              <div className="feature-box">📈<br /><span>Progress<br />Analytics</span></div>
            </div>

            <div className="feature-dots">
              <span className="dot"></span>
              <span className="dot active"></span>
              <span className="dot"></span>
            </div>

            <div className="testimonial">
              <p>
                As a professor, I appreciate how simple it is to communicate schedule changes to my students. The platform is intuitive and saves me hours each week.
              </p>
              <strong>Dr. Michael T., Engineering Faculty</strong>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          <div className="right-panel-content">
            <div className="toggle-buttons">
              <button>Student</button>
              <button className="active">Faculty</button>
            </div>

            <h2 className="login-heading">Logging in as Faculty</h2>

            {/* Faculty ID Input */}
            <div className="form-group input-with-icon">
              <label htmlFor="faculty-id">Faculty ID or Email</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="faculty-id"
                  placeholder="Enter your Faculty ID or email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FontAwesomeIcon icon={faUser} className="input-icon" />
              </div>
            </div>

            {/* Password Input */}
            <div className="form-group input-with-icon">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="input-icon"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: 'pointer' }}
                />
                <div className="forgot-password">
                  <a href="#">Forgot password?</a>
                </div>
              </div>
            </div>

            {/* Remember Me */}
            <div className="options">
              <label><input type="checkbox" /> Remember me</label>
            </div>

            {/* Login Button */}
            <button className="login-btn" onClick={handleLogin}>Login</button>

            {/* Divider */}
            <div className="divider">or continue with</div>

            {/* Google Login Button */}
            <button className="google-login-btn">
              <img
                src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                alt="Google icon"
                className="google-icon"
              />
              Log In with Google
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="global-footer">
        <div className="footer-left">Designed and developed by ZoroTeam</div>
        <div className="footer-center"><strong>HARSHITHA H G</strong></div>
        <div className="footer-right">© 2025 Zoro innovations</div>
      </footer>
    </div>
  );
}

export default App;
