import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './navbar.css';
import Logo from '../../assets/logo.png';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (e, target) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/'); // Redirige a la página de inicio
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Espera para que la página se cargue antes de hacer scroll
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white sticky-top" id="navbar">
        <div className="container">
          <a className="navbar-brand" href="#hero" onClick={(e) => handleNavigation(e, 'hero')}>
            <img src={Logo} alt="" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home" onClick={(e) => handleNavigation(e, 'hero')}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={(e) => handleNavigation(e, 'about')}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portafolio" onClick={(e) => handleNavigation(e, 'portafolio')}>Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team" onClick={(e) => handleNavigation(e, 'team')}>Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing" onClick={(e) => handleNavigation(e, 'pricing')}>Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#reviews" onClick={(e) => handleNavigation(e, 'reviews')}>Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={(e) => handleNavigation(e, 'contact')}>Contact</a>
              </li>
            </ul>
            <a href="#contact" className="btn btn-brand ms-lg-3" onClick={(e) => handleNavigation(e, 'contact')}>Get Started for free</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

