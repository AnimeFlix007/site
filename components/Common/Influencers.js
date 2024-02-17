import * as React from 'react';
import { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Link from '../../utils/ActiveLink';
import { purple, red, blue, green, pink, brown, grey, orange, yellow } from '@mui/material/colors';

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyx';

const colors = [red[500], blue[500], pink[500], yellow[900], green[500], purple[500], brown[500], grey[500], orange[500]]

const Influencers = () => {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
        setToggleState(index);
    };

    function generateRandomLetter() {
        let result = ' ';
        const charactersLength = characters.length;
        
            result = characters.charAt(Math.floor(Math.random() * charactersLength));
        
    
        return result.toUpperCase();
    }
    console.log (generateRandomLetter())



    return (
        <div className="feature-area bg-color ptb-100">
            <div className="container">
                <div className="container">
                    <div className="bloc-tabs">
                        <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                        >
                            <InstagramIcon style={{ color: '#FF597B' }} /> Instagram
                        </button>
                        <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >
                            <YouTubeIcon style={{ color: '#DC0000' }} /> YouTube
                        </button>
                        <button
                            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}
                        >
                            <TwitterIcon style={{ color: "#39B5E0" }} /> Twitter
                        </button>
                    </div>

                    <div className="content-tabs">
                        <div
                            className={toggleState === 1 ? "content1  active-content1" : "content1"}>
                            <div className="row">
                                <Link href="/feature_influencer?title=Top 10 Instagram influencers in India&content=topinstagram">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className='card' style={{
                                            marginTop: '1rem',
                                            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
                                            borderRadius: '1rem',
                                            height: '15rem',
                                            width: '22rem',
                                            
                                        }}>
                                            <div className="service-content" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                                                <h3 style={{ textAlign: 'center', color: 'white' }}> Top 10 Instagram Influencers in India</h3>
                                                <AvatarGroup total={10} style={{ justifyContent: 'center' }}>
                                                <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                </AvatarGroup>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/feature_influencer?title=Top 10 Instagram influencers in India&content=topinstagram">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className='card' style={{
                                            marginTop: '1rem',
                                            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
                                            borderRadius: '1rem',
                                            height: '15rem',
                                            width: '22rem',
                                            backgroundColor: '#000b2f',
                                        }}>
                                            <div className="service-content" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                                                <h3 style={{ textAlign: 'center', color: 'white' }}> Top Instagram Influencers in India</h3>
                                                <AvatarGroup total={12} style={{ justifyContent: 'center' }}>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                </AvatarGroup>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/feature_influencer?title=Top Instagram influencers who reached 100k&content=hundredkinstagram">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="card" style={{
                                            marginTop: '1rem',
                                            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
                                            borderRadius: '1rem',
                                            height: '15rem',
                                            width: '22rem',
                                            backgroundColor: '#000b2f',
                                        }}>
                                            <div className="service-content" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                                                <h3 style={{ textAlign: 'center', color: 'white' }}>Top Instagram influencers who reached 100k</h3>
                                                <AvatarGroup total={7} style={{ justifyContent: 'center' }}>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                </AvatarGroup>
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div
                            className={toggleState === 2 ? "content1  active-content1" : "content1"}>
                            <div className="row">
                                <Link href="/feature_influencer?title=Top 10 YouTube Influencers in India&content=topyoutube">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="card" style={{
                                            marginTop: '1rem',
                                            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
                                            borderRadius: '1rem',
                                            height: '15rem',
                                            width: '22rem',
                                            backgroundColor: '#000b2f',

                                        }}>
                                            <div className="service-content" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                                                <h3 style={{ textAlign: 'center', color: 'white' }}> Top 10 YouTube Influencers</h3><br />
                                                <AvatarGroup total={10} style={{ justifyContent: 'center' }}>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                </AvatarGroup>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <div className="col-lg-4 col-sm-6">
                                    <div className="card" style={{
                                        marginTop: '1rem',
                                        boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
                                        borderRadius: '1rem',
                                        height: '15rem',
                                        width: '22rem',
                                        backgroundColor: '#000b2f',
                                    }}>
                                        <div className="service-content" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                                            <h3 style={{ textAlign: 'center', color: 'white' }}> Top YouTube Influencers in India</h3><br />
                                            <AvatarGroup total={24} style={{ justifyContent: 'center' }}>
                                                <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                            </AvatarGroup>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/feature_influencer?title=Top YouTube influencers who reached 100k&content=hundredkyoutube">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="card" style={{
                                            marginTop: '1rem',
                                            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
                                            borderRadius: '1rem',
                                            height: '15rem',
                                            width: '22rem',
                                            backgroundColor: '#000b2f',
                                        }}>
                                            <div className="service-content" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                                                <h3 style={{ textAlign: 'center', color: 'white' }}>Top YouTube influencers who reached 100k</h3>
                                                <AvatarGroup total={7} style={{ justifyContent: 'center' }}>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                </AvatarGroup>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        </div>

                        <div
                            className={toggleState === 3 ? "content1  active-content1" : "content1"}>
                            <div className="row">
                                <Link href="/feature_influencer?title=Top 10 Twitter influencers in India&content=toptwitter">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="card" style={{
                                            marginTop: '1rem',
                                            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
                                            borderRadius: '1rem',
                                            height: '15rem',
                                            width: '22rem',
                                            backgroundColor: '#000b2f',
                                        }}>
                                            <div className="service-content" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                                                <h3 style={{ textAlign: 'center', color: 'white' }}> Top 10 Twitter Influencers</h3><br />
                                                <AvatarGroup total={24} style={{ justifyContent: 'center' }}>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                </AvatarGroup>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/feature_influencer?title=Top Twitter Influencers in India&content=toptwitter">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="card" style={{
                                            marginTop: '1rem',
                                            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
                                            borderRadius: '1rem',
                                            height: '15rem',
                                            width: '22rem',
                                            backgroundColor: '#000b2f',
                                        }}>
                                            <div className="service-content" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                                                <h3 style={{ textAlign: 'center', color: 'white' }}> Top Twitter Influencers in India</h3><br />
                                                <AvatarGroup total={24} style={{ justifyContent: 'center' }}>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                </AvatarGroup>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/feature_influencer?title=Top Twitter influencers who reached 100k&content=hundredktwitter">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="card" style={{
                                            marginTop: '1rem',
                                            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
                                            borderRadius: '1rem',
                                            height: '15rem',
                                            width: '22rem',
                                            backgroundColor: '#000b2f',
                                        }}>
                                            <div className="service-content" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                                                <h3 style={{ textAlign: 'center', color: 'white' }}>Top Twitter influencers who reached 100k</h3>
                                                <AvatarGroup total={24} style={{ justifyContent: 'center' }}>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                    <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random()*9)] }}>{generateRandomLetter()}</Avatar>
                                                </AvatarGroup>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
}
export default Influencers