import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function ResumePage() {
    return (
      <div aboutPage="container pt-4">
        <Header /> {/* Include the Header component */}
        <h1>My Resume</h1>
        
        <div>
            <a href="resume_link.pdf" download>Download Resume</a>
        </div>

        <div>
            <h2>Proficiencies</h2>
            <ul>
                <li>Proficiency 1</li>
                <li>Proficiency 2</li>
                <li>Proficiency 3</li>
            </ul>
        </div>

  <Footer />
</div>
  
        
    );
  }
  