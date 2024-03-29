/* eslint-disable */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
const SmartServices = () => {
    return (
        <div className="home-service-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Digital Marketing Services</span>
                    <h2>Expand your Digital Footprynt</h2>
                    <p>Want to up your social media engagement rate or grow organically on the web? We chalk out the best plan for you.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-service">
                            <div className="service-img">
                                <Image src="/images/services/service1.png" alt="service" width={50} height={50}/>
                            </div>

                            <div className="service-content">
                                <h3> Influencer Marketing</h3>
                                <p>With over 1000+ influencer marketing campaigns under our belt, Footprynt is one of India’s oldest and most trusted influencer marketing agencies.</p>
                                
                                <Link href="/solutions/influencer_marketing">
                                    <a className="line-bnt">
                                        Read More
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-service">
                            <div className="service-img">
                                <Image src="/images/services/service2.png" alt="service" width={50} height={50} />
                            </div>

                            <div className="service-content">
                                <h3> Social Media Marketing</h3>
                                <p>Still lacking the punch on Social Media? Time to switch to Footprynt. Get the best out of your social media spends and grow rapidly.</p>
                            
                                <Link href="/solutions/social_marketing">
                                    <a className="line-bnt">
                                        Read More
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-service">
                            <div className="service-img">
                                <Image src="/images/services/service3.png" alt="service" width={50} height={50} />
                            </div>

                            <div className="service-content">
                                <h3> SEO, CRO & Content Management</h3>
                                <p>Get your adwords in place. We create the right content for your brand. And your ads strategy? It’s whetted by our professionals.</p>

                                <Link href="/solutions/content_management">
                                    <a className="line-bnt">
                                        Read More
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-service">
                            <div className="service-img">
                                <Image src="/images/services/service4.png" alt="service" width={50} height={50}/>
                            </div>

                            <div className="service-content">
                                <h3> Marketing Automation</h3>
                                <p>We offer personalised experience for your customers through efficient digital marketing automated at nominal costs.</p>
                            
                                <Link href="/solutions/marketing_automation">
                                    <a className="line-bnt">
                                        Read More
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-service">
                            <div className="service-img">
                                <Image src="/images/services/service5.png" alt="service" width={50} height={50}/>
                            </div>

                            <div className="service-content">
                                <h3> Media buying and selling</h3>
                                <p>Our digital media buying strategies take into account design, copywriting, budget planning and targeting. We get you the perfect digital fit.</p>
                                <Link href="/solutions/media_buying">
                                    <a className="line-bnt">
                                        Read More
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-service">
                            <div className="service-img">
                                <Image src="/images/services/service6.png" alt="service" width={50} height={50}/>
                            </div>

                            <div className="service-content">
                                <h3> Campaign Analytics</h3>
                                <p>Strengths and Weaknesses, the Do’s and Don'ts - learn all about your campaign. Review the effectiveness of <b>campaign vs objectives.</b></p>

                                <Link href="/solutions/campaign_analytics">
                                    <a className="line-bnt">
                                        Read More
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmartServices;