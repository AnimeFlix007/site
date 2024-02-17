/* eslint-disable */
import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../../components/_App/Footer';
import Head from "next/head";
import Image from 'next/image'
const CampaignAnalytics = () => {
   


    return (
        <>
            <Head>
                <title>Campaign Analytics</title>
                <meta name="description" content="Strengths and Weaknesses, the Do’s and Don'ts - learn all about your campaign. Review the effectiveness of campaign vs objectives." />
                <meta name="og:title" property="og:title" content="social media marketing,social media marketing agency,social media marketing platforms,best social media marketing agency,influencer discovery platform,
                influencer collaboration platform,influencer analytics platform,influencer brand analysis,influencer campaign analytics,social media influencer analytics platform,campaign management in digital marketing,
                campaign management digital marketing,campaign management platform,marketing automation platforms,marketing campaign management software open source" />
            </Head>
         

            <Navbar />

            <PageBanner
                pageTitle="Pricing"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Pricing"
            />

            <div className="home-company-area bg-color">
                <center>
                    <h1>Expand Your Digital Footprynt</h1>
                    <p>Want to up your social media engagement rate or grow organically on the web? We chalk out the best plan for you.</p>
                </center><br /><br />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="company-content">
                                <div className="company-tittle">
                                    <h2>Campaign Analytics</h2>
                                    <p style={{ fontWeight: 'bold' }}>Strengths and Weaknesses, the Do’s and Don'ts - learn all about your campaign. Review the effectiveness of campaign vs objectives.</p>
                                    <p>A campaign’s effectiveness is only as true as its metrics. </p>
                                    <p>We provide detailed campaign reports with traffic, bounce rate, qualified leads, converted sales, social media engagement, landing page reports, costs of conversion, click to rate, influencer metrics, video views, likes, comments and even clicks on your brand links.</p>
                                    <p>Our extensive reports for every campaign helps brands to make decisions on achievement of brand objectives.</p>

                                </div>

                                <Link href="/contact-us">
                                    <a className="box-btn">
                                        Contact Us
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-10">
                            <div className="company-img">
                                <Image src="/images/solutions-details/solutions-details6.jpg"  width={500} height={450}  alt="company" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <Footer />
        </>
    )
}

export default CampaignAnalytics;