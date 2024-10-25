import React, { useState } from 'react'; // Importamos useState
import './happyberry.css';

import HappyBerryImage1 from '../../assets/HappyBerry1.jpg';
import HappyBerryImage2 from '../../assets/HappyBerry2.jpg';
import HappyBerryImage3 from '../../assets/HappyBerry3.jpg';
import HappyBerryImage4 from '../../assets/HappyBerry4.jpg';
import HappyBerryImage5 from '../../assets/HappyBerry5.jpg';
import HappyBerryImage6 from '../../assets/HappyBerry6.jpg';

import Navbar from '../Navbar/navbar';

function HappyBerry() {
  const [modalImage, setModalImage] = useState(null); // Estado para la imagen del modal
  const [isModalOpen, setModalOpen] = useState(false); // Estado para abrir/cerrar el modal

  const moments = [
    { src: HappyBerryImage1 },
    { src: HappyBerryImage2 },
    { src: HappyBerryImage3 },
    { src: HappyBerryImage4 },
    { src: HappyBerryImage5 },
    { src: HappyBerryImage6 },
  ];

  const openModal = (src) => {
    setModalImage(src); // Establece la imagen en el estado
    setModalOpen(true); // Abre el modal
  };

  const closeModal = () => {
    setModalOpen(false); // Cierra el modal
    setModalImage(null); // Limpia la imagen
  };

  return (
    <>
      <Navbar />
      <section id="happyberry" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title">
                <h1 className="display-3">HappyBerry Moments</h1>
                <div className="line"></div>
                <p>Relive happiness in the little moments with fresh berries and frozen yogurt delights.</p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {moments.map((moment, index) => (
              <div className="col-md-4 happyberry-item" key={index}>
                <div
                  className="image-wrapper contenedor-image-happyberry"
                  onClick={() => openModal(moment.src)} // Abre el modal al hacer clic
                >
                  <img src={moment.src} className="img-fluid" alt={`HappyBerry Moment ${index + 1}`} />
                  <div className="overlay"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para mostrar la imagen */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close-button" onClick={closeModal}>✖</span>
          <img src={modalImage} className="modal-content" alt="Modal" />
        </div>
      )}
    </>
  );
}

export default HappyBerry;

