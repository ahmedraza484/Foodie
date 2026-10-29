import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">AHMED RAZA</div>
          <div className="right">
            <p>Quaidabad, Karachi</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By AHMED RAZA</p>
          </div>
          <div className="right">
            <p>All Rights Reserved By Ahmed Raza.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;