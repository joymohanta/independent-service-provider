import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user2, error2] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPasword(event.target.value);
  };
  if (user) {
    navigate(from, { replace: true });
  }

  if (error2) {
    return (
      <div>
        <p className="text-danger">Error: {error2.message}</p>
      </div>
    );
  }
  if (user2) {
    navigate("/checkout");
  }

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleUserSignIn}>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            onBlur={handleEmailBlur}
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
            onBlur={handlePasswordBlur}
            type="password"
            name="password"
            id=""
            placeholder="Password"
            required
          />
        </div>
        <h6 className="reset-title">
          Forget Password? <Link to="/signup">Reset</Link>
        </h6>
        <p className="text-danger">{error?.message}</p>
        <input className="form-button" type="submit" value="Login" />
        <div className="bar-panel">
          <div className="first-bar"></div>
          <h5>or</h5>
          <div className="second-bar"></div>
        </div>
        <h6>
          New to here <Link to="/signup">SignUp</Link>
        </h6>
        <button className="google-button" onClick={() => signInWithGoogle()}>
          <img
            src={
              "https://i.ibb.co/yQtcZyY/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            }
            alt=""
          />
          <span>Sign In with Google</span>
        </button>
      </form>
    </div>
  );
};

export default Login;
