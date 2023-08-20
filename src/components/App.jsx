import React, { useState } from 'react';
import Header from './Header';
import AboutPage from '../app/AboutPage';
import ContactPage from '../app/ContactPage';
import ResumePage from '../app/ResumePage';

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
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <Nav setSelectedNav={setSelectedNav} />
      {renderSection()}
    </div>
  );
};

export default App;