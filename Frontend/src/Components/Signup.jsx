import React from 'react'
import{ useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';



const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is Required').min(4, 'Name is too short'),
  email: Yup.string().email('email is invalid').required(' Required'),
  password: Yup.string().required('Password is Required').min(8, 'Password is too short')
});



const Signup = () => {

  const navigate = useNavigate();


const SignupForm = useFormik({
initialValues: {
name: '',
email: '',
password: ''
},
onSubmit: async(values,{setSubmitting, resetForm}) => {
  
  console.log(values);
  setSubmitting(true);
  const res = await fetch('http://localhost:5000/user/add', {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  );
  setSubmitting(false);

  if (res.status === 200) {
    enqueueSnackbar('Logged In Successfully', { variant: 'success' });

    const data = await res.json();

    sessionStorage.setItem('user', JSON.stringify(data));
    
    resetForm();
    navigate('/Login');

  } else if (res.status === 401) {
    enqueueSnackbar('Invalid Email', { variant: 'error' });
  } else {
    enqueueSnackbar('Something went werong ', { variant: 'error' });
  }
},
validationSchema: SignupSchema
});

return (
  <div className='vh-100 bg-body-secondary'>
    <div className='col-md-4 mx-auto py-5'>
      <div className='card'>
        <div className='card-body p-4'>
          <form onSubmit={SignupForm.handleSubmit}>
            <h2 className='text-center'>Sign up</h2>
            <hr/>
            <label htmlFor="">Name</label>
            <span className='ms-4 fs-6 text-danger'>{SignupForm.touched.name &&  SignupForm.errors.name}</span>
            <input type="text" className='form-control mb-4' id="name"  onChange={SignupForm.handleChange} value={SignupForm.values.name} />
            <label htmlFor="">Email Address</label>
            <span className='ms-4 fs-6 text-danger'>{SignupForm.touched.email &&  SignupForm.errors.email}</span>
            <input type="text" className='form-control mb-4' id="email"  onChange={SignupForm.handleChange} value={SignupForm.values.email} />
            <label htmlFor="">Password</label>
            <span className='ms-4 fs-6 text-danger'>{SignupForm.touched.password &&  SignupForm.errors.password}</span>
            <input type="text" className='form-control mb-4' id="password"  onChange={SignupForm.handleChange} value={SignupForm.values.password} />
            <button type='submit' className='btn btn-danger w-100 mt-3 rounded-pill'>Sign up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
)
}

export default Signup;



















