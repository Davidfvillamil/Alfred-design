import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/navbar'; // Importamos el componente del Navbar
import Nutrarte_mobile_1 from '../../assets/nutrarte_mobile_1.png';
import Nutrarte_mobile_2 from '../../assets/nutrarte_mobile_2.png';
import Nutrarte_mobile_3 from '../../assets/nutrarte_mobile_3.png';
import Nutrarte_mobile_4 from '../../assets/nutrarte_mobile_4.png';
import Nutrarte_mobile_5 from '../../assets/nutrarte_mobile_5.png';
import Nutrarte_mobile_portada from '../../assets/nutrarte_mobile_portada.png';


import ProjectPDF from '../../assets/nutrarte_mobile.pdf'; // Asegúrate de que el PDF esté en esta ruta

function Nutrarte_Mobile() {

  const Images = [
    { src: Nutrarte_mobile_portada},
    { src: Nutrarte_mobile_1},
    { src: Nutrarte_mobile_2},
    { src: Nutrarte_mobile_3},
    { src: Nutrarte_mobile_4},
    { src: Nutrarte_mobile_5},
  ];

  return (
    <>
      <Navbar /> {/* Incluimos el Navbar */}
      <section id='nutrarte-mobile' className='section-padding'>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title">
                <h1 className="display-3">Nutratere: Health and Wellness</h1>
                <div className="line"></div>
                <p>Nutratere is a health and wellness company that combines science, technology, and nutrition to prevent, treat, and reverse diseases naturally, without the need for medications. We empower individuals to achieve optimal health through innovative, non-invasive solutions.</p>
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
                    <img src={Images[4].src} className='img-trabajo' alt="Project 4" />
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

export default Nutrarte_Mobile;
