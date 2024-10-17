
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './ux_ui_mobile.css';

import Ruby_0 from '../../assets/Ruby_0.png';
import Ruby_1 from '../../assets/Ruby_1.png';
import Nutrarte from '../../assets/nutrarte_mobile_portada.png'
import Ruby_3 from '../../assets/rmd_1.png';

import Navbar from '../Navbar/navbar' // Importamos el componente del Navbar

function Uxui_mobile() {

  const Images = [
    {src:Ruby_0, description: 'Hiring platform', link:'/Ruby'},
    {src:Nutrarte, description: 'Nutratere: Health and Wellness', link:'/nutrarte-mobile'},
    {src:Ruby_3, description: '3D renderings for real estate sales.', link:'/rmd-mobile'},
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
      <section id='ux_ui_mobile' className='section-padding'>
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
              <div className="col-md-4 acceso-link" key={image.description}>
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

export default Uxui_mobile;