import React from "react";
import "./CvCover.css";

const Nav = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="header">Lavelle Ali</h1>
        <h2 className="subtitle">Junior Frontend Developer</h2>

        <ul className="personal__info">
          <li>
            <span className="bold__text">Address:</span> 6252 Wellington Dr.
            Union City, GA 30291
          </li>
          <li>
            <span className="bold__text">Phone:</span> 470-710-8282
          </li>
          <li>
            <span className="bold__text">Email:</span> Lavelleali7@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
