
import React from 'react'
import './contact.css'

function Contact() {
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
                <form action="#" className='row g-3 p-lg-5 p-4 bg-white theme-shadow'>
                  <div className="form-group col-lg-6">
                    <input type="text"  className='form-control' placeholder='Enter full Name'/>
                  </div>
                  <div className="form-group col-lg-6">
                    <input type="text"  className='form-control' placeholder="Enter company's Name"/>
                  </div>
                  <div className="form-group col-lg-12">
                    <input type="email"  className='form-control' placeholder='Enter email'/>
                  </div>
                  <div className="form-group col-lg-12">
                    <input type="text"  className='form-control' placeholder='Enter subjet'/>
                  </div>
                  <div className="form-group col-lg-12">
                    <select id="options" name="options" className="form-group col-lg-12" placeholder = "prefered option">
                        <option value="opcion1">I'm intered on the 990 USD plan</option>
                        <option value="opcion2">I'm intered on the 1500 USD plan</option>
                        <option value="opcion3">I'm intered on the 2400 USD plan</option>
                    </select>
                  </div>
                  <div className="form-group col-lg-12">
                    <textarea name="message" rows='5' className='form-control' placeholder='Do you want to know somenthing specific? Tell us!'></textarea>
                  </div>
                  <div className="form-group col-lg-12 d-grid">
                    <button className='btn btn-brand'>Send Message</button>
                  </div>
                </form>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Contact
