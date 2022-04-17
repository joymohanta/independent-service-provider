import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter emil"
            required
          />
        </div>
        <div className="input-field">
          <label id="label-field" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            required
          />
        </div>
        <h6 className="reset-title">
          Forget Password? <Link to="/">Reset</Link>
        </h6>
        <input className="form-button" type="submit" value="Login" />
        <div className="bar-panel">
          <div className="first-bar"></div>
          <h5>or</h5>
          <div className="second-bar"></div>
        </div>
        <h6>
          New to here <Link to="/signup">SignUp</Link>
        </h6>
        <button className="google-button">
          <img
            src={
              "https://i.ibb.co/yQtcZyY/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            }
            alt=""
          />
          Sign In with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
