import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>Resume</h2>
      <p>
        You can download my resume by clicking the link below:
      </p>
      <a href="/public/Resume.pdf" target="_blank" className="btn-primary">Download Resume</a>

      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>HTML5 & CSS3</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Sequelize & PostgreSQL</li>
        <li>Git & GitHub</li>
        <li>Responsive Design</li>
        <li>UI/UX Design</li>
      </ul>
    </div>
  );
};

export default Resume;
