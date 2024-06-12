import React from 'react'
import './counter.css'

function Counter() {
  return (
    <section id='counter' className='section-padding border-top'>
        <div className="container text-center">
            <div className="row g-4">
                <div className="col-lg-3 col-sm-6">
                    <h1 className='text-white display-4'>9000</h1>
                    <h6 className='text-uppercase mb-0 text-white mt-3'>Videos edited</h6>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h1 className='text-white display-4'>58K+</h1>
                    <h6 className='text-uppercase mb-0 text-white mt-3'>Trusted Clients</h6>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h1 className='text-white display-4'>5000+</h1>
                    <h6 className='text-uppercase mb-0 text-white mt-3'>Designs</h6>
                </div>

                <div className="col-lg-3 col-sm-6">
                    <h1 className='text-white display-4'>5000+</h1>
                    <h6 className='text-uppercase mb-0 text-white mt-3'>Designs</h6>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Counter
