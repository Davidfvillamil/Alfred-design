import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/navbar'; // Importamos el componente del Navbar
import Corporate_design_1 from '../../assets/Aurora_deck_portada.png';
import Corporate_design_2 from '../../assets/Aurora_deck_1.png';
import Corporate_design_3 from '../../assets/Aurora_deck_2.png';
import Corporate_design_4 from '../../assets/Aurora_deck_3.png';
import Corporate_design_5 from '../../assets/corporate_design.png';

import './Corporate_design.css'

import ProjectPDF from '../../assets/Aurora_deck.pdf'; // Asegúrate de que el PDF esté en esta ruta

function Corporate_desing() {

  const Images = [
    { src: Corporate_design_1 },
    { src: Corporate_design_2 },
    { src: Corporate_design_3 },
    { src: Corporate_design_4 },
    { src: Corporate_design_5 },
  ];

  return (
    <>
      <Navbar /> {/* Incluimos el Navbar */}
      <section id='corporate-design' className='section-padding'>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title">
                <h1 className="display-3">Aurora:fractional real state investment</h1>
                <div className="line"></div>
                <p>Aurora is a fractional real estate investment platform that allows individuals to invest in properties in LATAM starting from 300 USD, offering access to opportunities previously available only to large investors. We created their investment deck for the pre-seed round</p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Primera fila, una imagen centrada más alta */}
            <div className="col-md-12 text-center">
              <Link to="/colombian-army">
                <div className="trabajo-item image-zoom">
                  <div className="image-zoom-wrapper portada" >
                    <img src={Images[0].src} className='img-trabajo' alt="Colombian Army Project" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Segunda fila, dos imágenes sin descripción */}
            <div className="col-md-6 text-center">
              <Link to="/colombian-army">
                <div className="trabajo-item image-zoom">
                  <div className="image-zoom-wrapper">
                    <img src={Images[1].src} className='img-trabajo' alt="Project 2" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-6 text-center">
              <Link to="/colombian-army">
                <div className="trabajo-item image-zoom">
                  <div className="image-zoom-wrapper img-portafolio" >
                    <img src={Images[2].src} className='img-trabajo' alt="Project 3" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-6 text-center">
              <Link to="/colombian-army">
                <div className="trabajo-item image-zoom">
                  <div className="image-zoom-wrapper ">
                    <img src={Images[3].src} className='img-trabajo' alt="Project 2" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-6 text-center">
              <Link to="/colombian-army">
                <div className="trabajo-item image-zoom">
                  <div className="image-zoom-wrapper img-portafolio">
                    <img src={Images[4].src} className='img-trabajo' alt="Project 3" />
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
              <a href={ProjectPDF} target="_blank" className="btn btn-secondary mx-2">
                View PDF Online
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Corporate_desing;