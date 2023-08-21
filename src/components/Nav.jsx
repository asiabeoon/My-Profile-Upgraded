import Navbar from "./Navbar"


export default function Nav({ setSelectedNav }) {
  const handleNavClick = (selectedNav) => {
    setSelectedNav(selectedNav);
  }

  return (
    <Navbar
      links={[
        <button key={2} className="nav-link text-light" to="/about" onClick={() => handleNavClick("About Me")}>
          About Me
        </button>,
        <button key={1} className="nav-link text-light" to="/" onClick={() => handleNavClick("My Portfolio")}>
          Portfilio
        </button>,
        
        <button key={3} className="nav-link text-light" to="/resume" onClick={() => handleNavClick("Resume")}>
          Resume
        </button>,
        <button key={4} className="nav-link text-light" to="/contact" onClick={() => handleNavClick("Contact Me")}>
          Contact Me
        </button>,
      ]}
    />
  );
}


