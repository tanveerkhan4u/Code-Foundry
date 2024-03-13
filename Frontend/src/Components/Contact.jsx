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
    <div className='container-fluid'>
    
        <div className='row'>
    
            <div className='col-md-6' style={{backgroundColor:"#dbedff" , maxHeight: "540px" }}>
              <motion.h1 animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text mt-5 ms-5 text-4xl'><strong className='text-primary'>Contact</strong> Us</motion.h1>&nbsp;
              <motion.p animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text ms-5   cont'>Just send us your questions or concerns, We will give you the help you need.
              </motion.p>
              
              <motion.img animate={{ x: -20, y: -20 }} transition={{ ease: "easeOut", duration: 2 }} className='img-fluid mx-auto mt-5' src='https://codedthemes.com/wp-content/uploads/2022/04/contact-us-banner-img.png.webp' alt=''></motion.img>
          

              
      
              </div>
              <div className='col-md-5 ms-5'>
          <p className='text-center mt-4'>Please use the form below to contact us if you have any questions or feedback regarding our products or services.</p>
          <p className='text-center'>For any Technical Product Related Support. Use our Support Panel</p>
          
          <form   onSubmit={ContactForm.handleSubmit}>
            <div className="form-group ">
              {/* <label htmlFor="name">Name</label> */}
              <span className='ms-4 fs-6 text-danger '>{ContactForm.errors.name}</span>
              <input
                type="text"
                className="form-control fs-5 shadow "
                id="name"
                placeholder="Your Name" onChange={ContactForm.handleChange} value={ContactForm.values.name}
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="email">Email </label> */}
              <span className='ms-4 fs-6 text-danger'>{ContactForm.errors.email}</span>
              <input type='text' className='form-control fs-5 shadow ' id='email' placeholder='Your Email' onChange={ContactForm.handleChange} value={ContactForm.values.email} />
            </div>
            <div className="form-group">
              {/* <label htmlFor="subject">Subject</label> */}
              <span className='ms-4 fs-6 text-danger'>{ContactForm.errors.subject}</span>
              <input type='text' className='form-control fs-5  shadow' id='subject' placeholder= 'Your Subject'  onChange={ContactForm.handleChange} value={ContactForm.values.subject} />
            </div><br/>
            <div className="form-group">
              {/* <label htmlFor="message">Your Message</label> */}
              <textarea
                className="form-control  fs-5  shadow "
                id="message"
                placeholder='your message here...' onChange={ContactForm.handleChange} value={ContactForm.values.message}
                rows={3}
                defaultValue={""}
              />
            </div>
            <button1  className='w-full mt-5 text-center text-xl ' type='submit'>
              SUBMIT
              
              </button1><br/><br/>
          </form>
        </div>
            </div>
          
           
              
              
        
            
         
              
              
  
        
        
      

    
     

    </div>

  )
}

export default Contact






























