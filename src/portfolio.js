import './style.css';
import bg from "./bg.jpg";

function portfolio() {
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
        <section className="intro-text">
          <img src={bg} className="bg" alt="Background" />
          <h1>Hi, I'm Sheza</h1>
        </section>
      </div>
    </div>
  );
}

export default portfolio;
