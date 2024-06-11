import React from 'react'
import About_foto from '../../assets/About4.jpg'
import './About.css'

import { GrSend } from "react-icons/gr";


function About() {
  return (
    <section id='about' className='section-padding'>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="section-title">
                        <h1 className="display-4 fw-semibold">About us</h1>
                        <div className="line"></div>
                        <p>Empower your brand with our limitless design service. Experience creativity that brings your vision to life, beyond imagination!</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-6">
                    <img src={About_foto} alt="" className="responsive-img"/>
                </div>
                <div className="col-lg-5">
                    <h1>About Alfred</h1>
                    <p className='mt-3 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam rerum exercitationem obcaecati in suscipit.</p>
                    <div className='d-flex pt-4 mb-3'>
                        <div className="iconbox me-3">
                            <GrSend />
                        </div>
                        <div>
                            <h5>We are awesome</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo perspiciatis facilis tempore voluptatibus.</p>
                        </div>
                    </div>

                    <div className='d-flex mb-3'>
                        <div className="iconbox me-3">
                            <GrSend />
                        </div>
                        <div>
                            <h5>We are awesome</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo perspiciatis facilis tempore voluptatibus.</p>
                        </div>
                    </div>

                    <div className='d-flex'>
                        <div className="iconbox me-3">
                            <GrSend />
                        </div>
                        <div>
                            <h5>We are awesome</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo perspiciatis facilis tempore voluptatibus.</p>
                        </div>
                    </div>

                    
                    <div className='d-flex'>
                        <div className="iconbox me-3">
                            <GrSend />
                        </div>
                        <div>
                            <h5>We are awesome</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo perspiciatis facilis tempore voluptatibus.</p>
                        </div>
                    </div>

                    
                    <div className='d-flex'>
                        <div className="iconbox me-3">
                            <GrSend />
                        </div>
                        <div>
                            <h5>We are awesome</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo perspiciatis facilis tempore voluptatibus.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default About
