/* eslint-disable */
import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';
import BlogSidebar from '../components/BlogDetails/BlogSidebar';
import Head from "next/head";
const BlogDetails = () => {
    const [blogTitle, setBlogTitle] = React.useState();
    const [blogContent, setBlogContent] = React.useState();
    const [blogActualImg, setBlogActualImg] = React.useState();
    const [blogAuthor, setBlogAuthor] = React.useState();
    const [blogDate, setBlogDate] = React.useState();
    const [blogTags, setBlogTags] = React.useState();
    const [blogSummary, setBlogSummary] = React.useState();
    const [display, setDisplay] = React.useState(false);
    const [activeBlog, setActiveBlog] = React.useState();

    const getQueryParams = (query = null) => (query || window.location.search.replace('?', '')).split('&').map(e => e.split('=').map(decodeURIComponent)).reduce((r, [k, v]) => (r[k] = decodeURIComponent(v), r), {});
    React.useEffect(() => {
        var params = getQueryParams();
        //console.log(params);
        setActiveBlog(params)
        setBlogTitle(params.title);
        setBlogContent(JSON.parse(params.content));
        setBlogActualImg(params.actualImg);
        setBlogAuthor(params.author);
        setBlogDate(params.date);
        setBlogTags(params.tags);
        setBlogSummary(params.summary);
        setDisplay(true);
    }, [])

    const BlogParaDisplay = (para) => (
        <div className="row">
            {para.para.type == 'para' ? (<p><span><br /></span>{para.para.text}</p>) : (para.para.type == 'heading' ?
                (<p><span><br /></span><h5>{para.para.text}</h5></p>) : (para.para.type == 'img' ?
                    <img src={para.para.src} /> : <p><span><br /></span><h6>{para.para.text}</h6></p>))}
        </div>
    );

    const BlogContentDisplay = (contents) => (
        <div className="row">
            {/* {contents.map(content => <BlogCard key={blog.id} {...blog} />)} */}
            {contents.contents.map(paras =>
                Object.entries(paras).map(item =>
                    <BlogParaDisplay key={item[0]} para={item[1]} />
                )
            )
            }
        </div>
    );

    const BlogDetailsDisplay = ({ title, content, actualImg, author, date, tags, summary }) => (
        <div className="blog-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="blog-details-desc">
                            <div className="article-image">
                                <img src={actualImg} alt="image" />
                            </div>

                            <div className="article-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li><span>Posted On:</span> <a href="#">{date}</a></li>
                                        <li><span>Posted By:</span> <a href="#">{author}</a></li>
                                    </ul>
                                </div>

                                <h3>{title}</h3>

                                <blockquote className="flaticon-quote">
                                    <p>{summary}</p>
                                </blockquote>
                                {display && <BlogContentDisplay contents={blogContent} />}
                            </div>

                            <div className="post-navigation">
                                <div className="navigation-links">
                                    <div className="nav-previous">
                                        <Link href="/blog">
                                            <a>
                                                <i className='bx bx-left-arrow-alt'></i> Prev Post
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="nav-next">
                                        <Link href="/blog">
                                            <a>
                                                Next Post <i className='bx bx-right-arrow-alt'></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <BlogSidebar sendToParentTitle={setBlogTitle}
                            sendToParentContent={setBlogContent}
                            sendToParentActualImg={setBlogActualImg}
                            sendToParentAuthor={setBlogAuthor}
                            sendToParentDate={setBlogDate}
                            sendToParentTags={setBlogTags}
                            sendToParentSummary={setBlogSummary}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <Head>
                <title>Blogs</title>
                <meta name="description" content="Integrated Marketing Campaigns - Why You Need It and How To Create One, Reasons Why You Absolutely NEED Influencer Marketing,
                Influencer Marketing After TikTok, The Ultimate Guide To Alternatives Of TikTok, Instagram Reels : The new TikTok, A BRIEF RUNDOWN OF SOCIAL MEDIA SITES OF ALL TIME,
                INFLUENCER MARKETING AUTOMATION, Social Media Engagement Rates On The Fall, INFLUENCER MARKETING VS AFFILIATE MARKETING" />
                <meta name="og:title" property="og:title" content="social media marketing,social media marketing agency,social media marketing platforms,best social media marketing agency,influencer discovery platform,
                influencer collaboration platform,influencer analytics platform,influencer brand analysis,influencer campaign analytics,social media influencer analytics platform,campaign management in digital marketing,
                campaign management digital marketing,campaign management platform,marketing automation platforms,marketing campaign management software open source" />
            </Head>
        

            <Navbar />

            <PageBanner
                pageTitle="Blog Details"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Blog Details"
            />
            {display ? <BlogDetailsDisplay title={blogTitle}
                content={blogContent}
                actualImg={blogActualImg}
                author={blogAuthor}
                date={blogDate}
                tags={blogTags}
                summary={blogSummary} />
                :
                <BlogDetailsDisplay title="Data Not Available"
                    content='{"para1":"Blog Details not availble. Will be updated soon"}'
                    actualImg="/images/404.gif"
                    author="NA"
                    date="NA"
                    tags={[]}
                    summary="Data not availble for this blog. Please go back to blogs page to load data" />}

            <Footer />
        </>
    )
}

export default BlogDetails;