/* eslint-disable */
import React from 'react';
import Link from '../../utils/ActiveLink';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const style1 = {
    width: '100%',
    maxWidth: 500,
    bgcolor: 'background.paper',
    borderRadius: '2rem',
};
const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '1rem',
    height: '50vh',
    overflowY: 'scroll',
    overflowX: 'hidden',

};

const Navbar = () => {
    const [menu, setMenu] = React.useState(true);
    const [users, setUsers] = useState([])
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([])
    const [modal, setmodal] = useState(false)
    const router = useRouter();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const SearchNavigatehandler = () => {
        text.length > 0 && suggestions.length === 0 && router.push(`/error_page/${text}`)
    }
    const NavigateInfluencerHandler = (influencer) => {
        router.push(`/analysis_influencer/?rank=${influencer?.influencer_rank}&name=${influencer?.influencer_name}&handlename=${influencer?.influencer_handle_name}&profile=${influencer?.influencer_profile_link}&media=${influencer?.influencer_social_media}&er=${influencer?.engagement_score}&followers=${influencer?.follower_count}&country=${influencer?.influencer_country}&views=${influencer?.influencer_views}&likes=${influencer?.influencer_likes}&comments=${influencer?.influencer_comments}`)
        setmodal(false)
        setText("")
        setSuggestions([])
        handleClose()
    }

    const SmallAvatar = styled(Avatar)(({ theme }) => ({
        width: 22,
        height: 22,
        border: `2px solid ${theme.palette.background.paper}`,
    }));


    useEffect(() => {
        const loadUsers = async () => {
            try {
                const response = await axios.get("https://vdtteq14bc.execute-api.ap-south-1.amazonaws.com/dev/?filter=allinfluencers");

                setUsers(response.data)
            } catch (error) {
                console.log("Unable to react the server. Please try after sometime")
            }
        }
        loadUsers();

    }, [])
    const onChangeHandler = (text) => {
        let matches = []
        if (text.length > 0) {
            matches = users.filter(user => {
                const regex = new RegExp(`${text}`, "gi");
                return user.influencer_name.match(regex)
            })
        }
        console.log('matches', matches)
        setSuggestions(matches)
        setText(text)
    }


    const toggleNavbar = () => {
        setMenu(!menu)
    }


    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area">
                <div className="main-nav" >
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>
                            <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand" style={{ maxWidth: '200px' }}>
                                    <img src="/images/fp_business_logo_3.png" alt="logo" />
                                </a>
                            </Link>


                            <div className={classOne} id="navbarSupportedContent">
                                <div className="col-lg-2 d-none d-lg-block">
                                    <div className="logo">
                                        <Link href="/">
                                            <a>
                                                <img src="/images/fp_business_logo_3.png" alt="logo" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <ul className="navbar-nav text-left">
                                    <li className="nav-item">
                                        <div className="nav-right">
                                            <Modal
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={style}>

                                                    <Box sx={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset' }}>
                                                        <IconButton sx={{ p: '10px' }} aria-label="menu" onClick={SearchNavigatehandler}>
                                                            <SearchIcon />
                                                        </IconButton>
                                                        <InputBase
                                                            sx={{ ml: 1, flex: 1, }}
                                                            placeholder="Analyse any influencer..."
                                                            inputProps={{ 'aria-label': 'search google maps' }}
                                                            onChange={e => onChangeHandler(e.target.value)}
                                                        />
                                                    </Box>

                                                    <Divider sx={{ width: 450, marginTop: '1rem' }} />
                                                    {text.length >= 0 && suggestions.length > 0 && suggestions.map((suggestion, i) => (
                                                        <div key={i} onClick={() => NavigateInfluencerHandler(suggestion)}>
                                                            <List sx={style1} component="nav" aria-label="mailbox folders">
                                                                <ListItem sx={{ borderRadius: '1rem', backgroundColor: '#F9F9F9' }}>
                                                                    <ListItemAvatar>
                                                                        <Badge
                                                                            overlap="circular"
                                                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                                                            badgeContent={
                                                                                <SmallAvatar alt="Remy Sharp" src="https://www.freeiconspng.com/uploads/logo-twitter-circle-png-transparent-image-1.png" />
                                                                            }
                                                                        >
                                                                            <Avatar alt="Travis Howard" src={suggestion.influencer_profile_link} />
                                                                        </Badge>
                                                                    </ListItemAvatar>
                                                                    <ListItemText primary={suggestion.influencer_handle_name} secondary={suggestion.influencer_name} />
                                                                </ListItem>
                                                            </List>
                                                        </div>
                                                    ))}
                                                    {text.length > 0 && suggestions.length === 0 && <h5 style={{ textAlign: 'center', color: '#61876E', fontWeight: '400', marginTop: '4rem' }}>{"No results for" + ' ' + text}</h5>}
                                                </Box>
                                            </Modal>
                                            <form>
                                                <input type="text" className="form-control search" placeholder="Analyze Influencer..." onClick={handleOpen} />
                                                <button type="submit">
                                                    <i className="bx bx-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/">
                                            <a onClick={e => e.preventDefault()} className="nav-link dropdown-toggle">
                                                Product
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/product/discovery" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Influencer Discovery</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/product/analytics" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Influencer Analytics</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/product/campagain" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Campaign Management</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link dropdown-toggle">
                                                Solutions
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/solutions/influencer_marketing" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Influencer Marketing</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/solutions/social_marketing" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Social Media Marketing</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/solutions/content_management" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">SEO, CRO & Content Management</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/solutions/marketing_automation" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Marketing Automation</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/solutions/media_buying" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Media Buying and Selling</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/solutions/campaign_analytics" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Campaign Analytics</a>
                                                </Link>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link dropdown-toggle">
                                                Resources
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Home</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/about-us" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">About</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/feature_influencer?title=Top 10 Instagram influencers in India&content=topinstagram" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Influencers</a>
                                                </Link>

                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact-us" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Contact</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/team" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Team</a>
                                                </Link>
                                            </li>



                                            <li className="nav-item">
                                                <Link href="/testimonials" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Testimonials</a>
                                                </Link>
                                            </li>



                                            <li className="nav-item">
                                                <Link href="/faq" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">FAQ</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/case-studies" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Case Studies</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog</a>
                                                </Link>
                                            </li>


                                            <li className="nav-item">
                                                <Link href="/terms-conditions" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Terms &amp; Conditions</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/privacy-policy" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Privacy Policy</a>
                                                </Link>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/pricing" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Pricing</a>
                                        </Link>
                                    </li>

                                </ul>

                                <div className="others-options d-flex align-items-center ms-auto">
                                    <div className="nav-btn">
                                        <Link href="/contact-us">
                                            <a className="box-btn">Get Started</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Navbar;