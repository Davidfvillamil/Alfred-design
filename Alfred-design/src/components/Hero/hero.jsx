import React from 'react'
import './hero.css'

function Hero() {
  return (
    <>
        <section id='hero' className='min-vh-100 d-flex align-items-center text-center'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-uppercase fw-bold display-1 text-white'>Alfred will do it!</h1>
                        <h5 className='text-white mt-3 mb-4 display-7'>Monthly Design Subscription for Your Business</h5>
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
