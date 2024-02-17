/* eslint-disable */
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
const AboutUsArea = () => {
    return (
        <div className="home-company-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="company-content">
                            <div className="company-tittle">
                                <span>About Us</span>
                                <h2>Footprynt is a digital marketing agency specialising in influencer marketing, digital media buying and selling, content management and creative services.</h2>
                            </div>
                            <div className="feature-area bg-color ptb-100">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-12">
                                            <div className="contnet">    
                                                <ul>
                                                    <li>
                                                        <i className="flaticon-correct"></i>
                                                        1000+ campaigns executed.
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-correct"></i>
                                                        5000+ influencer videos created on Instagram.
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-correct"></i>
                                                        10000+ trended hours on Twitter.
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-correct"></i>
                                                        Google ad campaigns for the biggest dot coms.
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-correct"></i>
                                                        70+ clients - 4 unicorns, 3 media conglomerates, biggest FMCG brand.
                                                    </li>
                                                    
                                                    <Link href="/contact-us">
                                                        <a className="box-btn">Let's create your digital footprynt.</a>
                                                    </Link>
                                                                                                    
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="company-img">
                            <Image src="/images/about-img-2.jpg" alt="company" width={600} height={500}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsArea;