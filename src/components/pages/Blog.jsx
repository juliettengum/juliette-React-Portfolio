// src/components/pages/Blog.jsx
import React from 'react';
import './Blog.css';

const blogPosts = [
  {
    title: 'Understanding React Hooks',
    date: 'January 1, 2024',
    content: 'In this post, we explore the power of React Hooks and how they can be used to manage state and side effects in functional components...'
  },
  {
    title: 'A Guide to CSS Flexbox',
    date: 'February 15, 2024',
    content: 'CSS Flexbox is a powerful layout module that allows you to create flexible and responsive layouts with ease. In this guide, we cover the basics of Flexbox and provide examples...'
  },
  {
    title: 'Building a RESTful API with Node.js',
    date: 'March 10, 2024',
    content: 'Creating a RESTful API with Node.js is a fundamental skill for modern web developers. In this tutorial, we walk through the process of building a simple API using Express...'
  },
  {
    title: 'Developing a NoteTaker App',
    date: 'April 5, 2024',
    content: 'In this article, I discuss the development of my NoteTaker app, which allows users to create, save, and delete notes seamlessly. The app is built using Express.js for the back end and React for the front end. The main features include creating notes, storing them in a database, and retrieving them for later use...'
  },
  {
    title: 'Creating an E-Commerce App',
    date: 'May 20, 2024',
    content: 'This post covers the creation of my E-Commerce app. The app features a complete shopping experience, including product listings, a shopping cart, and checkout functionality. Built with React for the front end and Node.js with Express.js for the back end, the app integrates with a PostgreSQL database to manage product data and user orders...'
  },
  {
    title: 'Launching the OfficeBreakRoom App',
    date: 'June 30, 2024',
    content: 'My OfficeBreakRoom app is designed to help employees manage their breaks and office interactions. The app includes features such as a break scheduler, chat rooms, and activity tracking. It was developed using the MERN stack (MongoDB, Express.js, React, Node.js) to ensure a robust and scalable solution. In this article, I share the development process and the challenges faced...'
  }
];

const Blog = () => {
  return (
    <div className="container mt-5">
      <h2>Blog</h2>
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-post">
          <h3>{post.title}</h3>
          <p className="blog-date">{post.date}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
