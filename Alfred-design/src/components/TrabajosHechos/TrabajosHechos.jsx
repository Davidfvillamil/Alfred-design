
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './TrabajosHechos.css';
import Imagen from '../../assets/home.jpg';
import Colibri1 from '../../assets/Imágenes Alfred/images/colibri1.jpg';
import Colibri2 from '../../assets/Imágenes Alfred/images/colibri2.jpg';
import Colibri3 from '../../assets/Imágenes Alfred/images/colibri3.jpg';
import Colibri4 from '../../assets/Imágenes Alfred/images/colibri4.jpg';
import Colibri5 from '../../assets/Imágenes Alfred/images/colibri5.jpg';
import Colibri6 from '../../assets/Imágenes Alfred/images/colibri6.jpg';
import Colombian_1 from '../../assets/Colombian_army_1.png';

import Navbar from '../Navbar/navbar' // Importamos el componente del Navbar

function TrabajosHechos() {

  const Images = [
    {src:Colombian_1, description: 'Colombian Army learning platform'},
    {src:Colibri2, description: 'Merchandise design '},
    {src:Colibri3, description: 'Merchandise design ',},
    {src:Colibri4, description: 'Merchandise design ', },
    {src:Colibri5, description: 'Merchandise design ',},
    {src:Colibri6, description: 'Merchandise design ', }, 
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
                <h1 className="display-3">Our Completed Projects</h1>
                <div className="line"></div>
                <p>Explore the diverse range of projects we've completed, showcasing our creativity and dedication to quality design.</p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            
          {Images.map((image) => (
              <div className="col-md-4">
                <Link to="/colombian-army">
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



