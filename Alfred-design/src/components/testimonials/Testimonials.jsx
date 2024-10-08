import React from 'react'

import { FaStar } from "react-icons/fa6";
import David from '../../assets/yo_formal.jpeg'
import Santiago from '../../assets/santiago.jpg'
import Juan from '../../assets/juan-caro.jpeg'
import Lina from '../../assets/Lina_Cuervo.png'

import './testimonials.css'

function Testimonials() {
  return (
    <section id='reviews' className='section-padding bg-light'>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="section-title">
                        <h1 className="display-3 ">What they say about us</h1>
                        <div className="line"></div>
                        <p>Check out the buzz! Our awesome clients have shared their experiences, and we couldn’t be prouder. See how we’ve helped bring their visions to life.</p>
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
                            <p>Alfred Design has been pivotal in our strategic investments. Their ability to translate complex ideas into captivating visual designs has greatly enhanced the market appeal of our portfolio companies. The creativity and dedication to quality design of their team are unparalleled</p>
                        </div>
                        <div className="review-person mt-4 mb-3 d-flex align-items-center">
                            <img src={Santiago} alt="" className='perfil-image rounded-circle'/>
                            <div className='ms-3'>
                                <h5><a href="https://www.linkedin.com/in/santiagorojasmontoya/">Santiago Rojas</a></h5>
                                <small>Founder at Cube Ventures VC</small>
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
                            <p>Alfred Design has revolutionized our product development process. Their design expertise and seamless integration into our workflow have not only improved our product aesthetics but also strengthened user engagement. I highly recommend their professional approach and commitment to excellence.</p>
                        </div>
                        <div className="review-person mt-4 mb-3 d-flex align-items-center">
                            <img src={Juan} alt="" className='perfil-image rounded-circle'/>
                            <div className='ms-3'>
                                <h5><a href="https://www.linkedin.com/in/juan-david-caro/">Juan Caro</a></h5>
                                <small>Product Manager</small>
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
                            <p>Alfred Design has been an indispensable asset in our digital marketing efforts. Their ability to create impactful visual content tailored to our brand's identity has significantly boosted our online presence. Their team's responsiveness and creativity make them a standout choice for design services.</p>
                        </div>
                        <div className="review-person mt-4 mb-3 d-flex align-items-center">
                            <img src={Lina} alt="" className='perfil-image rounded-circle'/>
                            <div className='ms-3'>
                                <h5><a href="https://www.linkedin.com/in/lina-maria-cuervo/">Lina Cuervo</a></h5>
                                <small>Impact Investing Analyst</small>
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
