
// src/components/pages/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="about-content">
        <img src="/images/me.jpg" alt="My Profile" className="profile-pic" />
        <div className="about-text">
          <p>
            Hi, I'm Juliette, a passionate web developer with a knack for creating dynamic and responsive web applications. I have over 5 years of experience in front-end development and UX/UI design. My journey started when I built my first website as a hobby, and since then, I have honed my skills in various technologies including React, Vue.js, and Angular.
          </p>
          <p>
            I hold a Bachelor's degree in Geology and environmental science from the University of Buea, where I graduated with honors. My strong foundation in computer science principles, combined with my creative flair, allows me to create websites that are not only functional but also aesthetically pleasing.
          </p>
        </div>
      </div>
      <div className="skills-section">
        <h3>Skills</h3>
        <div className="about-text">
          <ul>
            <li>Proficient in JavaScript, HTML, CSS, and modern JavaScript frameworks like React and Vue.js.</li>
            <li>Experienced in back-end development using Node.js, Express.js, and MongoDB.</li>
            <li>Strong understanding of responsive design principles and mobile-first development.</li>
            <li>Skilled in using version control systems like Git and GitHub.</li>
            <li>Excellent problem-solving abilities and a keen eye for detail.</li>
          </ul>
        </div>
      </div>
      <div className="interests-section">
        <h3>Interests</h3>
        <div className="about-text">
          <p>
            When I'm not coding, I love to explore new technologies and stay updated with the latest trends in web development. I am an avid reader of tech blogs and enjoy participating in hackathons and coding challenges. I also have a passion for teaching and often mentor aspiring developers through online forums and local meetups.
          </p>
          <p>
            Outside of tech, I enjoy painting, hiking, and traveling to new places. I believe that a well-rounded life helps to fuel creativity and brings a fresh perspective to my work.
          </p>
        </div>
      </div>
      <a href="#contact" className="btn-primary">Contact Me</a>
    </div>
  );
};

export default About;
