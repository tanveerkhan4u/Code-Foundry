import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import useAppContext from '../AppContext';
import { jwtDecode } from "jwt-decode";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Log from './Log';
import Card from './Card';



const SignupSchema = Yup.object().shape({

  email: Yup.string().email('email is invalid').required(' Required'),
  password: Yup.string().required('Password is Required').min(8, 'Password is too short')
});

const Login = () => {

  const navigate = useNavigate();

  const { setloggedIn } = useAppContext();

  // const { setuserloggedIn } = useAppContext();


  const Loginform = useFormik({
    initialValues: {

      email: '',
      password: ''
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log(values);
      setSubmitting(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/user/authenticate`, {
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
        setloggedIn(true);
        resetForm();
        navigate('/Home');

      } else if (res.status === 401) {
        enqueueSnackbar('Invalid Email', { variant: 'error' });
      } else {
        enqueueSnackbar('Something went werong ', { variant: 'error' });
      }
    },
    validationSchema: SignupSchema
  });



  const googleSignup= async (credentialResponse) => {

    const emailRes = await fetch(`${import.meta.env.VITE_API_URL}/user/getbyemail/${credentialResponse.email}`);

    if (emailRes.status == 200) {

      const userData = await emailRes.json();
      enqueueSnackbar('Loggedin Successfully ', { variant: 'success' });
      sessionStorage.setItem('user', JSON.stringify(userData));
      setuserloggedIn(true);
      navigate('/')
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
        setuserloggedIn(true);
        navigate('/')
      } else {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      }
    }

  }




  return (
    <>
    <div className='w-full flex mx-auto md:flex-row  flex-col'>
      <div className='basis-1/2 mb-5'>
        <img src='https://codedthemes.com/wp-content/uploads/2022/04/sign-in-left-img-1.png.webp' className='mx-auto' alt='' />
      </div>
      <div className='basis-1/2 px-5'>
        <h1>uivbsjkcbdhwksdgbvikb</h1>
      </div>
      </div> 
      
    </>
  )
}

export default Login;



//  type='submit' onClick="Isremember me"












{/* <div className='container  d-flex'>
                 
<button2 className='google'>
  <GoogleOAuthProvider clientId="933596296606-mqbgnqrpol73pu5lr8pl06p1taahd745.apps.googleusercontent.com">
    <GoogleLogin
      onSuccess={credentialResponse => {
        const decoded = jwtDecode(credentialResponse.credential);
        console.log(decoded);
        googleSignup(decoded);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  </GoogleOAuthProvider>
</button2>
</div> */}






















