import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutUsArea from '../components/AboutUs/AboutUsArea';
import Features from '../components/Common/Features';
import OurCompany from '../components/AboutUs/OurCompany';
import TechnologyUpdate from '../components/Common/TechnologyUpdate';
import TeamMembers from '../components/Common/TeamMembers';
import Testimonials from '../components/Common/Testimonials';
import Footer from '../components/_App/Footer';
import Head from "next/head";
const AboutUs = () => {
    return (
        <>
         <Head>
                <title>About us</title>
                <meta name="description" content="Footprynt is a digital marketing agency specialising in influencer marketing, digital media buying and selling, content management and creative services, 1000+ campaigns executed,
                5000+ influencer videos created on Instagram, 10000+ trended hours on Twitter, Google ad campaigns for the biggest dot coms, 70+ clients - 4 unicorns, 3 media conglomerates, biggest FMCG brand,
                We are footprynt. Let's create your digital footprynt," />
                <meta name="og:title" property="og:title" content="social media marketing,social media marketing agency,social media marketing platforms,best social media marketing agency,influencer discovery platform,
                influencer collaboration platform,influencer analytics platform,influencer brand analysis,influencer campaign analytics,social media influencer analytics platform,campaign management in digital marketing,
                campaign management digital marketing,campaign management platform,marketing automation platforms,marketing campaign management software open source" />
            </Head>
        

            <Navbar />

            <PageBanner 
                pageTitle="About" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About" 
            /> 

            <AboutUsArea />

            <OurCompany />

            <Features />

            <TechnologyUpdate />

            <TeamMembers />

            <Testimonials />
            
            <Footer />
        </>
    )
}

export default AboutUs;