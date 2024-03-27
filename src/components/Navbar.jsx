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
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'white', fontSize: '20px' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link onClick={scrollToCarousel} className="nav-link" to="/" style={{ color: 'white', fontSize: '20px' }}>Features</Link>
            </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ 'color': 'white', 'fontSize': '20px' }}>Contact</a>
              </li>


              <li class="nav-item dropdown">
                <a style={{ 'color': 'white', 'fontSize': '20px' }} class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Learning
                </a>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to='/SquamousEpithelium' style={{ 'color': 'rgb(205, 117, 117)', "cursor": "pointer", 'fontSize': '20px' }}>Squamous Epithelium</Link></li>
                  <li><Link class="dropdown-item" to='/Thyroid' style={{ 'color': 'rgb(205, 117, 117)', "cursor": "pointer", 'fontSize': '20px' }}>Thyroid</Link></li>
                  <li className="dropdown-submenu">
                    <a class="dropdown-item" style={{ 'color': 'rgb(205, 117, 117)', "cursor": "pointer", 'fontSize': '20px' }}>Kidney</a>
                    <ul className="dropdown-menu" >
                      <li ><Link class="dropdown-item" to="/Medulla" style={{ 'color': 'rgb(205, 117, 117)', "cursor": "pointer", 'fontSize': '20px' }}>Medulla</Link></li>
                      <li><Link class="dropdown-item" to="/Cortex" style={{ 'color': 'rgb(205, 117, 117)', "cursor": "pointer", 'fontSize': '20px' }}>Cortex</Link></li>
                    </ul>
                  </li>
                  <li><Link class="dropdown-item" to='/Adrenal' style={{ 'color': 'rgb(205, 117, 117)', "cursor": "pointer", 'fontSize': '20px' }}>Adrenal Gland</Link></li>

                </ul>

              </li>

            </ul>
          </div>

        </div>
      </nav>

    </>
  )
}

export default Navbar