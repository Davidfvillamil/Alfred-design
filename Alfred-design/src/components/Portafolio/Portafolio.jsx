import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación

import Portafolio1 from '../../assets/diseno1.png';
import Social_media from '../../assets/social_media.png';
import Portafolio5 from '../../assets/diseno8.png';
import Portafolio6 from '../../assets/diseno2.png';
import mobile_UxUi from '../../assets/uxui_mobile.mp4'; // Este es el archivo de video
import desk_uxui from '../../assets/Desk_uxui.png';
import deck from '../../assets/corporate_design.png';

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
                {/* Video sin controles y con atributos para autoplay, loop y muted */}
                <video src={mobile_UxUi} className='img-portafolio' muted autoPlay loop playsInline>
                  Tu navegador no soporta videos.
                </video>
                {/* Overlay con el texto */}
                <div className="overlay">
                  <Link to='/ux_ui_mobile' className='text-link'>
                    <div className="overlay-text">Mobile UX/UI</div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="portafolio-item image-zoom mt-4">
              <div className="image-zoom-wrapper">
                <img src={deck} alt="imagen de portafolio 3" className='img-portafolio image-adjusted' />
                {/* Overlay con el texto */}
                <div className="overlay">
                  <Link to='/corporate-design' className='text-link'>
                    <div className="overlay-text">Corporate Design</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="portafolio-item image-zoom">
              <div className="image-zoom-wrapper">
                <img src={desk_uxui} alt="imagen de portafolio 4" className='img-portafolio image-adjusted' />
                {/* Overlay con el texto */}
                <div className="overlay">
                  <Link to='/trabajos-hechos' className='text-link'>
                    <div className="overlay-text">Desktop UX/UI</div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="portafolio-item image-zoom mt-4">
              <div className="image-zoom-wrapper">
                <img src={Social_media} alt="imagen de portafolio 2" className='img-portafolio' />
                {/* Overlay con el texto */}
                <div className="overlay">
                  <Link to='/social-media' className='text-link'>
                    <div className="overlay-text">Social Media content</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="portafolio-item image-zoom">
              <div className="image-zoom-wrapper">
                <img src={Portafolio6} alt="imagen de portafolio 6" className='img-portafolio' />
                {/* Overlay con el texto */}
                <div className="overlay">
                  <Link to='/branding' className='text-link'>
                    <div className="overlay-text">Branding</div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="portafolio-item image-zoom mt-4">
              <div className="image-zoom-wrapper">
                <img src={Portafolio5} alt="imagen de portafolio 5" className='img-portafolio image-adjusted' />
                {/* Overlay con el texto */}
                <div className="overlay">
                  <div className="overlay-text">Video Editing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portafolio;



