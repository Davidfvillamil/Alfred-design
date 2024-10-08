

import React, { useState } from 'react';
import './TrabajosHechos.css';
import Imagen from '../../assets/home.jpg';
import Colibri1 from '../../assets/Imágenes Alfred/images/colibri1.jpg';
import Colibri2 from '../../assets/Imágenes Alfred/images/colibri2.jpg';
import Colibri3 from '../../assets/Imágenes Alfred/images/colibri3.jpg';
import Colibri4 from '../../assets/Imágenes Alfred/images/colibri4.jpg';
import Colibri5 from '../../assets/Imágenes Alfred/images/colibri5.jpg';
import Colibri6 from '../../assets/Imágenes Alfred/images/colibri6.jpg';
import Colibri7 from '../../assets/Imágenes Alfred/images/diseno5.jpg';
import Colibri8 from '../../assets/Imágenes Alfred/images/colibri8.jpg';
import UxUi1 from '../../assets/Imágenes Alfred/images/uxui1.jpg'
import UxUi2 from '../../assets/Imágenes Alfred/images/uxui2.jpg'
import UxUi3 from '../../assets/Imágenes Alfred/images/uxui3.jpg'
import UxUi4 from '../../assets/Imágenes Alfred/images/uxui4.jpg'
import UxUi5 from '../../assets/Imágenes Alfred/images/uxui5.jpg'
import UxUi6 from '../../assets/Imágenes Alfred/images/uxui6.jpg'
import UxUi7 from '../../assets/Imágenes Alfred/images/uxui7.jpg'
import UxUi8 from '../../assets/Imágenes Alfred/images/uxui8.jpg'
import UxUi9 from '../../assets/Imágenes Alfred/images/uxui9.jpg'
import UxUi10 from '../../assets/Imágenes Alfred/images/uxui10.jpg'
import UxUi11 from '../../assets/Imágenes Alfred/images/uxui11.jpg'
import UxUi12 from '../../assets/Imágenes Alfred/images/uxui12.jpg'
import UxUi13 from '../../assets/Imágenes Alfred/images/uxui13.jpg'
import UxUi14 from '../../assets/Imágenes Alfred/images/uxui14.jpg'
import UxUi15 from '../../assets/Imágenes Alfred/images/uxui15.jpg'
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
import Navbar from '../Navbar/navbar' // Importamos el componente del Navbar

function TrabajosHechos() {

  const Images = [
    {src:Colibri1, description: 'Brand Design'},
    {src:Colibri2, description: 'Merchandise design '},
    {src:Colibri3, description: 'Merchandise design ',},
    {src:Colibri4, description: 'Merchandise design ', },
    {src:Colibri5, description: 'Merchandise design ',},
    {src:Colibri6, description: 'Merchandise design ', },
    {src:Colibri7, description: 'Brand Design',},
    {src:Colibri8, description: 'Packaging Design',},
    {src:UxUi1, description: 'Ux/Ui',},
    {src:UxUi2, description: 'Ux/Ui',},
    {src:UxUi3, description: 'Ux/Ui',},
    {src:UxUi4, description: 'Ux/Ui', },
    {src:UxUi5, description: 'Ux/Ui', },
    {src:UxUi6, description: 'Ux/Ui', },
    {src:UxUi7, description: 'Ux/Ui', },
    {src:UxUi8, description: 'Ux/Ui',},
    {src:UxUi9, description: 'Ux/Ui',},
    {src:UxUi10, description: 'Ux/Ui',},
    {src:UxUi11, description: 'Ux/Ui',},
    {src:UxUi12, description: 'Ux/Ui',},
    {src:UxUi13, description: 'Ux/Ui',},
    {src:UxUi14, description: 'Ux/Ui',},
    {src:UxUi15, description: 'Ux/Ui',},
    {src:AAW1, description: 'Brand Design',},
    {src:AAW2, description: 'Infographic Design',},
    {src:AAW3, description: 'Merchandise design'},
    {src:AAW4, description: 'Merchandise design'},
    {src:AAW5, description: 'Merchandise design'},
    {src:AAW6,description: 'Merchandise design'},
    {src:HappyBerry1, description: 'Packaging Design'},
    {src:HappyBerry2, description: 'Brand Design'},
    {src:HappyBerry3, description: 'Brand Design'},
    {src:HappyBerry4, description: 'Packaging Design'},
    {src:HappyBerry5, description: 'Packaging Design'},
    {src:HappyBerry6, description: 'Packaging Design'},
    {src:HappyBerry7, description: 'Packaging Design'}
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
                    <h5>{image.description}</h5>
                    <p>{image.brand}</p>
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



