/* eslint-disable */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
const Features = () => {
    return (
        <div className="feature-area bg-color ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="contnet">
                            <div className="feature-tittle">
                                <span>Features</span>
                                <h2>Take a look at latest features offered by Footprynt</h2>
                            </div>

                            <ul>
                                <li>
                                    <i className="flaticon-correct"></i>
                                    Advertising Technology Solutions Approach
                                </li>
                                <li>
                                    <i className="flaticon-correct"></i>
                                    Technological Consultation for Marketing
                                </li>
                                <li>
                                    <i className="flaticon-correct"></i>
                                    Meet &amp; Greet - Clients and Influencers
                                </li>
                                <li>
                                    <i className="flaticon-correct"></i>
                                    Roadmap to Influencer Marketing
                                </li>
                                <li>
                                    <i className="flaticon-correct"></i>
                                    Digital Marketing Course Creation
                                </li>
                            </ul>

                            <Link href="/contact-us">
                                <a className="box-btn">Let's Talk!</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="feature-img">
                            <Image src="/images/feature-img.png" alt="feature" width={600} height={500}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;