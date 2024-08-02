
// src/components/pages/Home.jsx
import React from 'react';
import './Home.css';

const Home = ({ handlePageChange }) => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Juliette's Portfolio</h1>
        <p className="intro-text">
          Hi there! I'm Juliette, a passionate web developer with a knack for creating dynamic and responsive web applications.
          Explore my portfolio to see some of my latest projects and learn more about my skills and experiences.
        </p>
        <p className="intro-text">Feel free to reach out if you have any questions or would like to collaborate on a project.</p>
        <button onClick={() => handlePageChange('Contact')} className="btn-primary">Contact Me</button>
      </div>
    </div>
  );
};

export default Home;
