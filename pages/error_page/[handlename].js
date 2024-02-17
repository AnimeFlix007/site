import React from 'react';
import Navbar from '../../components/_App/Navbar';
import { useRouter } from 'next/router';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';

const Error = () => {
    const router = useRouter()
   
   

    return (
        <>
           

            <Navbar />

            <PageBanner
                pageTitle="Pricing"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Pricing"
            /> <div className="home-contact-area home-2-contact" style={{ backgroundColor: "#E8EEF1" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px", marginTop: '2rem' }}>
                            <div className="content">
                                <form style={{ alignItems: 'center' }}>
                                    <div>
                                        <div className="col-lg-12" >
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Handle name you're looking for"
                                                    className="form-control"
                                                    value={router.query.handlename}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <select name="field1" className="form-control">
                                                    <option value="volvo">Social Media</option>
                                                    <option style={{ fontSize: '1.1rem' }} value="saab">Instagram</option>
                                                    <option style={{ fontSize: '1.1rem' }} value="opel">Twitter</option>
                                                    <option style={{ fontSize: '1.1rem' }} value="audi">Youtube</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    placeholder="Email"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>


                                        <div className="col-lg-12 col-sm-12">
                                            <button type="submit" className="default-btn page-btn box-btn">
                                                Send
                                            </button>
                                        </div><br />
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div>
                                <h1 style={{ textAlign: 'center', marginTop: '5rem' }}>Sorry... The influencer Analysis is processing</h1>
                                <h5 style={{ textAlign: 'center', color: '#678983', fontWeight: '500' }}>Currently the Handle name you’re looking for does not exit</h5>
                                <h5 style={{ textAlign: 'center', fontWeight: '500' }}>But you can fill the information,<br /> we will get in touch with you shortly!</h5>
                            </div>
                        </div>
                    </div>
                </div><br /><br />
            </div>
            {/* <div className='error_heading'>
                <h1 style={{ textAlign: 'center', marginTop: '5rem' }}>Sorry... The influencer Analysis is processing</h1>
                <h5 style={{ textAlign: 'center', color: '#678983', fontWeight: '500' }}>Currently the Handle name you’re looking for does not exit</h5>
                <h5 style={{ textAlign: 'center', color: '#FF597B', fontWeight: '500' }}>But you can fill the below information,<br /> we will get in touch with you shortly!</h5>
            </div>
            <center>
                <form style={{ alignItems: 'center' }}>
                    <div>
                        <div className="col-lg-3" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Handle name you're looking for"
                                    className="form-control"
                                    value={router.query.handlename}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-group">
                                <select name="field1" className="form-control">
                                    <option value="volvo">Social Media</option>
                                    <option style={{ fontSize: '1.1rem' }} value="saab">Instagram</option>
                                    <option style={{ fontSize: '1.1rem' }} value="opel">Twitter</option>
                                    <option style={{ fontSize: '1.1rem' }} value="audi">Youtube</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>


                        <div className="col-lg-12 col-sm-12">
                            <button type="submit" className="default-btn page-btn box-btn">
                                Send
                            </button>
                        </div><br />
                    </div>
                </form>

            </center> */}



            <Footer />
        </>
    )
}

export default Error;