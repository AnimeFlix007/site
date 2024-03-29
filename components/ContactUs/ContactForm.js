import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'
import { useFormik } from "formik";
import * as Yup from "yup";

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully. We will get back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state

const ContactForm = (props) => {
    const { handleChange, handleBlur, errors, values, touched, handleSubmit } =
      useFormik({
        enableReinitialize: true,
        initialValues: {
          name: "",
          email: "",
          number: "",
          subject: "",
          text: "",
        },
        validationSchema: Yup.object({
          name: Yup.string().required("Name is Required"),
          email: Yup.string()
            .email("Enter a valid Email")
            .required("E-mail is Required"),
          number: Yup.string()
            .length(10, "Please enter valid phone number")
            .required("Phone Number is Required"),
          subject: Yup.string().required("Subject is Required"),
          text: Yup.string().required("Text is Required"),
        }),
        onSubmit: async (values, action) => {
          console.log(values);
         
          try {
            const url = `${baseUrl}/inquiry`;
            const response = await axios.post(url, values);
            console.log(response);
  
            alertContent();
          } catch (error) {
            console.log(error);
          }
          action.resetForm();
        },
      });
  
// Form initial state
// const INITIAL_STATE = {
//     name: "",
//     email: "",
//     number: "",
//     subject: "",
//     text: ""
// };

// const ContactForm = (props) => {

//     const [contact, setContact] = useState(INITIAL_STATE);

//     const handleChange = e => {
//         const { name, value } = e.target;
//         setContact(prevState => ({ ...prevState, [name]: value }));
      
//     }

//     const handleSubmit = async e => {
//         e.preventDefault();
//         try {
//             const url = `${baseUrl}/inquiry`;
//             const { name, email, subject, text } = contact;
//             const payload = { name, email, subject, number, text };
//             const response = await axios.post(url, payload);
//             console.log(response);
//             setContact(INITIAL_STATE);
//             alertContent();
//         } catch (error) {
//             console.log(error)
//         }
//     };

    return (
        <div className="home-contact-area home-2-contact" style={{backgroundColor:"#E8EEF1"}}>
            <div className="container">
                <div className="section-title" style={{marginTop:"2px"}}>
                  <h2>{props.title}</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6" style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}}>
                        <div className="content">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="name" 
                                                placeholder="Your Name" 
                                                className="form-control" 
                                                value={values.name}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="email" 
                                                placeholder="Your Email" 
                                                className="form-control" 
                                                value={values.email}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="number" 
                                                placeholder="Phone number" 
                                                className="form-control" 
                                                value={values.number}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="subject" 
                                                placeholder="Subject" 
                                                className="form-control" 
                                                value={values.subject}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group" >
                                            <textarea style={{height:'1rem'}}
                                                name="text" 
                                                cols="30" 
                                                rows="3" 
                                                placeholder="Your Message..." 
                                                className="form-control" 
                                                value={values.text}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-sm-12">
                                        <button type="submit" className="default-btn page-btn box-btn">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="contact-img">
                            <img src="/images/contact-img.png"  alt="contact"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;