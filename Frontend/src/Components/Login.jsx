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
import { NavLink } from 'react-router-dom'



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
    <div className='flex mx-auto md:flex-row  flex-col'>
      <div className='basis-1/2 mb-5'>
        <img src='https://codedthemes.com/wp-content/uploads/2022/04/sign-in-left-img-1.png.webp' className='mx-auto ' alt='' />
      </div>
      <div className="flex h-screen w-screen items-center -mt-10">
  {/* Login */}
  <div className="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-4 py-10 shadow-xl sm:mx-auto">
    <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-blue-100 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0" />
    <div className="mx-auto mb-2 space-y-3">
      <h1 className="text-center text-3xl font-bold text-gray-700">Sign in</h1>
      <p className="text-gray-500">Sign in to access your account</p>
    </div>
    <div>
      <div className="relative mt-2 w-full">
        <input
          type="text"
          id="email"
          defaultValue="email@gmail.com"
          className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
        >
          {" "}
          Enter Your Email{" "}
        </label>
      </div>
    </div>
    <div>
      <div className="relative mt-2 w-full">
        <input
          type="text"
          id="password"
          className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder=" "
        />
        <label
          htmlFor="password"
          className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
        >
          {" "}
          Enter Your Password
        </label>
      </div>
    </div>
    <div className="flex w-full items-center">
      <button className="shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white">
        Login
      </button>
      <a
        className="w-full text-center text-sm font-medium text-gray-600 hover:underline"
        href="#"
      >
        Forgot your password?
      </a>
    </div>
    <p className="text-center text-gray-600">
      Don't have an account?
      <NavLink
        to="/Signup"
        className="whitespace-nowrap font-semibold text-gray-900 hover:underline ml-4"
      >
        Sign up
      </NavLink>
    </p>
  </div>
  {/* /Login */}
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






















