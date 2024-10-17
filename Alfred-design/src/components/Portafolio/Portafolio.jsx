import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación

import Portafolio1 from '../../assets/diseno1.png';
import Portafolio2 from '../../assets/diseno4.png';
import Portafolio3 from '../../assets/diseno7.png';
import Portafolio4 from '../../assets/diseno6.png';
import Portafolio5 from '../../assets/diseno8.png';
import Portafolio6 from '../../assets/diseno2.png';
import mobile_UxUi from '../../assets/mobile_uxui.png'
import desk_uxui from '../../assets/Desk_uxui.png'
import deck from '../../assets/corporate_design.png'

import { FaSearch } from "react-icons/fa";

import './portafolio.css';

function Portafolio() {
  return (
    <section id='portafolio' className='section-padding'>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title">
              <h1 className="display-3">Our Portfolio</h1>
              <div className="line"></div>
              <p>Dive into a showcase of our best work, where creativity meets excellence. Discover how we've transformed visions into impactful designs.</p>
            </div>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-md-4">
            <div className="portafolio-item image-zoom">
              <div className="image-zoom-wrapper">
                <img src={mobile_UxUi} alt="imagen de portafolio 1" className='img-portafolio'/>
                {/* Overlay con el texto */}
                <div className="overlay">
                  <Link to='/ux_ui_mobile'>
                    <div className="overlay-text">Mobile UX/UI</div>
                  </Link>
                </div>
              </div>
              
            </div>

            <div className="portafolio-item image-zoom mt-4">
              <div className="image-zoom-wrapper">
                <img src={deck} alt="imagen de portafolio 3" className='img-portafolio image-adjusted'/>
                {/* Overlay con el texto */}
                <div className="overlay">
                  <Link to='/corporate-design'>
                    <div className="overlay-text">Corporate Design</div>
                  </Link>
                </div>
              </div>
              
            </div>
          </div>

          <div className="col-md-4">
            <div className="portafolio-item image-zoom">
              <div className="image-zoom-wrapper">
                <img src={desk_uxui} alt="imagen de portafolio 4" className='img-portafolio image-adjusted'/>
                {/* Overlay con el texto */}
                <div className="overlay">
                  <Link to='/trabajos-hechos'>
                    <div className="overlay-text">Desktop UX/UI</div>
                  </Link>
                </div>
              </div>
              
            </div>

            <div className="portafolio-item image-zoom mt-4">
              <div className="image-zoom-wrapper">
                <img src={Portafolio1} alt="imagen de portafolio 2" className='img-portafolio'/>
                {/* Overlay con el texto */}
                <div className="overlay">
                  <div className="overlay-text">Merchandise Design</div>
                </div>
              </div>
              
            </div>
          </div>

          <div className="col-md-4">
            <div className="portafolio-item image-zoom">
              <div className="image-zoom-wrapper">
                <img src={Portafolio6} alt="imagen de portafolio 6" className='img-portafolio'/>
                {/* Overlay con el texto */}
                <div className="overlay">
                  <div className="overlay-text">Branding</div>
                </div>
              </div>
              
            </div>

            <div className="portafolio-item image-zoom mt-4">
              <div className="image-zoom-wrapper">
                <img src={Portafolio5} alt="imagen de portafolio 5" className='img-portafolio image-adjusted'/>
                {/* Overlay con el texto */}
                <div className="overlay">
                  <div className="overlay-text">Video Editing</div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Botón para redirigir a Trabajos Hechos */}
        <div className="row">
          <div className="col-12 text-center mt-5">
            <Link to="/trabajos-hechos" className="btn btn-primary">Check out portfolio</Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Portafolio;


