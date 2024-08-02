import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          
          // The ternary operator here checks if the current page is 'Home'.
          // If it is, the className will be 'nav-link active', highlighting the active tab.
          // Otherwise, it will just be 'nav-link'.
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          
          // The ternary operator here checks if the current page is 'About'.
          // If it is, the className will be 'nav-link active', highlighting the active tab.
          // Otherwise, it will just be 'nav-link'.
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          
          // The ternary operator here checks if the current page is 'Portfolio'.
          // If it is, the className will be 'nav-link active', highlighting the active tab.
          // Otherwise, it will just be 'nav-link'.
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          
          // The ternary operator here checks if the current page is 'Blog'.
          // If it is, the className will be 'nav-link active', highlighting the active tab.
          // Otherwise, it will just be 'nav-link'.
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          
          // The ternary operator here checks if the current page is 'Contact'.
          // If it is, the className will be 'nav-link active', highlighting the active tab.
          // Otherwise, it will just be 'nav-link'.
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          
          // The ternary operator here checks if the current page is 'Resume'.
          // If it is, the className will be 'nav-link active', highlighting the active tab.
          // Otherwise, it will just be 'nav-link'.
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
