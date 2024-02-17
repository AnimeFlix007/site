import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
const MainBanner = () => {
    return (
        <div className="banner-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="banner-content">
                                    <h1>
                                        A digital ecosystem of
                                    </h1>
                                    <h1>
                                        brands, influencers &
                                    </h1>
                                    <h1>
                                        content experts
                                    </h1>
                                    <p>
                                        100+ brands, 1000+ campaigns executed, 500+ M in reach! Get the right mix of creative solutions and tech tools developed by India’s foremost digital agency.

                                    </p>
                                    <div className="banner-btn">
                                        <Link href="/contact-us">
                                            <a className="box-btn">Contact Us</a>
                                        </Link>
                                        <Link href="/about-us">
                                            <a className="box-btn border-btn">Know More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="banner-img">
                                    <Image src="/images/banner-img-1.png" width={600} height={500} alt="banner-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-shape">
                <div className="shape1">
                    <Image src="/images/shape/shape1.png" width={20} height={20} alt="shape" />
                </div>
                <div className="shape2">
                    <Image src="/images/shape/shape2.png" width={20} height={20} alt="shape" />
                </div>
                <div className="shape3">
                    <Image src="/images/shape/shape3.png" width={20} height={20} alt="shape" />
                </div>
                <div className="shape4">
                    <Image src="/images/shape/shape4.png" width={20} height={20} alt="shape" />
                </div>
                <div className="shape5">
                    <Image src="/images/shape/shape5.png" width={20} height={20} alt="shape" />
                </div>
                <div className="shape6">
                    <Image src="/images/shape/shape6.png" width={20} height={20} alt="shape" />
                </div>
            </div>
        </div>
    )
}

export default MainBanner;