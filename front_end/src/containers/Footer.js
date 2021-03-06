import React from 'react';
import './Footer.css';

const Footer = () => {
  return(
    <React.Fragment>
      <div className="footer">
        <div className="linkedin">
          <div className="linkedin-entry">
            <img src="linkedin-logo.svg" alt="LinkedIn Logo"></img>
            <a href="https://linkedin.com/in/richardpk" target="_blank" rel="noopener noreferrer">Richard Phillips-Kerr</a>
          </div>
          <div className="linkedin-entry">
            <img src="linkedin-logo.svg" alt="LinkedIn Logo"></img>
            <a href="https://linkedin.com/in/matthew-bryce" target="_blank" rel="noopener noreferrer">Matthew Bryce</a>
          </div>
          <div className="linkedin-entry">
            <img src="linkedin-logo.svg" alt="LinkedIn Logo"></img>
            <a href="https://linkedin.com/in/roddy-daly-24567051" target="_blank" rel="noopener noreferrer">Roddy Daly</a>
          </div>
          <div className="linkedin-entry">
            <img src="linkedin-logo.svg" alt="LinkedIn Logo"></img>
            <a href="https://linkedin.com/in/derek-leach" target="_blank" rel="noopener noreferrer">Derek Leach</a>
          </div>
        </div>
        <div className="github">
          <div className="github-entry">
            <img src="github-logo.svg" alt="Github Logo"></img>
            <a href="https://github.com/RichardPK" target="_blank" rel="noopener noreferrer">Richard Phillips-Kerr</a>
          </div>
          <div className="github-entry">
            <img src="github-logo.svg" alt="Github Logo"></img>
            <a href="https://github.com/mattbryce93" target="_blank" rel="noopener noreferrer">Matthew Bryce</a>
          </div>
          <div className="github-entry">
            <img src="github-logo.svg" alt="Github Logo"></img>
            <a href="https://github.com/rodders110" target="_blank" rel="noopener noreferrer">Roddy Daly</a>
          </div>
          <div className="github-entry">
            <img src="github-logo.svg" alt="Github Logo"></img>
            <a href="https://github.com/dl184" target="_blank" rel="noopener noreferrer">Derek Leach</a>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Footer;
