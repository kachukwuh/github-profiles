import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
  return (
    <div>
      <div className="navbar">
        <i className="fab fa-github fa-3x"></i>
        <div>
          <h4>GitHub Profile Finder</h4>
          <p>by Kachukwuh</p>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Navbar;
