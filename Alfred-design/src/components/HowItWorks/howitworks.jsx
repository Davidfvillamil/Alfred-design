import React from 'react'
import Mono from '../../assets/Mono.jpg'
import Ella from '../../assets/ella.jpg'
import Ella2 from '../../assets/Ella2.jpg'
import './howitworks.css'



import { TbSquareNumber1Filled } from "react-icons/tb";
import { TbSquareNumber2Filled } from "react-icons/tb";
import { TbSquareNumber3Filled } from "react-icons/tb";
import { TbSquareNumber4Filled } from "react-icons/tb";




function HowItWorks() {
  return (
    <section id='about' className='section-padding'>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="section-title">
                        <h1 className="display-3 title">How it works?</h1>
                        <div className="line"></div>
                        <p>With Alfred, transforming your design vision into reality has never been easier. Our process is simple, efficient, and designed to give you unlimited access to top-tier design without the usual limitations.</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-between align-items-center">
                
                <div className="col-lg-5 about-body">
                    <h1 className='mt-4'>Easy to use!</h1>
                    <p className='mt-3 mb-4'>With Alfred, simplicity is key. Submit your design requests effortlessly, and track progress in real-time through our intuitive platform. No hassle, just top-notch designs delivered straight to you</p>
                    <div className='d-flex pt-4 mb-3'>
                        <div className="iconbox me-3">
                            <TbSquareNumber1Filled />
                        </div>
                        <div>
                            <h5 className='sub-title'> Sign Up</h5>
                            <p>Choose your subscription, starting at $20,000/year, and get instant access to our design team</p>
                        </div>
                    </div>

                    <div className='d-flex mb-3'>
                        <div className="iconbox me-3">
                            <TbSquareNumber2Filled />
                        </div>
                        <div>
                            <h5 className='sub-title'>Submit your requests</h5>
                            <p>Send us your design needs—anything from UI to social media graphics—through our simple platform</p>
                        </div>
                    </div>

                    <div className='d-flex mb-3'>
                        <div className="iconbox me-3">
                            <TbSquareNumber3Filled />
                        </div>
                        <div>
                            <h5 className='sub-title'>Let us Design</h5>
                            <p>Our team creates custom designs based on your requests, delivering high-quality results every time.</p>
                        </div>
                    </div>

                    <div className='d-flex mb-3'>
                        <div className="iconbox me-3">
                            <TbSquareNumber4Filled />
                        </div>
                        <div>
                            <h5 className='sub-title'>Review & Enjoy</h5>
                            <p>Review the final designs, provide feedback, and download your files. Keep the creativity flowing with unlimited requests!</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-6 image-howitworks">
                    <img src={Ella2} alt="" className="responsive-img"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks
