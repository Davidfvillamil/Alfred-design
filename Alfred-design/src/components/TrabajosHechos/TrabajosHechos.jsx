import React, { useState } from 'react';
import './TrabajosHechos.css';
import Imagen from '../../assets/home.jpg';
import Colibri1 from '../../assets/Imágenes Alfred/Dulce Colibri╠ü/colibri1.jpg';
import Colibri2 from '../../assets/Imágenes Alfred/Dulce Colibri╠ü/Colibri2.jpg';
import Colibri3 from '../../assets/Imágenes Alfred/Dulce Colibri╠ü/Colibri3.jpg';
import Colibri4 from '../../assets/Imágenes Alfred/Dulce Colibri╠ü/Colibri4.jpg';
import Colibri5 from '../../assets/Imágenes Alfred/Dulce Colibri╠ü/Colibri5.jpg';
import Colibri6 from '../../assets/Imágenes Alfred/Dulce Colibri╠ü/Colibri6.jpg';
import Colibri7 from '../../assets/Imágenes Alfred/Dulce Colibri╠ü/diseno5.jpg';
import Colibri8 from '../../assets/Imágenes Alfred/Dulce Colibri╠ü/Colibri8.jpg';
import UxUi1 from '../../assets/Imágenes Alfred/2121 Gallery WEB/uxui1.jpg'
import UxUi2 from '../../assets/Imágenes Alfred/2121 Gallery WEB/uxui2.jpg'
import UxUi3 from '../../assets/Imágenes Alfred/2121 Gallery WEB/uxui3.jpg'
import UxUi4 from '../../assets/Imágenes Alfred/2121 Gallery WEB/uxui4.jpg'
import UxUi5 from '../../assets/Imágenes Alfred/2121 Gallery WEB/uxui5.jpg'
import UxUi6 from '../../assets/Imágenes Alfred/2121 Gallery WEB/uxui6.jpg'
import UxUi7 from '../../assets/Imágenes Alfred/2121 Gallery WEB/uxui7.jpg'
import UxUi8 from '../../assets/Imágenes Alfred/2121 Gallery WEB/uxui8.jpg'
import UxUi9 from '../../assets/Imágenes Alfred/2121 Gallery WEB/uxui9.jpg'
import UxUi10 from '../../assets/Imágenes Alfred/2121 Gallery WEB/uxui10.jpg'
import UxUi11 from '../../assets/Imágenes Alfred/2121 Gallery WEB/uxui11.jpg'
import UxUi12 from '../../assets/Imágenes Alfred/2121 Gallery WEB/uxui12.jpg'
import UxUi13 from '../../assets/Imágenes Alfred/2121 Gallery WEB/uxui13.jpg'
import UxUi14 from '../../assets/Imágenes Alfred/2121 Gallery WEB/uxui14.jpg'
import UxUi15 from '../../assets/Imágenes Alfred/2121 Gallery WEB/uxui15.jpg'
import AAW1 from '../../assets/Imágenes Alfred/images/AAW1.jpg'
import AAW2 from '../../assets/Imágenes Alfred/images/AAW2.jpg'
import AAW3 from '../../assets/Imágenes Alfred/images/AAW3.jpg'
import AAW4 from '../../assets/Imágenes Alfred/images/AAW4.jpg'
import AAW5 from '../../assets/Imágenes Alfred/images/AAW5.jpg'
import AAW6 from '../../assets/Imágenes Alfred/images/AAW6.jpg'
import HappyBerry1 from '../../assets/Imágenes Alfred/images/Hpb1.jpg'
import HappyBerry2 from '../../assets/Imágenes Alfred/images/Hpb2.jpg'
import HappyBerry3 from '../../assets/Imágenes Alfred/images/Hpb3.jpg'
import HappyBerry4 from '../../assets/Imágenes Alfred/images/Hpb4.jpg'
import HappyBerry5 from '../../assets/Imágenes Alfred/images/Hpb5.jpg'
import HappyBerry6 from '../../assets/Imágenes Alfred/images/Hpb6.jpg'
import HappyBerry7 from '../../assets/Imágenes Alfred/images/Hpb7.jpg'
import Navbar from '../Navbar/Navbar'; // Importamos el componente del Navbar

function TrabajosHechos() {

  const Images = [
    {src:Colibri1},{src:Colibri2},{src:Colibri3},{src:Colibri4},{src:Colibri5},{src:Colibri6},{src:Colibri7},{src:Colibri8},{src:UxUi1},{src:UxUi2},{src:UxUi3},{src:UxUi4},{src:UxUi5},{src:UxUi6},{src:UxUi7},{src:UxUi8},{src:UxUi9},{src:UxUi10},{src:UxUi11},{src:UxUi12},{src:UxUi13},{src:UxUi14},{src:UxUi15},{src:AAW1},{src:AAW2},{src:AAW3},{src:AAW4},{src:AAW5},{src:AAW6},{src:HappyBerry1},{src:HappyBerry2},{src:HappyBerry3},{src:HappyBerry4},{src:HappyBerry5},{src:HappyBerry6},{src:HappyBerry7}
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
                <div className="trabajo-item image-zoom" onClick={() => openModal(image.src)}>
                  <div className="image-zoom-wrapper">
                    <img src={image.src} className='img-trabajo' />
                  </div>
                  <div className="trabajo-details">
                    <h5>titulo</h5>
                    <p>titulo</p>
                  </div>
                </div>
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



