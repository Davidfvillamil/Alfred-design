import React from 'react'

import Portafolio1 from '../../assets/portafolio1.jpg'
import Portafolio2 from '../../assets/portafolio2.jpg'
import Portafolio3 from '../../assets/portafolio3.jpg'
import Portafolio4 from '../../assets/portafolio4.jpg'
import Portafolio5 from '../../assets/portafolio5.jpg'
import Portafolio6 from '../../assets/portafolio6.jpg'


import { FaSearch } from "react-icons/fa";

import './portafolio.css'

function Portafolio() {
  return (
    <section id='portafolio' className='section-padding'>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="section-title">
                        <h1 className="display-3">Our Portafolio</h1>
                        <div className="line"></div>
                        <p>Empower your brand with our limitless design service. Experience creativity that brings your vision to life, beyond imagination</p>
                    </div>
                </div>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="portafolio-item image-zoom">
                  <div className="image-zoom-wrapper">
                    <img src={Portafolio1} alt="imagen de portafolio 1" className='img-portafolio'/>
                  </div>
                  <a href={Portafolio1} data-fancybox="gallery" className='iconbox'><FaSearch /></a>
                </div>

                <div className="portafolio-item image-zoom mt-4">
                  <div className="image-zoom-wrapper">
                    <img src={Portafolio3} alt="imagen de portafolio 1" className='img-portafolio'/>
                  </div>
                  <a href={Portafolio1} data-fancybox="gallery" className='iconbox'><FaSearch /></a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="portafolio-item image-zoom">
                  <div className="image-zoom-wrapper">
                    <img src={Portafolio4} alt="imagen de portafolio 1" className='img-portafolio'/>
                  </div>
                  <a href={Portafolio4} data-fancybox="gallery" className='iconbox'><FaSearch /></a>
                </div>

                <div className="portafolio-item image-zoom mt-4">
                  <div className="image-zoom-wrapper">
                    <img src={Portafolio2} alt="imagen de portafolio 1" className='img-portafolio'/>
                  </div>
                  <a href={Portafolio2} data-fancybox="gallery" className='iconbox'><FaSearch /></a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="portafolio-item image-zoom">
                  <div className="image-zoom-wrapper">
                    <img src={Portafolio6} alt="imagen de portafolio 1" className='img-portafolio'/>
                  </div>
                  <a href={Portafolio6} data-fancybox="gallery" className='iconbox'><FaSearch /></a>
                </div>

                <div className="portafolio-item image-zoom mt-4">
                  <div className="image-zoom-wrapper">
                    <img src={Portafolio5} alt="imagen de portafolio 1" className='img-portafolio'/>
                  </div>
                  <a href={Portafolio5} data-fancybox="gallery" className='iconbox'><FaSearch /></a>
                </div>
              </div>


            </div>
        </div>
    </section>
  )
}

export default Portafolio
