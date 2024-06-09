import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-white stick-top">
            <div class="container">
                <a class="navbar-brand" href="#">
                  Alfred-Design
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                      <li class="nav-item">
                        <a class="nav-link" href="#home">Home</a>
                      </li>  
                      <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                      </li>  
                      <li class="nav-item">
                        <a class="nav-link" href="#portafolio">Portafolio</a>
                      </li>  
                      <li class="nav-item">
                        <a class="nav-link" href="#team">Team</a>
                      </li>  
                      <li class="nav-item">
                        <a class="nav-link" href="#reviews">Reviws</a>
                      </li>  
                      <li class="nav-item">
                        <a class="nav-link" href="#cotact">Contact</a>
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
