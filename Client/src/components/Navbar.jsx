import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ scrollToCarousel }) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: 'white', fontSize: '28px' }}>
          <strong>SymbiAnatomy.</strong>
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
              <Link className="nav-link active" aria-current="page" to="/home" style={{ color: 'white', fontSize: '20px' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link onClick={scrollToCarousel} className="nav-link" to="/home" style={{ color: 'white', fontSize: '20px' }}>Features</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ 'color': 'white', 'fontSize': '20px' }}>Contact</a>
            </li>
            <li class="nav-item">
            <Link onClick={scrollToCarousel} className="nav-link" to="/Trial" style={{ color: 'white', fontSize: '20px' }}>Learning</Link>
            </li>

            </ul>
          </div>

        </div>
      </nav>

    </>
  )
}

export default Navbar