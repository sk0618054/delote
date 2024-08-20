import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css"; // Import the CSS file

const AuthForm = ({ type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const url = type === "login" ? "/login" : "/signup";
    try {
      const res = await axios.post(`http://localhost:5000/api/auth${url}`, {
        email,
        password,
      });
      console.log(res.data);
      navigate("/home");
    } catch (err) {
      if (err.response && err.response.data) {
        setError(
          err.response.data.msg || "An error occurred. Please try again."
        );
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <h2>{type === "login" ? "Login" : "Signup"}</h2>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">{type === "login" ? "Login" : "Signup"}</button>
          {error && (
            <div style={{ color: "red", marginTop: "10px" }}>{error}</div>
          )}
          {type === "login" && <a href="/forgot-password">Forgot password?</a>}
          {type === "signup" && (
            <a href="/login">Already have an account? Login</a>
          )}
        </form>

        {/* Social login buttons */}
        <div className="social-login">
          <button className="facebook-btn">
            {/* Facebook SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 48 48"
            >
              <linearGradient
                id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                x1="9.993"
                x2="40.615"
                y1="9.993"
                y2="40.615"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#2aa4f4"></stop>
                <stop offset="1" stopColor="#007ad9"></stop>
              </linearGradient>
              <path
                fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              ></path>
              <path
                fill="#fff"
                d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
              ></path>
            </svg>
            Login with Facebook
          </button>
          <button className="google-btn">
            {/* Google SVG Icon */}
            <svg viewBox="0 0 48 48" style={{ height: 20 }}>
              <title>Google Logo</title>
              <clipPath id="g">
                <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
              </clipPath>
              <g className="colors" clipPath="url(#g)">
                <path fill="#FBBC05" d="M0 37V11l17 13z" />
                <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
