import React from 'react';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "Request for Demo",
    job: "",
    influencer: "",
    comments: ""
};
const Pricing = () => {
    const [contact, setContact] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            // const url = `${baseUrl}/api/inquiry`;
            const { name, email, number, subject, job, influencer, comments } = contact;
            // const payload = { name, email, number, subject, text: JSON.stringify({ job, influencer }) };
            // const response = await axios.post(url, payload);
            // console.log(response);
            console.log({ name, email, subject, text: JSON.stringify({ job, influencer, number, comments }) })
            setContact(INITIAL_STATE);
            // alertContent();

        } catch (error) {
            console.log(error)
        }
    };


    return (
        <>


            <div className="home-contact-area home-2-contact pb-100" style={{ backgroundColor: "#E8EEF1" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" }}>
                            <div className="content">
                                <center><div>
                                    <h5>Book your free demo</h5>
                                    <p>Schedule a live demo with one of our influence marketing experts to see how Footprynt can help you reach your business goals</p>
                                </div></center>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id='name'
                                                        placeholder="Name"
                                                        className="form-control"
                                                        value={contact.name}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        id='email'
                                                        placeholder="WORK E-MAIL"
                                                        className="form-control"
                                                        value={contact.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>    
                                        
                                        <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="number"
                                                        id='mobile_number'
                                                        placeholder="MOBILE NUMBER"
                                                        className="form-control"
                                                        value={contact.number}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                        </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <FormControl fullWidth >
                                                    <InputLabel>Choose Role</InputLabel>
                                                    <Select
                                                        labelId="role-select-label"
                                                        id="role-select"
                                                        label="Choose Role"
                                                        value={contact.role}
                                                        onChange={handleChange}
                                                        name="role"
                                                    >
                                                        <MenuItem value={"Influencer"}>Influencer</MenuItem>
                                                        <MenuItem value={"Marketing Professional"}>Marketing Professional</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>


                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <FormControl fullWidth >
                                                    <InputLabel>What would you like us to emphasize on demo</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        label="Choose number of Influencers you work with"
                                                        value={contact.influencer}
                                                        onChange={handleChange}
                                                        name="influencer"
                                                    >
                                                        <MenuItem value={"Influencer Discovery"}>Influencer Discovery</MenuItem>
                                                        <MenuItem value={"Influencer Analytics"}>Influencer Analytics</MenuItem> 
                                                        <MenuItem value={"Create Campaigns"}>Creating Campaigns</MenuItem>
                                                        <MenuItem value={"Shrotlisting Influencers"}>Shortlisting Influencers</MenuItem>
                                                        <MenuItem value={"Competitor Analysis"}>Competitor Analysis</MenuItem>
                                                        <MenuItem value={"Complete Functionality"}>Complete Functionality</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea
                                                    name="comments"
                                                    id='comments'
                                                    cols="15"
                                                    rows="2"
                                                    placeholder="Please state your requirements here"
                                                    className="form-control"
                                                    value={contact.comments}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-sm-12" >
                                            <button type="submit" className="default-btn page-btn box-btn" style={{ width: "300px" }} >
                                                Submit Request
                                            </button>
                                        </div>

                                        <div style={{ textAlign: "center", marginTop: "10px" }}>
                                            <p>By submitting this form, I confirm that I have read and understood
                                                <br />Footpyrnt’s Privacy Statement</p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div>
                                <img src="/images/demo.png" alt="contact" style={{ width: "100%", height: "100%", marginTop: "50px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}

export default Pricing;