import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="main-footer">
        <div>
          <h1>Address</h1>
          <h6>Home, 12, Gulisthan</h6>
          <h6>Office, Dhaka Gulshan</h6>
          <h6>Chember, Gulisthan</h6>
        </div>
        <div>
          <h1>Main Services</h1>
          <h6>Plastic Surgery</h6>
          <h6>Lip Surgery</h6>
          <h6>Consultation</h6>
        </div>
        <div>
          <h1>Contact</h1>
          <h6>Mobile: 01891111111</h6>
          <h6>Email: dr.joy@yahoo.com</h6>
          <h6>Twitter: dr.joyRoy210</h6>
        </div>
      </div>
      <p className="text-light text-center pt-5">
        Copyright &copy; All rights reserved by joy mohanta
      </p>
    </footer>
  );
};

export default Footer;
