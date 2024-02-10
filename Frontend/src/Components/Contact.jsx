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
        <div className='container-fluid py-5' style={{ height: "450px" }}>
          <motion.h2 animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text' style={{ marginTop: "50px" }}><strong className='text-primary'>Contact</strong> Us</motion.h2>&nbsp;
          <motion.p animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text' style={{ marginRight: "700px", color: "grey" }}>Just send us your questions or concerns, We will give you the help you need.
          </motion.p>&nbsp;
        </div>
      </header>
      <div className='container-fluid'>
        <motion.img animate={{ x: 100, y: -40 }} transition={{ ease: "easeOut", duration: 2 }} src='https://codedthemes.com/wp-content/uploads/2022/04/contact-us-banner-img.png.webp' style={{ width:"500px", height:"350px", marginLeft:"600px", marginTop:'-390px' }} alt=''></motion.img>
      </div>
      <br />
      <br />
      
      <div className='col-md-6' style={{marginLeft:"300px"}}>
       <h3 className='text-center'>Send us your message</h3><br/>
       <p className='text-center'style={{marginLeft:"70px"}}>Please use the form below to contact us if you have any questions or feedback regarding our products or services.</p><br/>
       <p className='text-center'style={{marginLeft:"20px"}}>For any Technical Product Related Support. Use our Support Panel</p><br/>
        <form onSubmit={ContactForm.handleSubmit}>
          <div className='form-group d-flex'>
          <label htmlFor="Name"></label>
          <span className='ms-4 fs-6 text-danger'>{ContactForm.errors.name}</span>
          <input type="text" className='form-control mb-4 shadow' style={{width:"350px", height:"60px" ,marginLeft:"55px"}} placeholder='Your Name' id='name'  onChange={ContactForm.handleChange} value={ContactForm.values.name}/>
          <label htmlFor="Email"></label>
          <span className='ms-4 fs-6 text-danger'>{ContactForm.errors.email}</span>
          <input type="text" className='form-control mb-4 shadow' style={{width:"350px",height:"60px", marginLeft:"5px"}} placeholder='Your Email' id='email'  onChange={ContactForm.handleChange} value={ContactForm.values.email}/>
          </div>
          <label htmlFor="Subject"></label>
          <span className='ms-4 fs-6 text-danger'>{ContactForm.errors.subject}</span>
          <input type='text' className='form-control mb-4 shadow' style={{marginLeft:"80px", width:"595px", height:"60px", marginTop:"-30px"}}  placeholder='Subject' id='subject'  onChange={ContactForm.handleChange} value={ContactForm.values.subject}/>
          <label htmlFor="Message"></label>
          <span className='ms-4 fs-6 text-danger'>{ContactForm.errors.message}</span>
          <textarea id="message" className='form-control mb-4 shadow' style={{height:"180px", width:"595px",marginLeft:"80px", marginTop:"-30px"}} placeholder='Your Message'  onChange={ContactForm.handleChange} value={ContactForm.values.message}/>
          <button className='btn btn-primary shadow' style={{marginLeft:"80px", height:"60px", width:"595px", fontSize:"22px"}} type='submit'>Submit</button>
        </form>
      </div>
      <br/><br/>
      
      

          
          
        


          
          








      
    </div>
  )
}

export default Contact
