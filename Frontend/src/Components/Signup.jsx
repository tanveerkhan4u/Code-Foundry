import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import useAppContext from '../AppContext';
import Log from './Log';


const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is Required').min(4, 'Name is too short'),
  email: Yup.string().email('email is invalid').required(' Required'),
  password: Yup.string().required('Password is Required').min(8, 'Password is too short')
});

const Signup = () => {

  const navigate = useNavigate();

  const {setloggedIn } = useAppContext();

  const SignupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },

    onSubmit: async (values, { setSubmitting, resetForm }) => {

      console.log(values);
      setSubmitting(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/user/add`, {
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


  const googleSignup = async (credentialResponse) => {

    const emailRes = await fetch(`${import.meta.env.VITE_API_URL}/user/getbyemail/${credentialResponse.email}`);

    if (emailRes.status == 200) {

      const userData = await emailRes.json();
      enqueueSnackbar('Loggedin Successfully ', { variant: 'success' });
      sessionStorage.setItem('user', JSON.stringify(userData));
      setloggedIn(true);
      navigate('/Home')
    } else {

      const res = await fetch(`${import.meta.env.VITE_API_URL}/user/add`, {
        method: 'POST',
        body: JSON.stringify({
          name: credentialResponse.name,
          email: credentialResponse.email,
          loginType: 'google'
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.status == 200) {
        enqueueSnackbar('Registered Successfully ', { variant: 'success' });
        const data = await res.json();
        sessionStorage.setItem('user', JSON.stringify(data));
        setloggedIn(true);
        navigate('/Home')
      } else {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      }
    }

  }



  return (
  <div className="container">
    <Log/>
  </div>
    )
  }
  
  export default Signup;
  
  
  // <div className='vh-100' style={{backgroundColor:"#dbedff"}}>

  //   <div className='col-md-4 mx-auto py-5'>
  //     <div className='card'>
  //       <div className='card-body p-4'>
  //         <form onSubmit={SignupForm.handleSubmit}>
  //           <h2 className='text-center'>Sign up</h2>
  //           <hr />
  //           <label htmlFor="">Name</label>
  //           <span className='ms-4 fs-6 text-danger'>{SignupForm.touched.name && SignupForm.errors.name}</span>
  //           <input type="text" className='form-control mb-4' id="name" onChange={SignupForm.handleChange} value={SignupForm.values.name} />
  //           <label htmlFor="">Email Address</label>
  //           <span className='ms-4 fs-6 text-danger'>{SignupForm.touched.email && SignupForm.errors.email}</span>
  //           <input type="text" className='form-control mb-4' id="email" onChange={SignupForm.handleChange} value={SignupForm.values.email} />
  //           <label htmlFor="">Password</label>
  //           <span className='ms-4 fs-6 text-danger'>{SignupForm.touched.password && SignupForm.errors.password}</span>
  //           <input type="text" className='form-control mb-4' id="password" onChange={SignupForm.handleChange} value={SignupForm.values.password} />
  //           <div className='google'>
  //             <GoogleOAuthProvider clientId="933596296606-mqbgnqrpol73pu5lr8pl06p1taahd745.apps.googleusercontent.com">
  //               <GoogleLogin
  //               type='button'
  //                 onSuccess={credentialResponse => {
  //                   const decoded = jwtDecode(credentialResponse.credential);
  //                   console.log(decoded);
  //                   googleSignup(decoded);
  //                 }}
  //                 onError={() => {
  //                   console.log('Login Failed');
  //                 }}
  //               />
  //             </GoogleOAuthProvider>
  //           </div>
  //           <button type='submit' className=' btn btn-danger w-100 mt-3 rounded-pill'>Sign up</button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // </div>

















