import React from 'react'
import './services.css'

import { GoFileMedia } from "react-icons/go";
import { FaTiktok } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { FaAppStoreIos } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { BiLogoGmail } from "react-icons/bi";


function Services() {
  return (
    <section id='services' className='section-padding border-top'>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="section-title">
                        <h1 className="display-3">Awesome Services</h1>
                        <div className="line"></div>
                        <p>Take your brand to the next level with our killer design services. We’re all about unleashing creativity that brings your ideas to life and pushes your brand way beyond the norm!</p>
                    </div>
                </div>
            </div>
            <div className="row g-4 text-center ">
                <div className="col-lg-4 col-sm-6 ">
                    <div className="service theme-shadow p-lg-5 p-4">
                        <div className="iconbox">
                            <FaTiktok/>
                        </div>
                        <h5 className='mt-4 mb-3'>Social media</h5>
                        <p>We deliver engaging social media content designed to captivate your audience on LinkedIn, Instagram and TikTok</p>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="service theme-shadow p-lg-5 p-4">
                        <div className="iconbox">
                            <IoIosColorPalette></IoIosColorPalette>
                        </div>
                        <h5 className='mt-4 mb-3'> Brand Design</h5>
                        <p>Comprehensive brand design services, from logos, brand manuals to full branding packages</p>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="service theme-shadow p-lg-5 p-4">
                        <div className="iconbox">
                            <FaAppStoreIos></FaAppStoreIos>
                        </div>
                        <h5 className='mt-4 mb-3'>Ux/Ui</h5>
                        <p>Whether you need a website, app, or complex interface, we create intuitive designs that elevate user engagement</p>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="service theme-shadow p-lg-5 p-4">
                        <div className="iconbox">
                            <FaPhotoVideo></FaPhotoVideo>
                        </div>
                        <h5 className='mt-4 mb-3'>Video Edition</h5>
                        <p>We help you level up your brand with brand videos, tutorials, demos, MVPs, podcasts, and more</p>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="service theme-shadow p-lg-5 p-4">
                        <div className="iconbox">
                            <VscGraph></VscGraph>
                        </div>
                        <h5 className='mt-4 mb-3'>Visual Design</h5>
                        <p>Creative designs for decks, commercial presentations, brochures, infographics, and various visual assets</p>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="service theme-shadow p-lg-5 p-4">
                        <div className="iconbox">
                            <BiLogoGmail></BiLogoGmail>
                        </div>
                        <h5 className='mt-4 mb-3'>Content Marketing Solutions</h5>
                        <p>we specialize in creating engaging email templates, newsletters, and blogs.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
