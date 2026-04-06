import React from "react";
import "./CvCover.css";

const Nav = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="header__line"></div>
        <h1 className="header">Lavelle Ali</h1>
        <h4 className="subtitle"> <span className="text__color--green">Junior Frontend Developer</span> </h4>
        <ul className="personal__info">
          <li>
            6252 Wellington Dr.
          </li>
          <li>
            Union City, GA 30291
          </li>
          <li>
             470-710-8282
          </li>
          <li>
            Lavelleali7@gmail.com
          </li>
        </ul>
        <div className="skill__section">
          <h4 className="subtitle"> <span className="text__color--green">Skills</span> </h4>
          <p>HTML, CSS, JavaScript, React, Responsive Web Design, Technical Writing, Presentation</p>
        </div>

        <div className="education__section">
          <h4 className="subtitle__edu"> <span className="text__color--green">Education</span> </h4>
          <p className="text__color--blue">School Name, Location - Degree</p>
          <p className="para__height">Month 20xx to Month 20xx</p>
          <p>List of Accomplishments attained at establishments</p>
        </div>

        <div className="experience__section">
          <h4 className="subtitle__edu"> <span className="text__color--green">Experience</span> </h4>
          <p className="text__color--blue">Company Name, Location - Job Title</p>
          <p className="para__height">Month 20xx to Month 20xx</p>
          <ul className="loa1">
            <li>List of Achievements</li>
            <li>List of Achievements</li>
            <li>List of Achievements</li>
          </ul>
          <p>Skills: List of Skills used or gained at this conpany </p>
        </div>
        <div className="experience__section section__pt2">
          <p className="text__color--blue">Company Name, Location - Job Title</p>
          <p className="para__height">Month 20xx to Month 20xx</p>
          <ul className="loa1">
            <li>List of Achievements</li>
            <li>List of Achievements</li>
            <li>List of Achievements</li>
          </ul>
          <p>Skills: List of Skills used or gained at this conpany </p>
        </div>

        <div className="Across__section">
          <h4 className="subtitle"> <span className="text__color--green">Across the Internet</span> </h4>
          <p>Add your LinkedIn, GitHub profile links</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
