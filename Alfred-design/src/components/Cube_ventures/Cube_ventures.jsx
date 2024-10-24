import React, { useState } from 'react';
import './cube_ventures.css'; // Archivo de estilos exclusivo para Cube Ventures

import image1 from '../../assets/cube_ventures.jpeg';
import image2 from '../../assets/cube_ventures2.jpeg';
import image3 from '../../assets/cube_ventures3.jpeg';

import Navbar from '../Navbar/navbar'; // Importamos el Navbar

function CubeVentures() {
  const images = [image1, image2, image3];
  
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
                <h1 className="display-3">Cube Ventures</h1>
                <div className="line"></div>
                <p>Discover the creative work behind Cube Ventures, where design and innovation meet to shape the future of startups.</p>
              </div>
            </div>
          </div>

          {/* Galería de imágenes */}
          <div className="row g-4">
            {images.map((image, index) => (
              <div className="col-md-4" key={index}>
                <div className="image-zoom">
                  <div className="image-zoom-wrapper">
                    {/* Al hacer click, se abre el modal */}
                    <img 
                      src={image} 
                      className="img-trabajo" 
                      alt={`Cube Ventures ${index + 1}`} 
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
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span> {/* Botón para cerrar el modal */}
            <img src={selectedImage} alt="Selected Piece" className="modal-img"/>
          </div>
        </div>
      )}
    </>
  );
}

export default CubeVentures;



