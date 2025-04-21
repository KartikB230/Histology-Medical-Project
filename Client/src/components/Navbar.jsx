import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ scrollToFooter }) => {
  const navigate = useNavigate();

  const handleFeaturesClick = () => {
    navigate('/home'); // Navigate to Home page
    setTimeout(() => {
      // Scroll to the carousel after a slight delay to allow the page to render
      const carouselElement = document.getElementById('carousel'); // Assuming your carousel has this ID
      if (carouselElement) {
        carouselElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Delay to ensure the page has loaded
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: 'white', fontSize: '28px' }}>
          <strong>HistoMatix</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home" style={{ color: 'white', fontSize: '20px' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={scrollToFooter} className="nav-link" to="/home" style={{ color: 'white', fontSize: '20px' }}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a onClick={handleFeaturesClick} className="nav-link" style={{ color: 'white', fontSize: '20px', cursor : 'pointer'  }}>
                Features
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Trial" style={{ color: 'white', fontSize: '20px'}}>
                Learning
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
