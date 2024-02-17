import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/ContactUs/ContactInfo';
import ContactForm from '../components/ContactUs/ContactForm';
import Footer from '../components/_App/Footer';

const ContactUs = () => {
    return (
        <>
         

            <Navbar />

            <PageBanner 
                pageTitle="Contact Us" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact Us" 
            /> 

           

            <ContactForm title="Ready for your first campaign? Fill in the form below"/>

            <ContactInfo />
            
            <Footer />
        </>
    )
}

export default ContactUs;