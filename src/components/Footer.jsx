import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center' }}>
      <p>Click on the links below to connect on different platforms!</p>

      {/* GitHub Link */}
      <a href="https://github.com/developer-asiabeoon" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>

      {/* LinkedIn Link */}
      <a href="https://www.linkedin.com/in/asia-hashim-bey/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>

      {/* Third Platform Link (example: Stack Overflow) */}
      <a href="https://stackoverflow.com/users/19272797/ajacodes" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-stack-overflow"></i>
      </a>

      {/* Third Platform Link (example: Twitter) */}
      <a href="https://twitter.com/bey_hashim20090" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
    </footer>
  );
};

export default Footer;