import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, user2, error2] = useSignInWithGoogle(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  if (user) {
    navigate("/checkout");
  }

  if (error2) {
    return /* (
      <div>
        <p className="text-danger">Error: {error2.message}</p>
      </div>
    ) */;
  }
  if (user2) {
    navigate("/checkout");
  }
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Password did not match");
      return;
    }
    if (password.length < 8) {
      setError("Set password 8 or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleCreateUser}>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            onBlur={handleEmailBlur}
            type="email"
            name="email"
            id="email"
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
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="input-field">
          <label id="label-field2" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            onBlur={handleConfirmPassBlur}
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm Password"
            required
          />
        </div>
        <p className="text-danger">{error}</p>
        <input className="form-button" type="submit" value="Sign Up" />
        <div className="bar-panel">
          <div className="first-bar"></div>
          <h5>or</h5>
          <div className="second-bar"></div>
        </div>
        <h6>
          Already have an account? <Link to="/login">Login</Link>
        </h6>
        {<p className="text-danger">{error2.message}</p>}
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

export default SignUp;
