import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './app/AboutPage';
import ResumePage from './app/ResumePage';
import PortfolioPage from './app/PortfolioPage';
import ContactPage from './app/ContactPage';

const App = () => {

  const [selectedNav, setSelectedNav] = useState("About Me");

  const renderSection = () => {
    switch (selectedNav) {
      case "About Me":
        return <AboutPage />;
      case "Resume":
        return <ResumePage />;
      case "Contact Me":
        return <ContactPage />;
      case "My Portfolio":
        return <PortfolioPage />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header selectedNav= {selectedNav} setSelectedNav={setSelectedNav}/>
    
     
      {renderSection()}
      <Footer />
    </div>
  
  
    
  );
};

export default App;