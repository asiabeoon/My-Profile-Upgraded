import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Optional Text</p>

      {/* GitHub Link */}
      <a href="https://github.com/developer-asiabeoon" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>

      {/* LinkedIn Link */}
      <a href="https://linkedin.com/in/developer-username" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>

      {/* Third Platform Link (example: Stack Overflow) */}
      <a href="https://stackoverflow.com/users/developer-username" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-stack-overflow"></i>
      </a>

      {/* Third Platform Link (example: Twitter) */}
      <a href="https://twitter.com/developer-username" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
    </footer>
  );
};

export default Footer;