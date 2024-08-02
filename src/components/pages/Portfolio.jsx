import React from 'react';
import './Portfolio.css';

const projects = [
  {
    title: 'OfficeBreakRoom App',
    description: 'A robust app designed to help employees manage their breaks and office interactions with features like a break scheduler, chat rooms, and activity tracking.',
    image: '/images/fulldashwithgame.png', 
    deployedLink: 'https://office-break-room.onrender.com/',
    repoLink: 'https://github.com/emulcahey/Office_Break_Room.git'
  },
  {
    title: 'Juliette Note Taker',
    description: 'An app designed to help users take notes and keep track of their tasks. Users can create, save, and delete notes efficiently.',
    image: '/images/NoteTaker.png', 
    deployedLink: 'https://juliettengum.github.io/juliette-note-taker/',
    repoLink: 'https://github.com/juliettengum/juliette-note-taker'
  },

  {
    title: 'E-commerce Back End',
    description: 'A back-end application for an e-commerce site, providing functionalities like product management, category management, and order processing.',
    image: '/images/e-commerce.png', 
    deployedLink: 'https://juliettengum.github.io/juliette-E-commerce-Back-End/',
    walkthroughvideo: 'https://drive.google.com/file/d/1HY41LKHOHdQ8naEtNXMs4Pg_u9qs2uwv/view?usp=drive_link',
    repoLink: 'https://github.com/juliettengum/juliette-E-commerce-Back-End'
  },

  {
    title: 'README.md Generator',
    description: 'A command-line application that dynamically generates a professional README.md file from a user\'s input using Node.js.',
    image: '/images/readme-generator.png', 
    deployedLink:"https://juliettengum.github.io/juliette-README.md-generator/",
    walkthroughvideo: 'https://github.com/juliettengum/juliette-README.md-generator/raw/main/walkthroughvideo.mp4',
    repoLink: 'https://github.com/juliettengum/juliette-README.md-generator'
  },
  
];

const Portfolio = () => {
  return (
    <div className="container mt-5">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="btn-primary">View App</a>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">View Repo</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
