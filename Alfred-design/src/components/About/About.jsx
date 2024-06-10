import React from 'react'
import About_foto from '../../assets/About2.jpg'
import './About.css'

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
            <div className="row">
                <div className="col-lg-6">
                    <img src={About_foto} alt="" className="responsive-img"/>
                </div>
                <div className="col-lg-5">
                    <h1>About Alfred</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam rerum exercitationem obcaecati in suscipit.</p>
                    <div>
                        <div className="iconbox"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
