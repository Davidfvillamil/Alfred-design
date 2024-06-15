import React from 'react'

import { FaStar } from "react-icons/fa6";
import David from '../../assets/yo_formal.jpeg'

import './testimonials.css'

function Testimonials() {
  return (
    <section id='reviews' className='section-padding bg-light'>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="section-title">
                        <h1 className="display-4 fw-semibold">What they say about us</h1>
                        <div className="line"></div>
                        <p>Empower your brand with our limitless design service. Experience creativity that brings your vision to life, beyond imagination!</p>
                    </div>
                </div>
            </div>  
            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <div className="review">
                        <div className="review-head p-4 bg-white theme-shadow">
                            <div className='text-warning'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint recusandae at aspernatur voluptates cum fuga facere, sequi sapiente qui deleniti iure ex harum, exercitationem libero odio adipisci hic aperiam nam.</p>
                        </div>
                        <div className="review-person mt-4 mb-3 d-flex align-items-center">
                            <img src={David} alt="" className='perfil-image rounded-circle'/>
                            <div className='ms-3'>
                                <h5>David Villamil</h5>
                                <small>Founder</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="review">
                        <div className="review-head p-4 bg-white theme-shadow">
                            <div className='text-warning'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint recusandae at aspernatur voluptates cum fuga facere, sequi sapiente qui deleniti iure ex harum, exercitationem libero odio adipisci hic aperiam nam.</p>
                        </div>
                        <div className="review-person mt-4 mb-3 d-flex align-items-center">
                            <img src={David} alt="" className='perfil-image rounded-circle'/>
                            <div className='ms-3'>
                                <h5>David Villamil</h5>
                                <small>Founder</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="review">
                        <div className="review-head p-4 bg-white theme-shadow">
                            <div className='text-warning'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint recusandae at aspernatur voluptates cum fuga facere, sequi sapiente qui deleniti iure ex harum, exercitationem libero odio adipisci hic aperiam nam.</p>
                        </div>
                        <div className="review-person mt-4 mb-3 d-flex align-items-center">
                            <img src={David} alt="" className='perfil-image rounded-circle'/>
                            <div className='ms-3'>
                                <h5>David Villamil</h5>
                                <small>Founder</small>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    </section>
  )
}

export default Testimonials
