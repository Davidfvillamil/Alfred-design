
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './TrabajosHechos.css';

import Colombian_1 from '../../assets/Colombian_army_1.png';
import nutrarte_1 from '../../assets/nutrarte_1.png'
import Rmd_1 from '../../assets/rmd_1.png';

import Navbar from '../Navbar/navbar' // Importamos el componente del Navbar

function TrabajosHechos() {

  const Images = [
    {src:Colombian_1, description: 'Colombian Army learning platform', link:'/colombian-army'},
    {src:nutrarte_1, description: 'Nutratere: Health and Wellness', link:'/nutrarte'},
    {src:Rmd_1, description: '3D renderings for real estate sales.', link:'/rmd'},
  ]
  

  const [modalImage, setModalImage] = useState(null);

  // Función para abrir el modal con la imagen seleccionada
  const openModal = (image) => {
    setModalImage(image);
    // Oculta el navbar al abrir el modal
    document.querySelector('.navbar').style.display = 'none';
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalImage(null);
    // Vuelve a mostrar el navbar al cerrar el modal
    document.querySelector('.navbar').style.display = 'flex';
  };

  return (
    <>
      <Navbar /> {/* Incluimos el Navbar en la página */}
      <section id='trabajos-hechos' className='section-padding'>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title">
                <h1 className="display-3">Our Completed UX/UI Projects</h1>
                <div className="line"></div>
                <p>Explore the diverse range of projects we've completed, showcasing our creativity and dedication to quality design.</p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            
          {Images.map((image) => (
              <div className="col-md-4 acceso-link">
                <Link to={image.link}>
                  <div className="trabajo-item image-zoom">
                    <div className="image-zoom-wrapper">
                      <img src={image.src} className='img-trabajo' />
                    </div>
                    <div className="trabajo-details">
                      <h5>{image.description}</h5>
                      <p>{image.brand}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }

          </div>
        </div>

        {/* Modal para mostrar la imagen en pantalla completa */}
        {modalImage && (
          <div className="modal" onClick={closeModal}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img className="modal-content" src={modalImage} alt="Imagen ampliada" />
          </div>
        )}
      </section>
    </>
  );
}

export default TrabajosHechos;



