import React from 'react';
import Footer from '../components/Footer';

import aboutImage from '../assets/images/me-hairout-casual.jpeg'

export default function AboutPage() {
  return (
    <div aboutPage="container pt-4">
      
      <h2>About Me</h2>

      <div className="about-image">
      <img src={aboutImage} alt="About us" className="medium-image" />
      </div>

      <p>
        Hi there! My name is Asia Hashim-Bey, and I'm thrilled to share a little bit about myself with you. 

        First and foremost, I recently completed a FullStack Web Development course at the prestigious University of Pennsylvania. I'm incredibly passionate about technology and I'm excited to embark on a new career journey in the world of web development.
    </p>
    <p>
      However, my current professional role lies in the Behavioral Health Field, where I serve as a dedicated Clinical Associate. With over 15 years of experience in this field, I have had the privilege of positively impacting the lives of countless individuals. I find immense fulfillment in helping people overcome their challenges and achieve personal growth.
    </p>
    <p>
      Outside of work, I have a variety of hobbies that keep me engaged and inspired. One of my favorite pastimes is crafting jewelry. There's something incredibly fulfilling about creating unique and beautiful pieces from scratch. It allows me to express my creativity while also serving as a form of meditation.
    </p>
    <p>
      When I'm not immersed in my craft, you can often find me in my garden. Gardening has become my sanctuary, providing solace and tranquility. It allows me to connect with nature and witness the beauty of life firsthand. It's an incredibly rewarding experience to see the fruits of my labor flourish and thrive.
    </p>
    <p>
      In addition to my love for crafting and gardening, I'm also deeply passionate about learning about healthy eating and cooking. Exploring new recipes, experimenting with flavors, and nourishing my body with wholesome ingredients are all part of the culinary adventure that keeps me inspired.
    </p>
    <p>
      Overall, I'm a curious and driven individual who eagerly seeks out new opportunities for personal and professional growth. With a background in behavioral health and a newfound passion for web development, I'm excited to see where my journey takes me next.
    </p>
      
      
    </div>
  );
}