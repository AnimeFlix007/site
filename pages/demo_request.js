import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Head from "next/head";
import DemoRequest from '../components/DemoRequest/DemoRequest';
const FreeDemo = () => {
    
    return (
        <>
            <Head>
                <title>Influencer Discovery</title>
                <meta name="description" content="Increases brand awareness & reach, Builds credibility & trust, Saves cost & time, Improves sales & marketing,
                Boosts sharing potential on SM, Enriches content strategy, Track prospective influencers, Get your message across your target audience, Niche & Trending influencers,
                Partner only with quality and authentic influencers, Find creators similar to top influencers" />
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

          <DemoRequest/>



            <Footer />
        </>
    )
}

export default FreeDemo;