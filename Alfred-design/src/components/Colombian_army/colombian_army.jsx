import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/navbar'; // Importamos el componente del Navbar
import Colombian_1 from '../../assets/Colombian_army_1.png';
import Colombian_2 from '../../assets/Colombian_army_2.png';
import Colombian_3 from '../../assets/Colombian_army_3.png';
import Colombian_4 from '../../assets/Colombian_army_4.png';
import ProjectPDF from '../../assets/Colombian_army_doc.pdf'; // Asegúrate de que el PDF esté en esta ruta

function Colombian_army() {

  const Images = [
    { src: Colombian_1 },
    { src: Colombian_2 },
    { src: Colombian_3 },
    { src: Colombian_4 },
  ];

  return (
    <>
      <Navbar /> {/* Incluimos el Navbar */}
      <section id='colombian-army' className='section-padding'>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title">
                <h1 className="display-3">Colombian Army Learning Platform</h1>
                <div className="line"></div>
                <p>The Colombian Navy is developing a practical skills learning platform for its officers. The project involves a registration and course assignment system, as well as a tracking system for officers' grades, allowing real-time monitoring of their progress. This tool enhances training management, ensuring that officers are better prepared for their missions.</p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Primera fila, una imagen centrada más alta */}
            <div className="col-md-12 text-center">
              <Link to="/colombian-army">
                <div className="trabajo-item image-zoom">
                  <div className="image-zoom-wrapper" style={{ height: '600px', overflow: 'hidden' }}>
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
                  <div className="image-zoom-wrapper">
                    <img src={Images[2].src} className='img-trabajo' alt="Project 3" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-12 text-center">
              <Link to="/colombian-army">
                <div className="trabajo-item image-zoom">
                  <div className="image-zoom-wrapper" style={{ height: '600px', overflow: 'hidden' }}>
                    <img src={Images[3].src} className='img-trabajo' alt="Colombian Army Project" />
                  </div>
                </div>
              </Link>
            </div>

          </div>

          {/* Botón para descargar o ver el PDF */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <a href={ProjectPDF} className="btn btn-primary mx-2 mb-4" download="Colombian_army_project.pdf">
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

export default Colombian_army;



