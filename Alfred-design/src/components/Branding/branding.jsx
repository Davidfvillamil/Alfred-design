import { Link } from 'react-router-dom';
import React from 'react';
import './branding.css';

import BrandingExample1 from '../../assets/HappyBerry1.jpg'; // Change this to your example image 1
import BrandingExample2 from '../../assets/DulceColibri1.jpg'; // Change this to your example image 2

import Navbar from '../Navbar/navbar';

function Branding() {
  const brandingExamples = [
    {
      src: BrandingExample1,
      title: 'Branding Example 1',
      link: '/happyberry', // Adjust the link as needed
    },
    {
      src: BrandingExample2,
      title: 'Branding Example 2',
      link: '/dulce-colibri', // Adjust the link as needed
    },
  ];

  return (
    <>
      <Navbar />
      <section id='branding' className='section-padding'>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title">
                <h1 className="display-3">Our Branding Projects</h1>
                <div className="line"></div>
                <p>Take a look at some of the brands we've developed, where every detail counts.</p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {brandingExamples.map((example, index) => (
              <div className="col-md-6 branding-link" key={index}>
                <div className="branding-item image-zoom">
                  <div className="image-zoom-wrapper">
                    <Link to={example.link}>
                      <img src={example.src} className='img-branding' alt={example.title} />
                      <div className="overlay">
                        <div className="overlay-text">
                          {example.title}
                        </div>
                      </div>
                    </Link>
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

export default Branding;


