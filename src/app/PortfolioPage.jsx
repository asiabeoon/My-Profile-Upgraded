import React from 'react';
import weeklyOrganizer from '../assets/images/weekly-organizer.png'
import firstProfile from '../assets/images/my-first-profile.png'
import passwordGenerator from '../assets/images/password-generator.png'
import noteTaker from '../assets/images/my-note-taker.png'
import textEditor from '../assets/images/text-editor.png'
import ecommerce from '../assets/images/ecommerce.png'


export default function PortfolioPage() {
  return (
    <div className="container pt-4">
      <h2>My GitHub Portfolio</h2>

      <div className="image-grid">
        <div className="image-card">
            <h3>Day Scheduler</h3>
          <a href="https://asiabeoon.github.io/My-Day-Scheduler/" target="_blank" rel="noopener noreferrer">
            <img src={weeklyOrganizer} alt="App 1" />
          </a>
          <div className="image-card-title">
            <p>
              <a href="https://github.com/asiabeoon/My-Day-Scheduler/" target="_blank" rel="noopener noreferrer">
                Day Scheduler GitHub Repository
              </a>
            </p>
          </div>
        </div>

        <div className="image-grid">
        <div className="image-card">
        <h3>My First Profile</h3>
          <a href="https://example.com/app1" target="_blank" rel="noopener noreferrer">
            <img src={firstProfile} alt="App 2" />
          </a>
          <div className="image-card-title">
            <p>
              <a href="My Profile https://asiabeoon.github.io/Challenge-2-My-Profile/" target="_blank" rel="noopener noreferrer">
                My First Profile
              </a>
            </p>
          </div>
        </div>  

              <div className="image-grid">
        <div className="image-card">
          <h3>Password Generator</h3>
          <a href="https://example.com/app1" target="_blank" rel="noopener noreferrer">
            <img src={passwordGenerator} alt="App 3" />
          </a>
          <div className="image-card-title">
            <p>
              <a href="https://asiabeoon.github.io/My-Code-Generator/ 
                    " target="_blank" rel="noopener noreferrer">
               Password Generator
              </a>
            </p>
          </div>
        </div>

        <div className="image-grid">
        <div className="image-card">
          <h3>Note Taker</h3>
          <a href="https://example.com/app1" target="_blank" rel="noopener noreferrer">
            <img src={noteTaker}alt="App 4" />
          </a>
          <div className="image-card-title">
            <p>
              <a href=" https://asiabeoon.github.io/My-Note-Taker/" target="_blank" rel="noopener noreferrer">
               Note Taker
              </a>
            </p>
          </div>
        </div>

        <div className="image-grid">
        <div className="image-card">
        <h3>Text Editor</h3>
          <a href="https://example.com/app1" target="_blank" rel="noopener noreferrer">
            <img src={textEditor} alt="App 5" />
          </a>
          <div className="image-card-title">
            <p>
              <a href="https://github.com/your-username/app1" target="_blank" rel="noopener noreferrer">
                Text Editor
              </a>
            </p>
          </div>
        </div>

        <div className="image-card">
        <h3>E Commerce Site</h3>
          <a href="https://example.com/app6" target="_blank" rel="noopener noreferrer">
            <img src={ecommerce} alt="App 6" />
          </a>
          <div className="image-card-title">
            <p>
              <a href="https://github.com/asiabeoon/E-Commerce-Template" target="_blank" rel="noopener noreferrer">
                E Commerce Site
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

  