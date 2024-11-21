import React from 'react'
import './hero.css'

function Hero() {
  return (
    <>
        <section id='hero' className='min-vh-100 d-flex align-items-center text-center'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-uppercase fw-bold display-1 text-white'>Tailored Design Solutions for Your business</h1>
                        <h5 className='text-white mt-3 mb-4 display-7'>
                        Your Creative Partner for Custom Graphic Design Solutions, focused on What Matters Most to You
                        </h5>
                        <div>
                        <a href="#contact" className='btn btn-brand me-2 mb-2 mb-md-0'>Get Started for free</a>
                        <a href="#portafolio" className='btn btn-light ms-2 mt-2 mt-md-0'>Check portfolio</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero
