import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Naviagation/Navbar';
const PortfolioLayout = () => {
  return (
    <div>
      <nav> 

    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          Home
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
          About Me
        </Link>,
          <Link key={3} className="nav-link text-light" to="/resume">
          Resume
        </Link>,
          <Link key={4} className="nav-link text-light" to="/contact">
          Contact Me
        </Link>,
      ]}
    />
  

      </nav>
      <header>
        <h1>Asia Hashim-Bey</h1>
        {/* Additional header content goes here */}
      </header>

      <main>
        {/* Content section goes here */}
      </main>

      <footer>
        {/* Footer content goes here */}
      </footer>
    </div>
  );
};

export default PortfolioLayout;
