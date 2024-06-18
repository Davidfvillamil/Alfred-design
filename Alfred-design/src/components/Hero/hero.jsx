import React from 'react'
import './hero.css'

function Hero() {
  return (
    <>
        <section id='hero' className='min-vh-100 d-flex align-items-center text-center'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='title-h1 text-uppercase fw-semibold display-1'>Alfred will do it!</h1>
                        <h5 className='text-white mt-3 mb-4 display-6'>Monthly Design Subscription for Your Business</h5>
                        <div>
                            <a href="#contact" className='btn btn-brand me-2'>Get Started</a>
                            <a href="#portafolio" className='btn btn-light ms-2'>Check portafolio</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero
