import React from 'react'
import './navbar.css'

import Logo from '../../assets/logo.png'

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-white sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#hero">
                  <img src={Logo} alt="" className="img-fluid"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="#home">Home</a>
                      </li>  
                      <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                      </li>  
                      <li className="nav-item">
                        <a className="nav-link" href="#portafolio">Portfolio</a>
                      </li>  
                      <li className="nav-item">
                        <a className="nav-link" href="#team">Team</a>
                      </li> 
                      <li className="nav-item">
                        <a className="nav-link" href="#pricing">Pricing</a>
                      </li>  
                      <li className="nav-item">
                        <a className="nav-link" href="#reviews">Reviews</a>
                      </li>  
                      <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                      </li>  
                  </ul>
                  <a href="#contact" className='btn btn-brand ms-lg-3'>Get Started</a>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
