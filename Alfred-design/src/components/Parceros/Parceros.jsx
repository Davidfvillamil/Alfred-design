import React, { useState } from 'react';
import './parceros.css'; // Archivo de estilos exclusivo para Parceros

import image1 from '../../assets/parceros.jpeg';
import image2 from '../../assets/parceros1.jpeg';
import image3 from '../../assets/parceros2.jpeg';
import image4 from '../../assets/parceros3.jpeg';
import image5 from '../../assets/parceros4.jpeg';

import Navbar from '../Navbar/navbar'; // Importamos el Navbar

function Parceros() {
  const images = [image1, image2, image3, image4, image5];

  // Estado para manejar el modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Función para abrir el modal
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Navbar /> {/* Incluimos el Navbar en la página */}
      <section className='section-padding'>
        <div className="container">
          {/* Título */}
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title">
                <h1 className="display-3">Parceros</h1>
                <div className="line"></div>
                <p>Discover the creative work behind Parceros, where collaboration and innovation thrive.</p>
              </div>
            </div>
          </div>

          {/* Galería de imágenes */}
          <div className="row g-4">
            {images.map((image, index) => (
              <div className="col-md-4" key={index}>
                <div className=" image-zoom">
                  <div className="image-zoom-wrapper">
                    {/* Al hacer click, se abre el modal */}
                    <img
                      src={image}
                      className="img-trabajo"
                      alt={`Parceros ${index + 1}`}
                      onClick={() => openModal(image)}
                    />
                    <div className="overlay">
                      <div className="overlay-text">Piece {index + 1}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Selected Piece" className="modal-img" />
          </div>
        </div>
      )}
    </>
  );
}

export default Parceros;


