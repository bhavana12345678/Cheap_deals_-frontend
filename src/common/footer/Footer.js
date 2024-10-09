import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../components/assets/images/logo.png"

import "./Footer.css"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container footerBox">
                    <div className="box">
                        <img src={logo} alt="" />
                        <p>Cheap_Deal is a platfrom there you can shop products in good rate also we have &nbsp;
                            <a href="https://instagram.com/cheap_deal2021?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                                Instagram page Click to Visit :)</a> </p>
                        <div className="icon d_flex">
                            <a className='store-btn' href="https://instagram.com/cheap_deal2021?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                                <i className='fa-brands fa-instagram'></i>
                                <span>Instagram</span>
                            </a>

                            <a className='store-btn' href="https://api.whatsapp.com/send/?phone=%2B918871960800&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                                <i className='fa-brands fa-whatsapp'></i>
                                <span>Whatsapp</span>
                            </a>


                        </div>
                    </div>

                    <div className="box">
                        <h2>Social Media</h2>
                        <ul>
                            <li>
                                <a href="https://api.whatsapp.com/send/?phone=%2B918871960800&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">Whats <i className="fa-brands fa-whatsapp"></i> app</a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/santosh.anand.313924/" target="_blank" rel="noreferrer">Face <i className="fa-brands fa-facebook"></i> Book</a>
                            </li>
                            <li>
                                <a href="https://instagram.com/cheap_deal2021?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">Insta <i className="fa-brands fa-instagram"></i> gram</a>
                            </li>
                            <li>
                                <a href="https://t.me/Anand_DEO" target="_blank" rel="noreferrer">Tele <i className="fa-brands fa-telegram"></i> gram</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/santosh-kumar-anand-96b670231/" target="_blank" rel="noreferrer">Linke <i className="fa-brands fa-linkedin"></i> din</a>
                            </li>

                        </ul>
                    </div>

                    <div className="box">
                        <h2>Pages</h2>
                        <ul>
                            <li>
                                <Link to="/men">Men</Link>
                            </li>
                            <li>
                                <Link to="/women">Women</Link>
                            </li>
                            <li>
                                <Link to="/kids"> Kids</Link>
                            </li>
                            <li>
                                <Link to="/all-products">All Products</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>


                        </ul>
                    </div>

                    <div className="box">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>
                                <a href="https://www.google.co.in/maps/place/Kirodimalnagar,+Chhattisgarh+496005/@21.9270188,83.3240829,15z/data=!3m1!4b1!4m5!3m4!1s0x3a273ca13545b875:0x8070b8be8a62ccb6!8m2!3d21.9269995!4d83.3328377" target="_blank" rel="noreferrer">Raigarh, Chhattisgarh, India, 496001</a>
                            </li>
                            <li>
                                <a href="mailto: anandsa271@gmail.com" target="_blank" rel="noreferrer">Gmail: anandsa271@gmail.com</a>
                            </li>
                            <li>
                                <a href="tel:+918871960800" target="_blank" rel="noreferrer">Call - +91 8871960800</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p> &#169; Copyright 2022 <span> <Link to="/contact">Cheap_Deal</Link> </span>. All rights reserved. </p>
                </div>
            </footer>
        </>
    )
}

export default Footer
