import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const user = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
    alert("You have successfully Log Out");
  };
  return (
    <header className="menu-container">
      <nav className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/checkout">Checkout</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink onClick={handleSignOut} to="/">
          Logout
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
