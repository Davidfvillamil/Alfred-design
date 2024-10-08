
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
                      <h1 className="display-3 text-white">Get started here!</h1>
                      <div className="line bg-white"></div>
                      <p className='text-white'>If you'd like to try our services, simply leave us a message saying 'I want a free sample!' and we'll get back to you. You'll get a firsthand look at the quality of our work. Let us know which plan interests you, or feel free to ask any questions</p>
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
                    <input type="Phone"  className='form-control' placeholder='Enter your phone number' name="user_phone"/>
                  </div>
                  <div className="form-group col-lg-12">
                    <select id="options" name="options" className="form-group col-lg-12 select-element" placeholder = "prefered option">
                        <option value="opcion_890_USD">I'm interested in the Alfred do it plan  (900 USD/month plan billed anually)</option>
                        <option value="opcion_1670_USD">I'm interested in the Alfred Crush it Plan  (1800 USD/month plan billed anually)</option>
                        <option value="opcion_2900_USD">I'm interested in the Alfred Master it plan (2900 USD/month plan billed anually)</option>
                        <option value="opcion_890_USD">I'm interested in the Alfred do it plan  (1000 USD/month plan billed monthly)</option>
                        <option value="opcion_1670_USD">I'm interested in the Alfred Crush it Plan  (2000 USD/month plan billed monthly)</option>
                        <option value="opcion_2900_USD">I'm interested in the Alfred Master it plan (3500 USD/month plan billed monthly)</option>
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
