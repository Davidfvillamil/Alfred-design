import { Link } from 'react-router-dom';
import React from 'react';
import './social_media.css';

import CubeVenturesImage from '../../assets/cube_ventures.jpeg'; // Cambia esto por la imagen de Cube Ventures
import ParcerosImage from '../../assets/parceros.jpeg'; // Cambia esto por la imagen de Parceros

import Navbar from '../Navbar/navbar'; // Importamos el componente del Navbar

function Social_media() {
  const Images = [
    {
      src: CubeVenturesImage,
      title: 'Cube Ventures',
      link: '/cube-ventures',
    },
    {
      src: ParcerosImage,
      title: 'Parceros',
      link: '/parceros',
    },
  ];

  return (
    <>
      <Navbar /> {/* Incluimos el Navbar en la página */}
      <section id='social-media' className='section-padding'>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title">
                <h1 className="display-3">Some of our social media pieces</h1>
                <div className="line"></div>
                <p>Explore the diverse range of projects we've completed, showcasing our creativity and dedication to quality design.</p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {Images.map((image, index) => (
              <div className="col-md-6 acceso-link" key={index}>
                <div className="trabajo-item image-zoom">
                  <div className="image-zoom-wrapper">
                    <img src={image.src} className='img-trabajo' alt={image.title} />
                    <div className="overlay">
                      <div className="overlay-text">
                        {image.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>
    </>
  );
}

export default Social_media;




