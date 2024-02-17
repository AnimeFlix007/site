/* eslint-disable */
import React from 'react';
import Link from 'next/link';
import ReactPlayer from 'react-player/youtube'


const TechnologyUpdate = () => {
    
    return (
        <div className="technology-area ptb-100 bg-color">
            <div className="container">
                <div className="row align-items-center choose-c">
                    <div className="col-lg-6">
                        <div className="choose-img">
                            <img src="/images/choose-bg.png" alt="choose" />
                            <div className="technology-video">
                              
                                <ReactPlayer url='http://www.youtube.com/watch?v=wGXEgR2gRPo' />
                                {/* <iframe width="560" height="315" src="http://www.youtube.com/embed/wGXEgR2gRPo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="technology-content">
                            <h2>Updated Technology</h2>
                            <p>We understand your Business model &amp; Industry thoroughly to design the most efficient digital marketing strategies. Footprynt works on an effective &amp; efficient methodology which leads to the formation of Digital Marketing Strategy in coherence with insights extracted through detailed analysis.</p>
                            <h4>Influencer Footprynt</h4>
                            <p>Not just for the brands, Footprynt is the most favorite partner for many influencers. Footprynt has provided great opportunities to many influencers by connecting them to the right brands.</p>

                            <Link href="/contact-us">
                                <a className="box-btn">
                                    Contact Us
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            {/* <ModalVideo 
                channel='youtube'
                youtube={{ autoplay: 1,mute:1 }} 
                isOpen={!isOpen} 
                videoId='v=wGXEgR2gRPo' 
                onClose={() => setIsOpen(!isOpen)} 
            /> */}
            // Only loads the YouTube player
            

        </div>
    )
}

export default TechnologyUpdate;