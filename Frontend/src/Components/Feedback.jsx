import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';


const Feedback = () => {
  return (
    <div>
      
  
  
<div className='container-fluid' style={{backgroundColor:"#dbedff"}}><br/><br/>
<h1 className='text' style={{color:"red", marginLeft:"400px"}}><strong>Your Feedback Matters </strong></h1>
<p className='text-center mt-4' style={{ color:"grey", fontSize:"23px"}}>Please provide your feedback so that we can continue to improve our service.
</p><br/>
<form>
     <div className='form-group mt-4'>
          <label htmlFor="Name"></label>
    
          <input type="text" className='form-control shadow' style={{width:"570px", height:"60px", marginLeft:"350px", marginTop:"-30px"}} placeholder='Your Name' id='name'  />
          <label htmlFor="Email"></label>
  
          <input type="text" className='form-control shadow' style={{width:"570px", height:"60px", marginLeft:"350px" }}  placeholder='Your Email' id='email'  />
          <label htmlFor="Message"></label>
          <textarea id="message" className='form-control  shadow' style={{width:"570px", height:"180px", marginLeft:"350px" }}  placeholder='Your Message'   /><br/>
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
     












      
