import React from 'react'
import { motion } from 'framer-motion'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';





const Contact = () => {



  const ContactForm = useFormik({
    initialValues: {

      name: '',
      email: '',
      subject: '',
      message: ''
    },

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log(values);
      setSubmitting(true);
      const res = await fetch('http://localhost:5000/contact/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setSubmitting(false);
      if (res.status === 200) {
        enqueueSnackbar('Message Sent Successfully', { variant: 'success' });
        resetForm();
      } else {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      }
    },
  });



  return (
    <div style={{ overflow: 'hidden' }}>
      <header className='text-dark' style={{ backgroundColor: "#dbedff" }}>
        <div className='container-fluid py-5 '>
          <div className='row'>
            <div className='col-md-8 my-2'>
              <motion.h2 animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text'><strong className='text-primary '>Contact</strong> Us</motion.h2>&nbsp;
              <motion.p animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text'>Just send us your questions or concerns, We will give you the help you need.
              </motion.p>&nbsp;
            </div>
            <div className='col-md-3 '>
              <motion.img animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='img-fluid mx-auto ' src='https://codedthemes.com/wp-content/uploads/2022/04/contact-us-banner-img.png.webp' alt=''></motion.img>
            </div>
          </div>
        </div>
      </header>
      <br />
      <br />


      <div className='row'>
        <div className='col-md-2'>

        </div>
        <div className='col-md-8 '>
          <h3 className='text-center'>Send us your message</h3><br />
          <p className='text-center'>Please use the form below to contact us if you have any questions or feedback regarding our products or services.</p><br />
          <p className='text-center'>For any Technical Product Related Support. Use our Support Panel</p><br />
          
          <form onSubmit={ContactForm.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <span className='ms-4 fs-6 text-danger'>{ContactForm.errors.name}</span>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name" onChange={ContactForm.handleChange} value={ContactForm.values.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email </label>
              <span className='ms-4 fs-6 text-danger'>{ContactForm.errors.email}</span>
              <input type='text' className='form-control' id='email' placeholder='Your Email' onChange={ContactForm.handleChange} value={ContactForm.values.email} />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <span className='ms-4 fs-6 text-danger'>{ContactForm.errors.subject}</span>
              <input type='text' className='form-control' id='subject'  onChange={ContactForm.handleChange} value={ContactForm.values.subject} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                className="form-control"
                id="message"
                placeholder='Enter your message here...' onChange={ContactForm.handleChange} value={ContactForm.values.message}
                rows={3}
                defaultValue={""}
              />
            </div>
            <button className='btn btn-primary mt-4 w-100' type='submit'>Submit</button>
          </form>

        </div>
      </div>
      <br /><br />

    </div>
  )
}

export default Contact






























