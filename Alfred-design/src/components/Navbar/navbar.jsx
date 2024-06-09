import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-white stick-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                  Alfred-Design
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
                        <a className="nav-link" href="#portafolio">Portafolio</a>
                      </li>  
                      <li className="nav-item">
                        <a className="nav-link" href="#team">Team</a>
                      </li>  
                      <li className="nav-item">
                        <a className="nav-link" href="#reviews">Reviws</a>
                      </li>  
                      <li className="nav-item">
                        <a className="nav-link" href="#cotact">Contact</a>
                      </li>  
                  </ul>
                  <a href="" className='btn btn-brand ms-lg-3'>Get Started</a>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
