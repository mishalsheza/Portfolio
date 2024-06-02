import React from 'react';
import './style.css';
import DotIcon from "./Dot-Icon.jpg"
import bg from "./bg.jpg";
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';
import { mdiDropbox } from '@mdi/js';
import { mdiUnity } from '@mdi/js';
import { mdiSlack } from '@mdi/js';
import { mdiSalesforce } from '@mdi/js';
import { mdiGitlab } from '@mdi/js';
import { mdiDevTo } from '@mdi/js';
import { mdiAngular } from '@mdi/js';
import { mdiKickstarter } from '@mdi/js';
import { mdiDolby } from '@mdi/js';
import { mdiFontAwesome } from '@mdi/js';
import { mdiGoodreads } from '@mdi/js';






import { Link, Element } from 'react-scroll';

import profilePic from "./profilePic.jpg"

function Portfolio() {
  return (
    <div className="wrapper">
      <nav className="navbar">
        <div className="brand">SHEZA</div>
        <div className="nav-links">
        <Link to="education" smooth={true} duration={500} offset={-100}className="nav-link">Education</Link>
          <Link to="skills" smooth={true} duration={500} offset={-100} className="nav-link">Skills</Link>
          <Link to="experience" smooth={true} duration={500} offset={-100} className="nav-link">Experience</Link>
          <Link to="profile" smooth={true} duration={500} offset={-100} className="nav-link">Profile</Link>
          <Link to="portfolio" smooth={true} duration={500} offset={-100} className="nav-link">Portfolio</Link>
          <Link to="clients" smooth={true} duration={500} offset={-100} className="nav-link">Clients</Link>
          <Link to="contact" smooth={true} duration={500} offset={-100} className="nav-link">Contact</Link>
        </div>
      </nav>
      <div className="intro">
        <div className="bg-overlay"></div>
        <section className="intro-text">
          <h1>
            <span></span>
            <span> HI , I AM</span>
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
      <hr className="divider" />

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

      <Element name="education" className="section">

      <h1 className='education-text'>EDUCATION</h1>
      <div className="education">
        <div className='education-timeline'>

            <div class="educontainer up-education">
              <div class="edu-text">
                <h3>2008 - 2010</h3>
                <h4>Master of Computer Science</h4>
                <img src={DotIcon} alt="Dot Icon"></img>

            </div>
          </div>

          <div class="educontainer up-education">
              <div class="edu-text">
                <h3>2004 - 2008</h3>
                <h4>Bachelor of Computer Science</h4>
                <img src={DotIcon} alt="Dot Icon"></img>

            </div>
          </div>
          <div class="educontainer up-education">
              <div class="edu-text">
                <h3>2004 - 2008</h3>
                <h4>Bachelor of Creative Design</h4>
                <img src={DotIcon} alt="Dot Icon"></img>

            </div>
          </div>



          <div class="educontainer down-education">
        <div class="edu-text">
          <h3>UNIVERSITY OF NORTH CAROLINA</h3>
          <p> North Carolina, USA</p>
          <p>
            Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore
            eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.
             </p>         
        </div>
      </div>


        
          <div class="educontainer down-eduaction">
        <div class="edu-text">
          <h3>UNIVERSITY OF NORTH CAROLINA</h3>
          <p> North Carolina, USA</p>
          <p>
            Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore
            eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.
             </p>         
        </div>
      </div>


          

          <div class="educontainer down-education">
        <div class="edu-text">
          <h3>UNIVERSITY OF BOLTON</h3>
          <p> Bolton, United Kingdome</p>
          <p>
            Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore
            eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.
             </p>         
        </div>
      </div>


        </div>


      </div>
      </Element>



      <Element name="skills" className="section">

      <h1 className='skills-text'>SKILLS</h1>
      
      <div className='skill-container'>
        <div className='skill-column'>
        <div className='skill-box'>
        <span className='skill-title'>ADOBE PHOTOSHOP</span>

          <div className='skill-bar'>
              <span className='skill-per'>
                <span className='tooltip'>90%</span>
              </span>
              </div>
        </div>

        <div className='skill-box'>
        <span className='skill-title'>ADOBE ILLUSTRATOR</span>

          <div className='skill-bar'>
              <span className='skill-per'>
                <span className='tooltip'>85%</span>
              </span>
              </div>
        </div>

        <div className='skill-box'>
        <span className='skill-title'>ADOBE AFTER EFFECTS</span>

          <div className='skill-bar'>
              <span className='skill-per'>
                <span className='tooltip'>97%</span>
              </span>
              </div>
        </div>
        <div className='skill-box'>
        <span className='skill-title'>SKETCH</span>

          <div className='skill-bar'>
              <span className='skill-per'>
                <span className='tooltip'>90%</span>
              </span>
              </div>
        </div>
      </div>
      <div className='skill-column'>
        <div className='skill-box'>
        <span className='skill-title'>HTML 5</span>

          <div className='skill-bar'>
              <span className='skill-per'>
                <span className='tooltip'>90%</span>
              </span>
              </div>
        </div>

        <div className='skill-box'>
        <span className='skill-title'>CSS 3 ANIMATION</span>

          <div className='skill-bar'>
              <span className='skill-per'>
                <span className='tooltip'>85%</span>
              </span>
              </div>
        </div>
        <div className='skill-box'>
        <span className='skill-title'>COMMUNICATION</span>

          <div className='skill-bar'>
              <span className='skill-per'>
                <span className='tooltip'>97%</span>
              </span>
              </div>
        </div>
        <div className='skill-box'>
        <span className='skill-title'>CREATIVITY</span>

          <div className='skill-bar'>
              <span className='skill-per'>
                <span className='tooltip'>90%</span>
              </span>
              </div>
        </div>
        </div>

</div>
 <hr className="divider" />

 </Element>

 <Element name="experience" className="section">

    <h1 className='experience-text'>EXPERIENCE</h1>
    <hr className="divider" />


    <div className='experience-timeline'>

      <div class="container left-container">
        <img src={DotIcon} alt="Dot Icon"></img>
        <div class="textbox">
          <h3>2018 - Present</h3>
          <h4>CREATIVE DIRECTOR</h4>
        </div>
      </div>

      <div class="container right-container">
        <div class="textbox">
          <h3>HOPLONY TECH LIMITED</h3>
          <p> Newyork, USA</p>
          <p>
            Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore
            eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.
             </p>         
        </div>
      </div>

    <div class="container left-container">
        <div class="textbox">
          <h3>HOPLONY TECH LIMITED</h3>
          <p> Newyork, USA</p>
          <p>
            Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore
            eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.
             </p>         
        </div>
      </div>
      <div class="container right-container">
      <img src={DotIcon} alt="Dot Icon"></img>

        <div class="textbox">
          <h3>2016 - 2018</h3>
          <h4>ASSOCIATE DESIGN DIRECTOR</h4>
        </div>
      </div>

      <div class="container left-container">
      <img src={DotIcon} alt="Dot Icon"></img>

        <div class="textbox">
          <h3>2013 - 2016</h3>
          <h4>SENIOR UI/UX DESIGNER</h4>
        </div>
      </div>
      

      <div class="container right-container">
        <div class="textbox">
          <h3>HOPLONY TECH LIMITED</h3>
          <p> Newyork, USA</p>
          <p>
            Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore
            eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.
             </p>         
        </div>
      </div>

      <div class="container left-container">
        <div class="textbox">
          <h3>HOPLONY TECH LIMITED</h3>
          <p> Newyork, USA</p>
          <p>
            Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore
            eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.
             </p>         
        </div>
      </div>

      <div class="container right-container">
      <img src={DotIcon} alt="Dot Icon"></img>

        <div class="textbox">
          <h3>2012 - 2013</h3>
          <h4>UI/UX DESIGNER</h4>
        </div>
      </div>


      <div class="container left-container">
      <img src={DotIcon} alt="Dot Icon"></img>

        <div class="textbox">
          <h3>2010 - 2012</h3>
          <h4>FRONTEND DEVELOPER</h4>
        </div>
      </div>
      <div class="container right-container">
        <div class="textbox">
          <h3>HOPLONY TECH LIMITED</h3>
          <p> Newyork, USA</p>
          <p>
            Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore
            eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.
             </p>         
        </div>
      </div>


    </div>
  </Element>

  <Element name='profile' className='section'>
      <hr className="divider" />
      <h1 className='profile-header'>PROFILE</h1>
      <div className="profile-container">
        <div className='profile-grid'>
          <div className="profile-textbox">
            <div className='profile-icon'>
              <Icon path={mdiGithub} size={1} />
              </div>

              <a className='profile-text'>Github</a>
          </div>
          <div className="profile-textbox">
            <div className='profile-icon'>
              <Icon path={mdiDropbox} size={1} />
            </div>
              <a className='profile-text'>Dropbox</a>
          
          </div>
          <div className="profile-textbox">
            <div className='profile-icon'>
              <Icon path={mdiSalesforce} size={1} />
            </div>
              <a className='profile-text'>Salesforce</a>
            
          </div>
          <div className="profile-textbox">
            <div className='profile-icon'>
              <Icon path={mdiUnity} size={1} />
            </div>

              <a className='profile-text'>Unity</a>
          </div>

          <div className="profile-textbox">
            <div className='profile-icon'>
            <Icon path={mdiAngular} size={1} />
            </div>

              <a className='profile-text'>Angular</a>
          </div>
          <div className="profile-textbox">
            <div className='profile-icon'>
            <Icon path={mdiGitlab} size={1} />
            </div>

              <a className='profile-text'>Gitlab</a>
          </div>
          <div className="profile-textbox">
            <div className='profile-icon'>
            <Icon path={mdiDevTo} size={1} />
            </div>

              <a className='profile-text'>Dev-To</a>
          </div>
          <div className="profile-textbox">
            <div className='profile-icon'>
            <Icon path={mdiSlack} size={1} />
            </div>

              <a className='profile-text'>Slack</a>
          </div>
        </div>
      </div>
    </Element>

    <Element name='clients' className='section'>
      <h1 className='client-text'>CLIENTS</h1>
      <hr className="divider" />

      <div className='client-area'>
      <div className='client-container'>
          <div className='client-box'>
            <div className='client-icon'>
            <Icon path={mdiDolby} size={2} />
            </div>
            <div className='client-name'>Dolby</div>
          </div>
          <div className='client-box'>
            <div className='client-icon'>
            <Icon path={mdiKickstarter} size={2} />
            </div>
            <div className='client-name'>Kickstarter</div>
          </div>
          <div className='client-box'>
          <div className='client-icon'>
            <Icon path={mdiGoodreads} size={2} />
            </div>
            <div className='client-name'>Goodreads</div>
          </div>
          <div className='client-box'>
            <div className='client-icon'>
            <Icon path={mdiFontAwesome} size={2} />
          </div>
            <div className='client-name'>FontAwesome</div>
          </div>
        </div>
      </div>
      <hr className="divider" />

    </Element>

    <Element name='contact' className='contact'>
      <h1 className='contact-text'>CONTACT</h1>
      <hr className="divider" />
      <div className='contact-area'>
        <div className='left-contact-area'>
        <div className='contact-box'>
            <input type='text' placeholder='Name' className='input-field' />
            <input type='email' placeholder='Email' className='input-field' />
        </div>
        <div className='subject-box'>
            <input type='text' placeholder='Subject' className='input-field' />
        </div>
          <div className='message-box'>
            <textarea placeholder='Message' className='message-field'></textarea>
          </div>
          <button className='submit'>Submit</button>

        </div>

        <div className='right-contact-area'>
        <div className='contact-info'>
          <div className='contact-info-box'>
              <h2>SHEZA MISHAL</h2>
              <h3>UI/UX DESIGNER</h3>
            </div>
          </div>
          <div className='contact-info-col'>
            <h3>Phone</h3>
            <h4>987-123-6547</h4>
          </div>
          <div className='contact-info-col'>
            <h3>Email</h3>
            <h4>browny@info.com</h4>
          </div>
          <div className='contact-info-col'>
            <h3>Website</h3>
            <h4>www.brownsine.com</h4>
        </div>
        </div>
      </div>
    </Element>

  </div>

  
  );
}

export default Portfolio;
