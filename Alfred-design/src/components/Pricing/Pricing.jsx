import React from 'react'

import './pricing.css'

import { FaStar } from "react-icons/fa6";
import David from '../../assets/yo_formal.jpeg'
import { FaCheckCircle } from "react-icons/fa";

function Pricing() {
  return (
    <section id='pricing' className='section-padding bg-light'>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="section-title">
                        <h1 className="display-3 title">Pricing</h1>
                        <div className="line"></div>
                        <p>Empower your brand with our limitless design service. Experience creativity that brings your vision to life, beyond imagination!</p>
                    </div>
                </div>
            </div>  
            <div className="row">
                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="pricing">
                        <div className="pricing-head p-4 bg-white theme-shadow">
                            <h3 className='text-center display-7'>Alfred DO it!</h3>
                            <div className='price-container'>
                                <h2 className='text-center'>$990</h2>
                                <span>Month</span>
                            </div>
                            <div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/>
                                    <p>Up to 2 Brands</p>
                                </div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/>
                                    <p>Full Range of Design Services</p>
                                </div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/><p>Up to 3 Active Requests</p>
                                </div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/>
                                    <p>24 to 48-Hour Turnaround</p>
                                </div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/>
                                    <p>Cloud Storage up to 15GB</p>
                                </div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/>
                                    <p>Editable Files Provided</p>
                                </div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/>
                                    <p>Bilingual Support in English and Spanish</p>
                                </div>
                                
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="pricing">
                        <div className="pricing-head p-4 bg-white theme-shadow">
                            <h3 className='text-center'>Alfred CRUSH it! </h3>
                            <div className='price-container'>
                                <h2 className='display-6 text-center'>$1650</h2>
                                <span>Month</span>
                            </div>
                            <div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/>
                                    <p>Up to 5 Brands</p>
                                </div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/>
                                    <p>Full Range of Design Services</p>
                                </div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/><p>Up to 8 Active Requests</p>
                                </div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/>
                                    <p>24-Hour Turnaround!</p>
                                </div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/>
                                    <p>Cloud Storage up to 25GB</p>
                                </div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/>
                                    <p>Editable Files Provided</p>
                                </div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/>
                                    <p>Priority Support in English and Spanish</p>
                                </div>
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="pricing">
                        <div className="pricing-head p-4 bg-white theme-shadow">
                            <h3 className='text-center'>Alfred MASTER it!</h3>
                            <div className='price-container'>
                                <h2 className='display-6 text-center'>$2500</h2>
                                <span>Month</span>
                            </div>
                            <div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/>
                                    <p>Unlimited Brands</p>
                                </div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/>
                                    <p>Full Range of Design Services</p>
                                </div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/><p>Up to 10 Active Requests</p>
                                </div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/>
                                    <p>24 to 48-Hour Turnaround</p>
                                </div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/>
                                    <p>Cloud Storage upt to 50GB</p>
                                </div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/>
                                    <p>Editable Files Provided</p>
                                </div>
                                <div className='option-container'>
                                    <FaCheckCircle className='icon-check'/>
                                    <p>A 100% Dedicated Professional for Your Business</p>
                                </div>
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    </section>
  )
}

export default Pricing
