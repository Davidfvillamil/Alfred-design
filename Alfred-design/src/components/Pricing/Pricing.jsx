import React, { useState } from 'react';
import './pricing.css';
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';



function Pricing() {

    const [isMonthly, setIsMonthly] = useState(true);
    const [isYearly, setIsYearly] = useState(false);

   

    return (
        <section id='pricing' className='section-padding bg-light'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <h1 className="display-3 title">Pricing</h1>
                            <div className="line"></div>
                            <p>Choose the plan that fits your needs and budget. Our packages offer flexible options to deliver top-quality design services tailored to your business</p>
                        </div>
                    </div>
                </div>  

                <div className='button-holder'>
                    <button 
                        className={`btn me-2 ${isMonthly ? 'btn-brand' : ''}`} 
                        onClick={() => {
                            setIsMonthly(true);
                            setIsYearly(false);
                        }}
                    >
                        Monthly
                    </button>
                    <button 
                        className={`btn ms-2 ${isYearly ? 'btn-brand' : ''}`} 
                        onClick={() => {
                            setIsMonthly(false);
                            setIsYearly(true);
                        }}
                    >
                        Yearly
                    </button>
                    
                </div>
                
                {isMonthly ? 
                    <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="pricing">
                            <div className="pricing-head p-4 bg-white theme-shadow">
                                <h3 className='text-center display-7'>Alfred DO it!</h3>
                                <div className='price-container'>
                                    <h2 className='text-center'>$1000</h2>
                                    <span>Month</span>
                                </div>
                                <div>
                                    <div className='option-container'>
                                        <FaCheckCircle className='icon-check'/>
                                        <p>Up to 1 Brand</p>
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
                                        <p>Cloud Storage up to 5GB</p>
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
                                    <h2 className='display-6 text-center'>$2000</h2>
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
                                        <FaCheckCircle className='icon-check'/><p>Up to 9 Active Requests</p>
                                    </div>
                                    <div className='option-container'>
                                        <FaCheckCircle className='icon-check'/>
                                        <p>24-Hour Turnaround!</p>
                                    </div>
                                    <div className='option-container'>
                                        <FaCheckCircle className='icon-check'/>
                                        <p>Cloud Storage up to 20GB</p>
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
                                    <h2 className='display-6 text-center'>$3500</h2>
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
                                        <FaCheckCircle className='icon-check'/><p>Up to 15 Active Requests</p>
                                    </div>
                                    <div className='option-container'>
                                        <FaCheckCircle className='icon-check'/>
                                        <p>24 to 48-Hour Turnaround</p>
                                    </div>
                                    <div className='option-container'>
                                        <FaCheckCircle className='icon-check'/>
                                        <p>Cloud Storage up to 50GB</p>
                                    </div>
                                    <div className='option-container'>
                                        <FaCheckCircle className='icon-check'/>
                                        <p>Editable Files Provided</p>
                                    </div>
                                    <div className='option-container'>
                                        <FaCheckCircle className='icon-check'/>
                                        <p>100% Dedicated Professional for your business</p>
                                    </div>
                                </div>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    </div> : 

                    <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="pricing">
                            <div className="pricing-head p-4 bg-white theme-shadow">
                                <h3 className='text-center display-7'>Alfred DO it!</h3>
                                <div className='price-container'>
                                    <h2 className='text-center'>$900</h2>
                                    <span>Month</span>
                                </div>
                                <div>
                                    <div className='option-container'>
                                        <FaCheckCircle className='icon-check'/>
                                        <p>Up to 1 Brand</p>
                                    </div>
                                    <div className='option-container'>
                                        <FaCheckCircle className='icon-check'/>
                                        <p>Full Range of Design Services</p>
                                    </div>
                                    <div className='option-container'>
                                        <FaCheckCircle className='icon-check'/><p>Up to 2 Active Requests</p>
                                    </div>
                                    <div className='option-container'>
                                        <FaCheckCircle className='icon-check'/>
                                        <p>24 to 48-Hour Turnaround</p>
                                    </div>
                                    <div className='option-container'>
                                        <FaCheckCircle className='icon-check'/>
                                        <p>Cloud Storage up to 5GB</p>
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
                                    <h2 className='display-6 text-center'>$1800</h2>
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
                                        <FaCheckCircle className='icon-check'/><p>Up to 8 Active Requests</p>
                                    </div>
                                    <div className='option-container'>
                                        <FaCheckCircle className='icon-check'/>
                                        <p>24-Hour Turnaround!</p>
                                    </div>
                                    <div className='option-container'>
                                        <FaCheckCircle className='icon-check'/>
                                        <p>Cloud Storage up to 20GB</p>
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
                                    <h2 className='display-6 text-center'>$2900</h2>
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
                                        <FaCheckCircle className='icon-check'/><p>Up to 15 Active Requests</p>
                                    </div>
                                    <div className='option-container'>
                                        <FaCheckCircle className='icon-check'/>
                                        <p>24 to 48-Hour Turnaround</p>
                                    </div>
                                    <div className='option-container'>
                                        <FaCheckCircle className='icon-check'/>
                                        <p>Cloud Storage up to 50GB</p>
                                    </div>
                                    <div className='option-container'>
                                        <FaCheckCircle className='icon-check'/>
                                        <p>Editable Files Provided</p>
                                    </div>
                                    <div className='option-container'>
                                        <FaCheckCircle className='icon-check'/>
                                        <p>100% Dedicated Professional for your business</p>
                                    </div>
                                </div>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    </div>
                }


                
            </div>
        </section>
    )
}

export default Pricing;

