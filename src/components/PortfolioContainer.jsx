
import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './Footer'; // Import the Footer component

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This function determines which page component to render based on the current page state
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home handlePageChange={handlePageChange} />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  // This function updates the current page state to the selected page
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Pass the current page and page change handler to the NavTabs component */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Render the current page component based on the state */}
      <main>{renderPage()}</main>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
}





