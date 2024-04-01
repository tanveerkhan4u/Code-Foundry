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



  const googleSignup = async (credentialResponse) => {

    const emailRes = await fetch(`${import.meta.env.VITE_API_URL}/user/getbyemail/${credentialResponse.email}`);

    if (emailRes.status == 200) {

      const userData = await emailRes.json();
      enqueueSnackbar('Loggedin Successfully ', { variant: 'success' });
      sessionStorage.setItem('user', JSON.stringify(userData));
      setloggedIn(true);
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
        setloggedIn(true);
        navigate('/Home')
      } else {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      }
    }

  }




  return (
    <>
      <form onSubmit={Loginform.handleSubmit}>
        <div className='flex mx-auto md:flex-row   flex-col bg-[#dbedff] '>

          <div className='basis-1/2 mb-5 '>
            <motion.img initial={{x: -100}} animate={{ x: 0, y: -10 }} transition={{ ease: "easeOut", duration: 2 }} src='https://codedthemes.com/wp-content/uploads/2022/04/sign-in-left-img-1.png.webp' className='mt-5 mx-auto  loimg' alt='' />
          </div>
          <div className="flex h-screen w-screen items-center -mt-10">

            {/* Login */}

            <div className="relative flex w-96 mx-8 flex-col space-y-5 rounded-lg border bg-white px-4 py-10 shadow-2xl sm:mx-auto z">
              <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg  sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0" />
              <div className="mx-auto mb-2 space-y-3">
                <h1 className="text-center text-4xl font-bold text-gray-700">Log In</h1>
                <p className="text-gray-500 text-xl">Log in to access your account</p>
              </div>

              <div>
                <div className="relative mt-2 w-full">

                  <input
                    type="text"
                    id="email"
                    defaultValue=""
                    className="border-3 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                    onChange={Loginform.handleChange} value={Loginform.values.email}
                  />
                  <label
                    htmlFor="email"
                    className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-xl text-gray-500 duration-300"
                  >
                    {" "}
                    Enter Your Email{" "}
                  </label>
                  <span className=' text-danger'>{Loginform.touched.email && Loginform.errors.email}</span>
                </div>
              </div>
              <div>
                <div className="relative mt-2 w-full">
                  <input
                    type="password"
                    id="password"
                    className="border-3 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" ••••••••"
                    onChange={Loginform.handleChange} value={Loginform.values.password}
                  />
                  <label
                    htmlFor="password"
                    className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-xl text-gray-500 duration-300"
                  >
                    {" "}
                    Enter Your Password
                  </label>
                  <span className=' text-danger'>{Loginform.touched.password && Loginform.errors.password}</span>
                </div>
              </div>
              <div className='google'>
                <GoogleOAuthProvider clientId="933596296606-mqbgnqrpol73pu5lr8pl06p1taahd745.apps.googleusercontent.com">
                  <GoogleLogin
                    type='button'
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
              </div>
              <div className="flex w-full items-center">
                <button type='submit' className="shrink-0 inline-block w-36 rounded-lg bg-[#6366F1] py-2 font-bold text-white text-xl">
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
      </form>

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






















