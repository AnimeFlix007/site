import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const Analyse = () => {
    const router = useRouter()

    const [influencer, setInfluencer] = useState({});

    useEffect(() => {
        setInfluencer(router.query)
    }, [router.query])

    
   
    console.log("influencer", influencer);

    const routes = useRouter()

    const NavigateAccountType = () => {
        routes.push(`http://newpridesite.s3-website.ap-south-1.amazonaws.com/`)

    }
    const er = +(influencer?.er)

    return (
        <>
         

            <Navbar />

            <PageBanner
                pageTitle="Pricing"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Pricing"
            />
            <div className="home-company-area bg-color">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="grid-item item1">
                                <img src={influencer?.profile} className='profile_image' />

                                <div className='info'>
                                    <ul>
                                        <li style={{ color: "#2192FF" }}>{influencer?.handlename}<CheckCircleIcon /></li>
                                        
                                        <li><LocationOnOutlinedIcon />{influencer?.country}</li>
                                        <li><LanguageIcon />English</li>
                                        <li><MailOutlineRoundedIcon />in.imcootok.f@kt</li>
                                        {/* <li style={{ color: "blue" }}>View cristiano’s contacts</li> */}
                                    </ul>
                                    <h1 style={{ textAlign: "left" }}>{influencer?.media} Stats & Analytics for {influencer?.handle}</h1>
                                    <div className='info1'>
                                        <ul>
                                            <li>Followers</li>
                                            <li>Engagement Rate<HelpOutlineRoundedIcon /></li>
                                        </ul>
                                        <ul>
                                            <li><h1>{influencer?.followers}</h1></li>
                                            <li><h1>{er?.toFixed(2)}%</h1></li>

                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className='info2'>
                                <ul>
                                    <li>Sports with a ball </li>
                                </ul>
                            </div>
                            <div style={{ textAlign: "left" }}>
                                <p>Join my NFT journey on @Binance. Click the link below to get started.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="analyse pb-100" style={{ marginTop: "50px" }}>
                <div className='container'>

                    <div className="btn-group">
                        <button className='btn1' onClick={() => NavigateAccountType()}><MailOutlineRoundedIcon />Send Email</button>
                        <button className='btn2' onClick={() => NavigateAccountType()} style={{ color: "blue" }}><PictureAsPdfRoundedIcon />PDF</button>
                        <button className='btn3' onClick={() => NavigateAccountType()}><EventNoteRoundedIcon />Add to Media Plan</button>
                        <button className='btn4' onClick={() => NavigateAccountType()}><InsertChartRoundedIcon />Add to Campaign</button>
                        <p style={{ marginLeft: "300px" }}>This data may be out of date <span style={{ color: "blue" }}>Update<UpdateRoundedIcon /></span></p>
                    </div>

                </div>
            </div>
            <div className="analyse pb-100" style={{ backgroundColor: "#E8EEF1" }}>
                <div className='container'>
                    <div className="grid-container1">
                        <div className="grid-item1">
                            <h4 style={{ float: "left" }}>WorldWide</h4>
                            <h4 style={{ float: "right", marginRight: "50px" }}># 2</h4><br />
                            <p style={{ float: "left" }}>Global rank</p>

                        </div>

                        <div className="grid-item1">
                            <h4 style={{ float: "left" }}>Iran</h4>
                            <h4 style={{ float: "right", marginRight: "50px" }}># 1</h4><br />
                            <p style={{ float: "left" }}>Country rank</p>

                        </div>
                        <div className="grid-item1">
                            <h4 style={{ float: "left" }}>Sports with a ball</h4>
                            <h4 style={{ float: "right", marginRight: "50px" }}># 1</h4><br />
                            <p style={{ float: "left" }}>in Iran</p>

                        </div>

                    </div>
                    <h2>Instagram Analytics for {influencer?.handle}</h2>
                    <p>Here’re Instagram account statistics for cristiano. The audience size of cristiano is 506.7M followers. The account gained 11.7M new followers in the four last weeks. The Engagement Rate is 2.67%. The average number of likes and comments per Instagram post created by Cristiano Ronaldo is 13.5M and 88.8K respectively. cristiano publishes content mostly about Sports with a ball.</p>
                    <div><h6 style={{ color: "blue" }} onClick={() => NavigateAccountType()}>Register for FREE to view full report<ArrowForwardIosRoundedIcon /></h6></div><hr />

                </div>
                <div className="container">


                    <div className="row align-items-center">

                        <div className="col-lg-6">
                            <h3>Check Instagram audience demographics</h3>
                            <div className='container' style={{ backgroundColor: 'White', padding: '20px 50px' }}>
                                <h3>Audience Demographics</h3><hr />
                                <p>Audience countries, cities and states......................................................<LockRoundedIcon /></p>
                                <p>Languages of audience......................................................................<LockRoundedIcon /></p>
                                <p>Full audience age-gender split.............................................................<LockRoundedIcon /></p>
                                <p>Influencers true reach.....................................................................<LockRoundedIcon /></p>
                                <div className="btn-group">
                                    <button className='btn2' style={{ color: "blue" }} onClick={() => NavigateAccountType()}>View Demographic and reach</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <h3>Check for fake followers and engagements</h3>
                            <div className='container' style={{ backgroundColor: 'White', padding: '20px 50px' }}>
                                <h3>Instagram Follower Growth for Cristiano Ronaldo</h3><hr />
                                <p>+11,731,524 followers last 4 weeks +2.37%</p>
                                <p>Follow/unfollow patterns analysis......................................................................<LockRoundedIcon /></p>
                                <p>Following graph.............................................................<LockRoundedIcon /></p>
                                <p>Organic growth check.....................................................................<LockRoundedIcon /></p>
                                <div className="btn-group">
                                    <button className='btn2' style={{ color: "blue" }} onClick={() => NavigateAccountType()}>View growth analytics for Cristiano Ronaldo</button>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6" style={{ marginTop: "30px" }}>

                            <div className='container' style={{ backgroundColor: 'White', padding: '20px 50px' }}>
                                <h3>Audience Interests</h3><hr />
                                <p>Finance & Economics</p>
                                <p>Cinema & Actors/actresses</p>
                                <p>Trainers & Coaches</p>
                                <p>Full audience interests list...................................................................<LockRoundedIcon /></p>
                                <div className="btn-group">
                                    <button className='btn2' style={{ color: "blue" }} onClick={() => NavigateAccountType()}>View what audience is interested in</button>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6" style={{ marginTop: "30px" }}>

                            <div className='container' style={{ backgroundColor: 'White', padding: '20px 50px' }}>
                                <h3>Instagram Account Activity</h3><hr />
                                <ul style={{ display: "flex" }}>
                                    <li style={{ marginRight: "35px" }}>Avg Likes</li>
                                    <li style={{ marginRight: "35px" }}>Avg Comments</li>
                                </ul>
                                <ul style={{ display: "flex" }}>
                                    <li style={{ marginRight: "15px" }}><h2>13.5M</h2></li>
                                    <li style={{ marginRight: "15px" }}><h2>88.8K</h2></li>
                                </ul>
                                <p>Engagement analysis.....................................................................<LockRoundedIcon /></p>
                                <p>Engagement authenticity check.............................................................<LockRoundedIcon /></p>
                                <p>Comment pods check....................................................................<LockRoundedIcon /></p>
                                <div className="btn-group">
                                    <button className='btn2' style={{ color: "blue" }} onClick={() => NavigateAccountType()}>View Demographic and reach</button>
                                </div>
                            </div>
                        </div>



                        <div className="col-lg-6" style={{ marginTop: "30px" }}>
                            <h3>Check advertising performance</h3>
                            <div className='container' style={{ backgroundColor: 'White', padding: '20px 50px' }}>
                                <h3>Brand Mentions</h3><hr />
                                <p>Estimated post price.....................................................<LockRoundedIcon /></p>
                                <p>Advertising post freq.....................................................................<LockRoundedIcon /></p>
                                <p>Non-ad post freq............................................................<LockRoundedIcon /></p>
                                <p>Native ad performance....................................................................<LockRoundedIcon /></p>
                                <div className="btn-group">
                                    <button className='btn2' style={{ color: "blue" }} onClick={() => NavigateAccountType()}>View native ads analysis</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className='container' style={{ backgroundColor: "white", marginTop: "30px" }}>
                    <h3 style={{ padding: '10px 10px' }}>Suggested Accounts</h3>
                    <div className="grid-container2">
                        {influencer?.map((item) => {
                            const { influencer_id, influencer_profile_link, influencer_name, follower_count } = item;
                            return (
                                <div className="item" key={influencer.influencer_id}>
                                    <img src={influencer.influencer_profile_link} className='profile_image' />
                                    <h5 style={{ color: "#2192FF" }}>{influencer.influencer_name}<CheckCircleIcon /></h5>
                                    <p >{influencer.follower_count}</p>
                                    <p style={{ color: "blue" }}>View report</p>
                                </div>
                            )
                        })}
                    </div>
                </div> */}

                <div className='container'>
                    <center>
                        <button className="box-btn" style={{ marginTop: "50px", fontWeight: "bold" }} onClick={() => NavigateAccountType()}>Get Full Report FREE</button><br />
                        <p>Free report for Instagram account owners</p>
                        <h6 style={{ color: "blue" }}>including</h6>
                    </center>
                </div>
                <div className="analyse " style={{ backgroundColor: "white" }}>
                    <div className='container'>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6" style={{ marginTop: "40px", marginBottom: "40px" }} >
                                <img style={{ float: "left", width: "40px", height: "40px" }} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAxAgMAAAA+friuAAAADFBMVEUAAAADm+UAfr0BY5Q+nOejAAAAAXRSTlMAQObYZgAAACFJREFUeAFjAINQEAgZMmzcgGsVBKwYMmxc4D8c/BkqbAAaRhI510883gAAAABJRU5ErkJggg==' />
                                <h3 >Instagram Audience Demographic</h3>
                                <p > Check @cristiano audience demographics. Full report shows percentage for top-5 countries, top-5 cities, states breakdown for US, core gender, and top-5 languages.</p>
                            </div>

                            <div className="col-lg-4 col-sm-6" style={{ marginTop: "40px", marginBottom: "40px" }}  >
                                <img style={{ float: "left", width: "40px", height: "40px" }} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAA4CAMAAAD+QOluAAAAkFBMVEVHcEwnrmAoj1gnrmAokVUuzHEuzHEor2Aoj1QuzHEorWApkVUwj1Aor2Awz3Awz3Aor2AnkVUlr2AnrmAokVUtynEuzHEtzHEnrmAokVUrj1UnrmAormEpkVUnklUtzHAuzXInrWAwy3AwynAnrmAnkFYuzHEnrmApj1YokVQmrmAokFUuzHEuzHEokVUnrmA4TGVWAAAALXRSTlMA8CCQ8KCQIEDvgJAQYCAQQG8w7+A/sL+wwDC/P7CvUHBwQDDgj9/fUKCgn+BZCpgLAAAAxElEQVQoz8WOZxaCMBAGP3pEuhVFaXYF7n87E0hYuIDOn8y8l+wG4ISbTYiBetdwdrXwfNH0LHIgkM4rhN2M2PhQ3NBMmMeWfIuKogIs5ZbYaqvBPUFhWUWAH+NkmSM1OXacYyLc7yQ+v7JSsXLw6kYMXCju6CZAI9ewp9gjoogAg4Zx3P6ZVsqvla7rO/gjenw+x/rgy7bnKvzZSt4Aa0cYThQntBPmsSZfq8GCJXRTuekBD1kmE1sPqfD0ID/nMeaJ8wudozptMQxeDQAAAABJRU5ErkJggg==' />
                                <h3 >@cristiano audience quality analytics</h3>
                                <p > Get in-depth analysis of the quality of audience and find fake or ghost followers numbers. The report will show the number of real people and influencers, the percentage of mass followers and suspicious accounts.</p>
                            </div>

                            <div className="col-lg-4 col-sm-6" style={{ marginTop: "40px", marginBottom: "40px" }}  >
                                <img style={{ float: "left", width: "40px", height: "40px" }} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAACVBMVEUAAAD4la5QveUjR1xQAAAAAXRSTlMAQObYZgAAABhJREFUeAFjgADWUBAIGOK8Ud4qMBghPABOfadZol0Y6wAAAABJRU5ErkJggg==' />
                                <h3>Audience age and gender</h3>
                                <p > Evaluate the percentage of target age group and gender among @cristiano audience. The report will show the percent of each age-gender group and overall split.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container' style={{ marginTop: "40px" }}>
                    <h2>FAQ: Instagram Stats for {influencer?.handle} Instagram Account</h2>
                    <p>Eager to learn more about the @cristiano Instagram followers? Or maybe you need to review the engagement rate and other vital metrics of Cristiano Ronaldo Instagram account since you want to collaborate with them? There could be a lot of reasons why you might be interested in learning the Cristiano Ronaldo analytics data. But no matter the cause, we prepared this small and insightful FAQ to answer the most popular questions about Cristiano Ronaldo Instagram statistics.</p>
                    <div className="row align-items-center">
                        <div className="col-lg-12" >
                            <div className="choose-content" style={{ backgroundColor: "white" }} >
                                <div className="faq-accordion">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton style={{ backgroundColor: "white" }}>
                                                    How to browse @cristiano Instagram statistics?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    You can conduct a full-fledged and in-depth analysis of Cristiano Ronaldo’s account and review its Instagram Analytics while analyzing the most crucial and essential metrics (like authentic engagement, audience quality score, and many other indicators) in the full HypeAuditor Instagram report.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What kind of @cristiano Instagram stats are available?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    As we have briefly mentioned above, there are many insightful data and metrics for you to review for any given Instagram account. Such core metrics as the audience demographics and interests, follower growth, engagement rate, comment authenticity, and sponsored posts performance are available. The list doesn’t end there, as there are a lot of other essential metrics. But exactly with these statistics, you can easily monitor Cristiano Ronaldo Instagram analytics via the complete Instagram Analytical Report.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton style={{ backgroundColor: "white" }}>
                                                    How many followers does Cristiano Ronaldo have on Instagram?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    @cristiano Instagram follower count is currently at 506.7M followers. And just like any other Instagram account, the total number of followers is constantly changing. So if you want to understand how actively an Instagram account, such as Cristiano Ronaldo, is growing, you are able to do so in the HypeAuditor Instagram report.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What is the engagement rate of Cristiano Ronaldo’s Instagram Account?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    The engagement rate of @cristiano Instagram account is 2.67%. Typically, the engagement rate metric determines how actively the audience engages with the influencer’s content. That will show how much impact an influencer can potentially make upon promoting or advertising a specific product via their Instagram account.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton style={{ backgroundColor: "white" }}>
                                                    How much does Cristiano Ronaldo make per Instagram post?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Everything that somehow concerns such questions as how much does Cristiano Ronaldo make per instagram post, story, or even what’s Cristiano Ronaldo net worth - can be freely reviewed in our full report. Simply upgrade your access to review more insightful data on millions of other social influencer accounts. That way, you’ll be able to compare and decided on the right collaborator who will be suitable for your business.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem uuid="f">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What is the average likes count on @cristiano’s Instagram Posts?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    The average amount of likes is around 13.5M per post. However, to better understand how a particular account performs or, in this case, @cristiano instagram works, it’s vital to be focusing on the level of engagement, not just Cristiano Ronaldo most liked Instagram post. Since that metric will show just how much percentage of the audience is actively involved with the content creator content. That fact alone may completely change your social influencer strategy.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="g">
                                            <AccordionItemHeading>
                                                <AccordionItemButton style={{ backgroundColor: "white" }}>
                                                    How many comments on average does @cristiano receive per Instagram Post?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    The moderate comments are 88.8K per post. There is no doubt that the number of comments is one of the most blatant indicators to understand how active the audience of an Instagram account is, similar to the Cristiano Ronaldo Instagram. However, besides the number of comments, it’s even more critical to track the overall engagement level and the authenticity of the comments. There are a lot of accounts that may claim that they have a large number of followers. But what you may not understand is that some of these followers may turn to be bots.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="home-company-area" style={{ backgroundColor: "#E8EEF1", marginTop: "50px", marginBottom: "50px" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12" style={{ backgroundColor: "#1d42d9" }}>
                            <div className="company-content">
                                <div className="container">
                                    <div className="content" style={{ marginTop: "80px" }}>
                                        <center><h1 style={{ color: "white" }}>See FootPrynt in Action</h1>
                                            <p style={{ color: "white" }}>Get familiar with the FootPrynt Influencer Marketing Platform by exploring it with our sales manager.</p>
                                            <Link href="/about-us">
                                                <a className="box-btn border-btn">Get Started Free</a>
                                            </Link></center><br />
                                    </div>
                                    <div className="flap"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="company-content">
                                <div className="container">
                                    <div className="content" style={{ marginTop: "80px" }}>
                                        <center><h2 style={{ color: "#132460" }}>Try FootPrynt for your brand or agency</h2>
                                            <p>Start with free media plans, campaign management and demo versions of other features.</p>
                                            <Link href="/about-us">
                                                <a className="box-btn">Get Started Free</a>
                                            </Link></center><br />
                                    </div>
                                    <div className="flap"></div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>












            <Footer />
        </>
    )
}

export default Analyse;