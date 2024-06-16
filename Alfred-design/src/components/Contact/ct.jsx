
import React from 'react'
import { useRef } from 'react';
import './contact.css'

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm('service_bwtt0qe', 'template_oewbjhk', form.current, {
        publicKey: 'kixPAo62u5waeF82w',
      })
      .then(
        () => {
          
          console.log('SUCCESS!');
          console.log('Message sent!')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleClick = () => {
    Swal.fire({
      title: "Email sent",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }

  return (
    <section id='contact' className='section-padding'>
        <div className="container">
          <div className="row">
              <div className="col-12 text-center">
                  <div className="section-title">
                      <h1 className="display-4 fw-semibold text-white">Get in toch</h1>
                      <div className="line bg-white"></div>
                      <p className='text-white'>Empower your brand with our limitless design service. Experience creativity that brings your vision to life, beyond imagination!</p>
                  </div>
              </div>
          </div>  
          <div className="row justify-content-center">
            <div className="col-lg-8">
                <form action="#" className='row g-3 p-lg-5 p-4 bg-white theme-shadow' ref={form} onSubmit={sendEmail}>
                  <div className="form-group col-lg-6">
                    <input type="text"  className='form-control' placeholder='Enter full Name' name="user_name"/>
                  </div>
                  <div className="form-group col-lg-6">
                    <input type="text"  className='form-control' placeholder="Enter company's Name" name='company_name'/>
                  </div>
                  <div className="form-group col-lg-12">
                    <input type="email"  className='form-control' placeholder='Enter email' name="user_email"/>
                  </div>
                  <div className="form-group col-lg-12">
                    <select id="options" name="options" className="form-group col-lg-12" placeholder = "prefered option">
                        <option value="opcion_990_USD">I'm intered on the 990 USD plan</option>
                        <option value="opcion_1500_USD">I'm intered on the 1500 USD plan</option>
                        <option value="opcion_2400_USD">I'm intered on the 2400 USD plan</option>
                    </select>
                  </div>
                  <div className="form-group col-lg-12">
                    <textarea name="message" rows='5' className='form-control' placeholder='Do you want to know somenthing specific? Tell us!' ></textarea>
                  </div>
                  <div className="form-group col-lg-12 d-grid">
                    <button className='btn btn-brand' value="Send" onClick={handleClick}>Send Message</button>
                  </div>
                </form>
                
            </div>
            
          </div>
        </div>
    </section>
  )
}

export default Contact
