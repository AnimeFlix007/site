/* eslint-disable */
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="footer-area pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="content">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <img src="/images/fp_business_logo_3.png" alt="logo" />
                                        </a>
                                    </Link>
                                </div>
                                <p>
                                    Digital Marketing/Influencer Marketing
                                </p>
                                <div className="subscribe">
                                    <form className="newsletter-form">
                                        <input type="email" id="emails" className="form-control" placeholder="Your Email" name="EMAIL" required />
                                        <button className="box-btn" type="submit">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>

                                <ul className="social">
                                    <li>
                                        <a href="https://www.linkedin.com/company/padhchin-it-and-marketing/" target="_blank"><i className='bx bxl-linkedin' ></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/footpryntapp" target="_blank"><i className='bx bxl-facebook' ></i></a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/influencernews4" target="_blank"><i className='bx bxl-twitter' ></i></a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com/footprynt_india?igshid=YzdkMWQ2MWU=" target="_blank"><i className='bx bxl-instagram' ></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="content ml-15">
                                <h3>Our Services</h3>
                                <ul className="footer-list">
                                    <li>
                                        <Link href="/solutions-details">
                                            <a>Influencer Marketing</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/solutions-details">
                                            <a>Social Media Marketing</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/solutions-details">
                                            <a>SEO, CRO &amp; Content Management</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/solutions-details">
                                            <a>Marketing Automation</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/solutions-details">
                                            <a>Media buying and selling</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/solutions-details">
                                            <a>Campaign Analytics</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6">
                            <div className="content">
                                <h3>Quick Links</h3>
                                <ul className="footer-list">
                                    <li>
                                        <Link href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            <a>FAQs</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a href="#">Career</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy & Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-conditions">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Data Analysis</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="content contacts">
                                <h3 className="ml-40">Contact Us</h3>
                                <ul className="footer-list foot-social">
                                    <li>
                                        <a href="tel:+1975456789">
                                            <i className="bx bx-phone"></i> +91 98921 12515
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:sales@footprynt.in">
                                            <i className="bx bxs-envelope"></i> sales@footprynt.in
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:admin@footprynt.in">
                                            <i className="bx bxs-envelope"></i> admin@footprynt.in
                                        </a>
                                    </li>
                                    <li>
                                        <i className="bx bxs-map"></i> Borivali, Mumbai, India
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copy-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="menu">
                                    <li>
                                        <Link href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about-us">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/solutions">
                                            <a>Solutions</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/case-studies">
                                            <a>Case Studies</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <a>Blog</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-6">
                                <p className="right">
                                    Copyright &copy; {currentYear} Footprynt. All Rights Reserved by <a href="https://footprynt.in/" target="_blank">Padhchin Technologies Pvt. Ltd.</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;