import React from 'react'
import David from '../../assets/yo_formal.jpeg'

import './team.css'

function Team() {
  return (
    <section id='team' className='section-padding'>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="section-title">
                        <h1 className="display-4 fw-semibold">Team Members</h1>
                        <div className="line"></div>
                        <p>Empower your brand with our limitless design service. Experience creativity that brings your vision to life, beyond imagination!</p>
                    </div>
                </div>
            </div>  
            <div className="row g-4 text-center">
                <div className="col-md-4">
                    <div className="team-member image-zoom">
                        <div className="image-zoom-wrapper">
                            <img src={David} alt="" />
                        </div>
                        <div className="team-member-content">
                            <h4 className='text-white'>David Villamil</h4>
                            <p className='mb-0 text-white'>CEO</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="team-member image-zoom">
                        <div className="image-zoom-wrapper">
                            <img src={David} alt="" />
                        </div>
                        <div className="team-member-content">
                            <h4 className='text-white'>David Villamil</h4>
                            <p className='mb-0 text-white'>CEO</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="team-member image-zoom">
                        <div className="image-zoom-wrapper">
                            <img src={David} alt="" />
                        </div>
                        <div className="team-member-content">
                            <h4 className='text-white'>David Villamil</h4>
                            <p className='mb-0 text-white'>CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team
