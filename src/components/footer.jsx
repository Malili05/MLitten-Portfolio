import React from 'react';
import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="sticky-footer">
      <div className='footer'>
      <h3 className="social-heading">Connect with me:</h3>
        <ul className="social-links">
          <li>
            <a href="https://www.linkedin.com/in/malisalitten/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/Malili05" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
         <li>
            <a href="https://medium.com/@malisalitten" target="_blank" rel="noopener noreferrer">
              Medium
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;