import React from 'react';
import weeklyOrganizer from '../assets/images/weekly-organizer.png'

export default function PortfolioPage() {
  return (
    <div className="container pt-4">
      <h2>My GitHub Portfolio</h2>

      <div className="image-grid">
        <div className="image-card">
          <a href="https://asiabeoon.github.io/My-Day-Scheduler/" target="_blank" rel="noopener noreferrer">
            <img src={weeklyOrganizer} alt="App 1" />
          </a>
          <div className="image-card-title">
            <h3>Weekly Organizer</h3>
            <p>
              <a href="https://github.com/asiabeoon/My-Day-Scheduler/" target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </p>
          </div>
        </div>

        <div className="image-grid">
        <div className="image-card">
          <a href="https://example.com/app1" target="_blank" rel="noopener noreferrer">
            <img src="path/to/app1-image.jpg" alt="App 1" />
          </a>
          <div className="image-card-title">
            <h3>App 2</h3>
            <p>
              <a href="https://github.com/your-username/app1" target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </p>
          </div>
        </div>  

              <div className="image-grid">
        <div className="image-card">
          <a href="https://example.com/app1" target="_blank" rel="noopener noreferrer">
            <img src="path/to/app1-image.jpg" alt="App 1" />
          </a>
          <div className="image-card-title">
            <h3>App 3</h3>
            <p>
              <a href="https://github.com/your-username/app1" target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </p>
          </div>
        </div>

        <div className="image-grid">
        <div className="image-card">
          <a href="https://example.com/app1" target="_blank" rel="noopener noreferrer">
            <img src="path/to/app1-image.jpg" alt="App 1" />
          </a>
          <div className="image-card-title">
            <h3>App 4</h3>
            <p>
              <a href="https://github.com/your-username/app1" target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </p>
          </div>
        </div>

        <div className="image-grid">
        <div className="image-card">
          <a href="https://example.com/app1" target="_blank" rel="noopener noreferrer">
            <img src="path/to/app1-image.jpg" alt="App 1" />
          </a>
          <div className="image-card-title">
            <h3>App 5</h3>
            <p>
              <a href="https://github.com/your-username/app1" target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </p>
          </div>
        </div>

        <div className="image-card">
          <a href="https://example.com/app6" target="_blank" rel="noopener noreferrer">
            <img src="path/to/app6-image.jpg" alt="App 6" />
          </a>
          <div className="image-card-title">
            <h3>App 6</h3>
            <p>
              <a href="https://github.com/your-username/app6" target="_blank" rel="noopener noreferrer">
                GitHub Repository
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

  