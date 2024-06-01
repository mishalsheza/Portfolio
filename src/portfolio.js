import React from 'react';
import './style.css';

import bg from "./bg.jpg";
import profilePic from "./profilePic.jpg"

function Portfolio() {
  return (
    <div className="wrapper">
      <nav className="navbar">
        <div className="brand">SHEZA</div>
        <div className="nav-links">
          <a href="#education" className="nav-link">Education</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#profile" className="nav-link">Profile</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#clients" className="nav-link">Clients</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>
      <div className="intro">
        <div className="bg-overlay"></div>
        <section className="intro-text">
          <h1>
            HI
            <span>,</span>
            <span> I AM</span>
            <br />
            <span>SHEZA</span>
            <br />
            <span>MISHAL</span>
          </h1>
          <p>UI/UX DESIGNER AND WEB DEVELOPER</p>
          <button className="resume-button">Download Resume</button>
        </section>
      </div>
      <h2 class="title">About Me</h2>
      <div className="about-me">
        <div className="about-me-text">
          
          <h3 className='p1'>
            I am Sheza Mishal, a passionate UI/UX Developer with extensive experience in creating
            user-friendly and aesthetically pleasing designs. My goal is to deliver exceptional digital
            experiences that meet both user needs and business objectives.
          </h3>
          <p className='p2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officiis harum quam laboriosam, 
          error cum facere, cumque beatae voluptate omnis quia tempore alias ipsum incidunt nemo inventore expedita esse distinctio!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officiis harum quam laboriosam, 
          error cum facere, cumque beatae voluptate omnis quia tempore alias ipsum incidunt nemo inventore expedita esse distinctio!
          </p>
          <hr className="divider" />
        <div className="contact-info">
          <span className="phone">
            <strong>Phone: </strong>
            <br></br>
            123-456-7890</span>
          <span className="email">
          <strong>Email: </strong>
            <br></br>
            sheza@example.com</span>
          <span className="website">
          <strong>Website:</strong>
            <br></br>
            www.brownsine.com</span>
        </div>
          </div>
        
        <div className="about-me-image">
          <img src={profilePic} alt="Sheza Mishal" />
        </div>
      </div>





    </div>

  );
}

export default Portfolio;
