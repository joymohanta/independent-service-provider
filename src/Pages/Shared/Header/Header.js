import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/checkout">Checkout</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  );
};

export default Header;
