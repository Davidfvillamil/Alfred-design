import React, { useState } from 'react'; // Import useState
import './DulceColibri.css';

import HappyBerryImage1 from '../../assets/DulceColibri1.jpg';
import HappyBerryImage2 from '../../assets/DulceColibri2.jpg';
import HappyBerryImage3 from '../../assets/DulceColibri3.jpg';
import HappyBerryImage4 from '../../assets/DulceColibri4.jpg';
import HappyBerryImage5 from '../../assets/DulceColibri5.jpg';
import HappyBerryImage6 from '../../assets/DulceColibri6.jpg';

import Navbar from '../Navbar/navbar';

function DulceColibri() {
  const [modalImage, setModalImage] = useState(null); // State for the modal image
  const [isModalOpen, setModalOpen] = useState(false); // State to open/close the modal

  const moments = [
    { src: HappyBerryImage1 },
    { src: HappyBerryImage2 },
    { src: HappyBerryImage3 },
    { src: HappyBerryImage4 },
    { src: HappyBerryImage5 },
    { src: HappyBerryImage6 },
  ];

  const openModal = (src) => {
    setModalImage(src); // Set the image in state
    setModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal
    setModalImage(null); // Clear the image
  };

  return (
    <>
      <Navbar />
      <section id="dulce-colibri" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title">
                <h1 className="display-3">Dulce Colibri Moments</h1>
                <div className="line"></div>
                <p>Experience the joy of life’s sweetest moments with artisanal pastries, crafted with love and the finest ingredients</p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {moments.map((moment, index) => (
              <div className="col-md-4 happyberry-item" key={index}>
                <div
                  className="image-wrapper contenedor-image-happyberry"
                  onClick={() => openModal(moment.src)} // Open the modal on click
                >
                  <img src={moment.src} className="img-fluid" alt={`Dulce Colibri Moment ${index + 1}`} />
                  <div className="overlay"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal to show the image */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close-button" onClick={closeModal}>✖</span>
          <img src={modalImage} className="modal-content" alt="Modal" />
        </div>
      )}
    </>
  );
}

export default DulceColibri;
