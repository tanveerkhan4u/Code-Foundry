import React from 'react'
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';



const Feedback = () => {


  const FeedbackForm = useFormik({

    initialValues: {
        
      name: '',
      message: '',
      email: ''
    },
  

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log(values);
      setSubmitting(true);
      const res = await fetch('http://localhost:5000/feedback/add', {
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
    <div>
<div className='container-fluid' style={{backgroundColor:"#dbedff"}}><br/><br/>
<h1 className='text' style={{color:"red", marginLeft:"400px"}}><strong>Your Feedback Matters </strong></h1>
<p className='text-center mt-4' style={{ color:"grey", fontSize:"23px"}}>Please provide your feedback so that we can continue to improve our service.
</p><br/>
<form onSubmit={FeedbackForm.handleSubmit}>
     <div className='form-group mt-4'>
          <label htmlFor="Name"></label>
          <span className='ms-4 fs-6 text-danger'>{FeedbackForm.errors.name}</span>
          <input type="text" className='form-control shadow' style={{width:"570px", height:"60px", marginLeft:"350px", marginTop:"-30px"}} placeholder='Your Name' id='name' onChange={FeedbackForm.handleChange} value={FeedbackForm.values.name} />
          <label htmlFor="Email"></label>
          <span className='ms-4 fs-6 text-danger'>{FeedbackForm.errors.email}</span>
          <input type="text" className='form-control shadow' style={{width:"570px", height:"60px", marginLeft:"350px" }}  placeholder='Your Email' id='email'  onChange={FeedbackForm.handleChange} value={FeedbackForm.values.email}/>
          <label htmlFor="Message"></label>
          <span className='ms-4 fs-6 text-danger'>{FeedbackForm.errors.message}</span>
          <textarea id="message" className='form-control  shadow' style={{width:"570px", height:"180px", marginLeft:"350px" }}  placeholder='Your Message'   onChange={FeedbackForm.handleChange} value={FeedbackForm.values.message}/><br/>
          <button className='btn btn-primary shadow' style={{marginLeft:"350px", height:"60px", width:"570px", fontSize:"22px"}} type='submit'>Submit</button>
          </div>
     </form>
<br/> 
<br/><br/><br/>

</div>

    </div>
  )
}

export default Feedback
     












      
