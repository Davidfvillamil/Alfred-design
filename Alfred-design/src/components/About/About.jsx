import React from 'react'
import About_foto from '../../assets/About4.jpg'
import './About.css'

import { GrSend } from "react-icons/gr";
import { FaGlobeAmericas } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { MdHighQuality } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { GoGoal } from "react-icons/go";


function About() {
  return (
    <section id='about' className='section-padding'>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="section-title">
                        <h1 className="display-3 title">About us</h1>
                        <div className="line"></div>
                        <p>Your Go-To Hub for Creative Excellence: Delivering Quality and Timely Solutions at an Affordable Price!</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-6">
                    <img src={About_foto} alt="" className="responsive-img"/>
                </div>
                <div className="col-lg-5 about-body">
                    <h1 className='mt-4'>About Alfred</h1>
                    <p className='mt-3 mb-4'>At Alfred, we are committed to providing you with top-notch talent from Latin America, fully bilingual in English and Spanish. We believe in delivering high-quality work on time and at an affordable price. Here's why we’re your perfect match:</p>
                    <div className='d-flex pt-4 mb-3'>
                        <div className="iconbox me-3">
                            <FaGlobeAmericas/>
                        </div>
                        <div>
                            <h5 className='sub-title'>Latin American Talent Powerhouse</h5>
                            <p>We've assembled a team of top creative minds from across Latin America, offering diverse perspectives and cutting-edge solutions.</p>
                        </div>
                    </div>

                    <div className='d-flex mb-3'>
                        <div className="iconbox me-3">
                            <RiKakaoTalkFill/>
                        </div>
                        <div>
                            <h5 className='sub-title'>Mastering Two Worlds</h5>
                            <p>Fluent in both English and Spanish, we navigate cultural nuances like pros, ensuring seamless communication every step of the way</p>
                        </div>
                    </div>

                    <div className='d-flex mb-3'>
                        <div className="iconbox me-3">
                            <MdHighQuality/>
                        </div>
                        <div>
                            <h5 className='sub-title'>Quality That Speaks Volumes</h5>
                            <p>Our standards are sky-high, so expect nothing short of exceptional with every project we take on</p>
                        </div>
                    </div>

                    
                    <div className='d-flex mb-3'>
                        <div className="iconbox me-3">
                            <FaMoneyBillWave/>
                        </div>
                        <div>
                            <h5 className='sub-title'>Affordability Meets Excellence</h5>
                            <p>Premium design services at prices that won't make you wince—because great design shouldn't cost a fortune!</p>
                        </div>
                    </div>

                    
                    <div className='d-flex mb-3'>
                        <div className="iconbox me-3">
                            <GoGoal/>
                        </div>
                        <div>
                            <h5 className='sub-title'>Your Success, Our Mission</h5>
                            <p>We're here to make your business shine. Let's collaborate closely to bring your vision to life and achieve outstanding results</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default About
