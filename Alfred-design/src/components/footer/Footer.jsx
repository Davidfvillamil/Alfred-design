import React from 'react'

import { BsInstagram } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";

import './footer.css'

function Footer() {
  return (
    <footer className='bg-dark text-white'>
        <div className="footer-top">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-3 col-sm-6">
                        <a href="#"><img src="" alt="" />ALFRED</a>
                        <div className="line"></div>
                        <p>Thank you for visiting Alfred Design. Let’s create something amazing together!</p>
                        {/*}
                        <div>
                            <a href=""><BsInstagram /></a>
                            <a href=""><RiTwitterXLine /></a>
                            <a href=""><FaTiktok /></a>
                        </div>
                        */}
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <h5 className='mb-0 text-white'>SERVICES</h5>
                        <div className="line"></div>
                        <ul>
                            <li><a href="">Ux/Ui</a></li>
                            <li><a href="">Video edition</a></li>
                            <li><a href="">design</a></li>
                            <li><a href="">Video creationss</a></li>
                        </ul>
                        
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <h5>ABOUT</h5>
                        <div className="line"></div>
                        <ul>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Team</a></li>
                            <li><a href="">Video creation</a></li>
                        </ul>
                        
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <h5>CONTACT US</h5>
                        <div className="line"></div>
                        <ul>
                            <li><a href="">Miami, Florida</a></li>
                            {/*
                            <li><a href="">df.villamilmartinez@allfred.lat</a></li>
                            */}
                            <li><a href="">(+57) 320-802-8073</a></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row g-4 justify-content-between">
                    <div className="col-auto">
                        <div className="pb-0">© 2024 Alfred Design. All rights reserved.</div>
                    </div>
                    <div className="col-auto">
                        <div className="pb-0">Designed by Allfred</div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
