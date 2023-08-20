import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Nav({ setSelectedNav }) {
  const handleNavClick = (selectedNav) => {
    setSelectedNav(selectedNav);
  }

  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/" onClick={() => handleNavClick("Home")}>
          Home
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about" onClick={() => handleNavClick("About Me")}>
          About Me
        </Link>,
        <Link key={3} className="nav-link text-light" to="/resume" onClick={() => handleNavClick("Resume")}>
          Resume
        </Link>,
        <Link key={4} className="nav-link text-light" to="/contact" onClick={() => handleNavClick("Contact Me")}>
          Contact Me
        </Link>,
      ]}
    />
  );
}


