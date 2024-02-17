import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
import blogContents from '../public/data/blog';


const Blog = () => {

    const [blogList, setBlogList] = React.useState(blogContents);
    const [display, setDisplay] = React.useState(false);
    
    React.useEffect(() => {
        setBlogList(blogContents.sort((a,b) => (Date.parse(a.date) < Date.parse(b.date)) ? 1: -1));
        setDisplay(true);
    }, [])

    const pagination = (
        <div className="col-lg-12">
                            <div className="page-navigation-area">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link page-links" href="#">
                                            <i className='bx bx-chevrons-left'></i>
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
    );
    
    const BlogCard = ({ actualImg, author, category, content, date, displayImg, id, link, tags, title, summary }) => (
        <div className="col-lg-4 col-md-6">
            <div className="single-blog">
                <div className="blog-img" style={{minHeight:300}} >
                    <Link href={{pathname: link, query: { title:encodeURIComponent(title), content:encodeURIComponent(JSON.stringify(content)), actualImg:encodeURIComponent(actualImg), author:encodeURIComponent(author), date:encodeURIComponent(date), tags:encodeURIComponent(tags), summary:encodeURIComponent(summary) }}} >
                        <a>
                            <img src={displayImg} alt="blog"/>
                        </a>
                    </Link>
                </div>
                
                <div className="content" style={{minHeight:300}}>
                    <ul>
                        <li>{date}</li>
                        <li>
                            <a href={{pathname: link, query: { title:encodeURIComponent(title), content:encodeURIComponent(JSON.stringify(content)), actualImg:encodeURIComponent(actualImg), author:encodeURIComponent(author), date:encodeURIComponent(date), tags:encodeURIComponent(tags), summary:encodeURIComponent(summary) }}}>{author.name}
                            </a>
                        </li>
                    </ul>
                    <Link href={{pathname: link, query: { title:encodeURIComponent(title), content:encodeURIComponent(JSON.stringify(content)), actualImg:encodeURIComponent(actualImg), author:encodeURIComponent(author), date:encodeURIComponent(date), tags:encodeURIComponent(tags), summary:encodeURIComponent(summary) }}} >
                    <a>
                        <h3>{title}</h3>
                    </a>
                    </Link>
                    <Link href={{pathname: link, query: { title:encodeURIComponent(title), content:encodeURIComponent(JSON.stringify(content)), actualImg:encodeURIComponent(actualImg), author:encodeURIComponent(author), date:encodeURIComponent(date), tags:encodeURIComponent(tags), summary:encodeURIComponent(summary) }}} >
                    <a className="line-bnt">Read More</a>
                    </Link>
                </div>
            </div>
        </div>

    );

    const BlogCardList = ({ blogs }) => (
        <div className="row">
          {blogs.map(blog => <BlogCard key={blog.id} {...blog} />)}
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
                pageTitle="Blog"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Blog"
            />

            <div className="home-blog-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Blog Post</span>
                        <h2>Our Blogs</h2>
                        <p>Subscribe to our mailers to receive the latest trends in Digital Marketing</p>
                    </div>
                    <div className="row">
                    {display && <BlogCardList blogs = {blogList}/>}
                    
                    {/* Pagination */}
                    {blogList.length > 10 && pagination}    
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Blog;