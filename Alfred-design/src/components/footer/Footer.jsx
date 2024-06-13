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
                        <a href="#"><img src="" alt="" /></a>
                        <div className="line"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias ad saepe provident.</p>
                        <div>
                            <a href=""><BsInstagram /></a>
                            <a href=""><RiTwitterXLine /></a>
                            <a href=""><FaTiktok /></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <h5>Services</h5>
                        <div className="line"></div>
                        <ul>
                            <li><a href="">Ux/Ui</a></li>
                            <li><a href="">Video edition</a></li>
                            <li><a href="">design</a></li>
                            <li><a href="">Video creationss</a></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
