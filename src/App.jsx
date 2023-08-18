// Bringing in the required import from 'react-router-dom'
// import { Outlet } from 'react-router-dom';
import Nav from './components/Naviagation/Nav';
import React, { useState } from 'react';
import PortfolioLayout from './app/Header';
import AboutPage from './app/AboutPage';
// import Profile from './Profile';
import Contact from './app/ContactPage';
// import Resume from './app/ResumePage';

const App = () => {
  const [selectedNav, setSelectedNav] = useState("About Me");

  const renderSection = () => {
    switch (selectedNav) {
      case "About Me":
        return <AboutPage />;
      case "Portfolio":
        return <PortfolioLayout />;
      case "Contact":
        return <Contact />;
      case "Resume":
    //     return <ResumePage />;
    //   default:
        return null;
    }
  };

  return (
    <div>
      <Nav />
      {renderSection()}
    </div>
  );
};


export default App;

// import React from 'react';
// import PortfolioLayout from './Header';

// const App = () => {
//   return (
//     <div>
//       <PortfolioLayout />
//     </div>
//   );
// };

// export default App;

