import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/navbar'; // Importamos el componente del Navbar
import Rmd_mobile_1 from '../../assets/rmd_mobile_1.png';
import Rmd_mobile_2 from '../../assets/rmd_mobile_2.png';
import Rmd_mobile_3 from '../../assets/rmd_mobile_3.png';
import rmd_mobile_portada from '../../assets/rmd_mobile_portada.png'

import Nutrarte_mobile_portada from '../../assets/nutrarte_mobile_portada.png';
import Ruby_0 from '../../assets/Ruby_0.png';

import ProjectPDF from '../../assets/rmd_mobile.pdf'; // Asegúrate de que el PDF esté en esta ruta

function Rmd_Mobile() {

  const Images = [
    { src: rmd_mobile_portada},
    { src: Rmd_mobile_1},
    { src: Rmd_mobile_2},
    { src: Rmd_mobile_3},
  
  ];

  return (
    <>
      <Navbar /> {/* Incluimos el Navbar */}
      <section id='rmd-mobile' className='section-padding'>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title">
                <h1 className="display-3">RMD: 3D tech</h1>
                <div className="line"></div>
                <p>RMD is a technology that enables an interactive and immersive 3D experience of properties, making it easier for buyers and renters to explore and make decisions.</p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Primera fila, una imagen centrada más alta */}
            <div className="col-md-12 text-center">
              <Link>
                <div className="trabajo-item image-zoom">
                  <div className="image-zoom-wrapper" style={{ height: '600px', overflow: 'hidden' }}>
                    <img src={Images[0].src} className='img-trabajo' alt="Colombian Army Project" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Segunda fila, tres imágenes sin descripción */}
            <div className="col-md-4 text-center">
              <Link>
                <div className="trabajo-item image-zoom">
                  <div className="image-zoom-wrapper" style={{ height: '600px', overflow: 'hidden' }}>
                    <img src={Images[1].src} className='img-trabajo' alt="Project 2" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4 text-center">
              <Link>
                <div className="trabajo-item image-zoom">
                  <div className="image-zoom-wrapper" style={{ height: '600px', overflow: 'hidden' }}>
                    <img src={Images[2].src} className='img-trabajo' alt="Project 3" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4 text-center">
              <Link>
                <div className="trabajo-item image-zoom">
                  <div className="image-zoom-wrapper" style={{ height: '600px', overflow: 'hidden' }}>
                    <img src={Images[3].src} className='img-trabajo' alt="Project 4" />
                  </div>
                </div>
              </Link>
            </div>

            

           
            

          </div>

          

          {/* Botón para descargar o ver el PDF */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <a href={ProjectPDF} className="btn btn-primary mx-2" download="Colombian_army_project.pdf">
                Download PDF
              </a>
              <a href={ProjectPDF} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mx-2">
                View PDF Online
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Rmd_Mobile;