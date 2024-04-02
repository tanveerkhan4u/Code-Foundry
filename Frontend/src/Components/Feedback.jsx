import React, { useState } from 'react'
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
      const res = await fetch(`${import.meta.env.VITE_API_URL}/feedback/add`, {
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
      <div className='container-fluid' style={{ backgroundColor: "#dbedff" }}><br /><br />
        <h1 className='text-center'><strong>Your Feedback Matters </strong></h1>
        <p className='text-center text-muted mt-4 fs-5'>Please provide your feedback so that we can continue to improve our service.
        </p><br />
        <form onSubmit={FeedbackForm.handleSubmit}>
          <div className='form-group -mt-8 col-md-4 mx-auto '>

          
            <label htmlFor="Name"></label>
            <span className='ms-4 fs-6 text-danger'>{FeedbackForm.errors.name}</span>
            <input type="text" className='form-control form-control-lg shadow mt-4' placeholder='Your Name' id='name' onChange={FeedbackForm.handleChange} value={FeedbackForm.values.name} />
            <label htmlFor="Email"></label>
            <span className='ms-4 fs-6 text-danger'>{FeedbackForm.errors.email}</span>
            <input type="text" className='form-control form-control-lg shadow  mt-4'  placeholder='Your Email' id='email' onChange={FeedbackForm.handleChange} value={FeedbackForm.values.email} />
            <label htmlFor="Message"></label>
            <span className='ms-4 fs-6 text-danger'>{FeedbackForm.errors.message}</span>
            <textarea id="message" className='form-control form-control-lg  shadow  mt-4'  placeholder='Your Message' onChange={FeedbackForm.handleChange} value={FeedbackForm.values.message} /><br />
            <button type="submit" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-xl w-full px-5 py-2.5 text-center me-2 mb-2 mt-4">Submit</button>
          </div>
        </form>
        <br />
        <br /><br /><br />
      </div>
    </div>
  )
}

export default Feedback
























