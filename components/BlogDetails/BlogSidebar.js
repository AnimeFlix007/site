/* eslint-disable */
import React from 'react';
import Link from 'next/link';
import blogContents from '../../public/data/blog';


const BlogSidebar = (props) => {
    const [blogList, setBlogList] = React.useState(blogContents);
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setBlogList(blogContents.sort((a, b) => (Date.parse(a.date) < Date.parse(b.date)) ? 1 : -1));
        setDisplay(true);
    }, [])

    const handleClick = ({ title, content, actualImg, author, date, tags, summary }) => {
        props.sendToParentTitle(title);
        props.sendToParentContent(content);
        props.sendToParentActualImg(actualImg);
        props.sendToParentAuthor(author);
        props.sendToParentDate(date);
        props.sendToParentTags(tags);
        props.sendToParentSummary(summary);
    };

    const SideBlogCard = ({ actualImg, author, category, content, date, displayImg, id, link, tags, title, summary }) => (
        <div className="item">
            <a className="thumb" onClick={() => handleClick({ title, content, actualImg, author, date, tags, summary })}>
                <span className={"fullimage cover bg1"} role="img"></span>
            </a>
            <div className="info">
                <div className="time">{date}</div>
                <h4 className="title usmall">
                    <a onClick={() => handleClick({ title, content, actualImg, author, date, tags, summary })}>{title}</a>
                </h4>
            </div>

            <div className="clear"></div>
        </div>
    );
    const SideBlogCardList = ({ blogs }) => (
        <div className="post-wrap">
            {blogs.slice(0, 3).map(blog => <SideBlogCard key={blog.id} {...blog} />)}
        </div>
    );

    return (
        <div className="widget-area" id="secondary">
          

          
          
            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Tags</h3>
                <div className="post-wrap">
                    <div className="tagcloud">
                        <Link href="/blog">
                            <a>Business</a>
                        </Link>

                        <Link href="/blog">
                            <a>Privacy</a>
                        </Link>

                        <Link href="/blog">
                            <a>Technology</a>
                        </Link>

                        <Link href="/blog">
                            <a>Tips</a>
                        </Link>

                        <Link href="/blog">
                            <a>Uncategorized</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar;