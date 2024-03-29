import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Head from "next/head";

const CaseStudiesDetails = () => {

    const [caseStudyTitle, setCaseStudyTitle] = React.useState();
    const [caseStudyContent, setCaseStudyContent] = React.useState();
    const [caseStudyActualImg, setCaseStudyActualImg] = React.useState();
    const [caseStudyAuthor, setCaseStudyAuthor] = React.useState();
    const [caseStudyDate, setCaseStudyDate] = React.useState();
    const [caseStudyTags, setCaseStudyTags] = React.useState();
    const [caseStudySummary, setCaseStudySummary] = React.useState();
    const [display, setDisplay] = React.useState(false);
    // const [activeCaseStudy, setActiveCaseStudy] = React.useState();

    const getQueryParams = (query = null) => (query || window.location.search.replace('?', '')).split('&').map(e => e.split('=').map(decodeURIComponent)).reduce((r, [k, v]) => (r[k] = decodeURIComponent(v), r), {});
    React.useEffect(() => {
        var params = getQueryParams();
        // setActiveCaseStudy(params)
        setCaseStudyTitle(params.title);
        setCaseStudyContent(JSON.parse(params.content));
        setCaseStudyActualImg(params.actualImg);
        setCaseStudyAuthor(params.author);
        setCaseStudyDate(params.date);
        setCaseStudyTags(params.tags);
        setCaseStudySummary(params.summary);
        setDisplay(true);
    }, [])


    const CaseStudyParaDisplay = (para) => (
        <div className="row">
            {para.para.type == 'para' ? (<p><span><br /></span>{para.para.text}</p>) : (para.para.type == 'heading' ?
                (<p><span><br /></span><h5>{para.para.text}</h5></p>) : (para.para.type == 'img' ?
                    <img src={para.para.src} /> : <p><span><br /></span><h6>{para.para.text}</h6></p>))}
        </div>
    );

    const CaseStudyContentDisplay = (contents) => (
        <div className="row">
      
            {contents.contents.map(paras =>
                Object.entries(paras).map(item =>
                    <CaseStudyParaDisplay key={item[0]} para={item[1]} />
                )
            )
            }
        </div>
    );

    const CaseStudyDetailDisplay = () => (
        <div className="services-details-area ptb-100">
            <div className="container">
                <div className="row">
                    

                    <div className="col-12">
                        <div className="services-details-text">
                            <h2>{caseStudyTitle}</h2>
                            {display && <CaseStudyContentDisplay contents={caseStudyContent} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <>
            <Head>
                <title>Case Studies</title>
                <meta name="description" content="Pharmeasy Youtube Channel, Promoting Download of App through financial influencers, Asian Paints Promoting new age DIY products, Promoting food products by Emami - Healthy and Tasty,
                Asian Paints - YouTube ROI Campaign, This Or That Launch Campaign,Selected top celebrity and chef who are vocal about diabetes Long format content created by influencers which will be used by PharmEasy to promote awareness
                 on their platform Influencers further added reach to content and facebook community signups through instagram stories,Instagram influencers from DIY and Home Decor categories were selected to showcase top 3 products from the
                 range Long format DIY and decor content created to showcase product highlights and uses 2 CAT A + 2 CAT B Influencers engaged Instagram influencers from various categories - Lifestyle, Fashion, Food and Stand up Comedy Create
                  innovative content (reels, stories, posts, IGTV) to drive brand awareness and drive sales through attractive offers Total of 10 CAT A influencers engaged within a 2.5 month period for the launch,We collaborated with 5 well-known 
                  and popular Bengali creators across different arenas to create short webisodes in the Kitchen, where they share their stories while cooking with Emami Mantra Shorshe Posto masala and Kachchi Ghani Mustard Oil. Long format cooking 
                  content created to showcase the product and its key-benefits in the middle of their content consumption routine, Monthly planned campaign with a roster of macro and micro influencers across YouTube and Instagram
                    Influencers from finance, stock markets, startups categories plus generic popular influencers On a monthly basis 2 CAT A influencers + 5 CAT B + 5 CAT C influencer content published" />
                <meta name="og:title" property="og:title" content="social media marketing,social media marketing agency,social media marketing platforms,best social media marketing agency,influencer discovery platform,
                influencer collaboration platform,influencer analytics platform,influencer brand analysis,influencer campaign analytics,social media influencer analytics platform,campaign management in digital marketing,
                campaign management digital marketing,campaign management platform,marketing automation platforms,marketing campaign management software open source" />
            </Head>
         

            <Navbar />

            <PageBanner
                pageTitle="Case Studies Details"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Case Studies Details"
            />

            {display ? <CaseStudyDetailDisplay title={caseStudyTitle}
                content={caseStudyContent}
                actualImg={caseStudyActualImg}
                author={caseStudyAuthor}
                date={caseStudyDate}
                tags={caseStudyTags}
                summary={caseStudySummary} />
                :
                <CaseStudyDetailDisplay title="Data Not Available"
                    content='{"para1":"CaseStudy Details not availble. Will be updated soon"}'
                    actualImg="/images/404.gif"
                    author="NA"
                    date="NA"
                    tags={[]}
                    summary="Data not availble for this caseStudy. Please go back to caseStudys page to load data" />}
            <Footer />
        </>
    )
}

export default CaseStudiesDetails;