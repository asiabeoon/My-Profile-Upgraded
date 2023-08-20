// import { Link } from 'react-router-dom';
import Navbar from "./Navbar"


export default function Nav({ setSelectedNav }) {
  const handleNavClick = (selectedNav) => {
    setSelectedNav(selectedNav);
  }

  return (
    <Navbar
      links={[
        <li key={1} className="nav-link text-light" to="/" onClick={() => handleNavClick("My Portfolio")}>
          Portfilio
        </li>,
        <li key={2} className="nav-link text-light" to="/about" onClick={() => handleNavClick("About Me")}>
          About Me
        </li>,
        <li key={3} className="nav-link text-light" to="/resume" onClick={() => handleNavClick("Resume")}>
          Resume
        </li>,
        <li key={4} className="nav-link text-light" to="/contact" onClick={() => handleNavClick("Contact Me")}>
          Contact Me
        </li>,
      ]}
    />
  );
}


