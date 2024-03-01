import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import useAppContext from '../AppContext';
import { jwtDecode } from "jwt-decode";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'



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
      <div className='col-6  d-flex loimg' style={{ backgroundColor: "#dbedff", maxHeight: "540px" }}>

        <motion.img animate={{ x: -50, }} transition={{ ease: "easeOut", duration: 2 }} src='https://codedthemes.com/wp-content/uploads/2022/04/sign-in-left-img-1.png.webp' className='img-fluid mx-auto mb-5 px-5  ' alt='' />

        <div className='container-fluid' style={{ marginLeft: "30px" }}>
          <div className=' py-2'>
            <div className="container-fluid">



              <br /><br /><br />
              <form onSubmit={Loginform.handleSubmit}>
                <div className='container d-flex'>
                  <div className='google'>
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
                  </div>
                  <button className='btn btn-outline-primary shadow' onClick={(e) => loginWithRedirect()} style={{ marginTop: "-70px", marginLeft: "20px", width: "250px", height: "60px" }}><i class="fa-brands fa-linkedin"></i> &nbsp; Sign in With LinkedIn</button>
                </div>
                <h3 className='text-center' style={{ color: "grey", marginTop: "-30px" }}>OR</h3><br />
                <p className='text-center' style={{ fontSize: "25px" }}>Log into Your Account</p>

                <label htmlFor="" style={{ fontSize: "20px" }}>Email </label>
                <span className='ms-4 fs-6 text-danger'>{Loginform.errors.email}</span>
                <input type="text" className='form-control mb-4' id='email' onChange={Loginform.handleChange} value={Loginform.values.email} />
                <label htmlFor="" style={{ fontSize: "20px" }}>Password</label>
                <span className='ms-4 fs-6 text-danger'>{Loginform.errors.password}</span>
                <input type="password" className='form-control mb-4 ' id='password' onChange={Loginform.handleChange} value={Loginform.values.password} />

                <br />

                <input type='Checkbox' value='IsRemember me' className='mb-3' id='rememberme'></input>
                <label htmlFor='' style={{ marginTop: "-20px", marginLeft: "10px" }}> Remember me</label>

                <button className="btn-53 w-100 p-2" type='submit' onClick="Isremember me">
                  <div className="original" >Login</div>
                  <div className="letters">
                    <span>L</span>
                    <span>o</span>
                    <span>g</span>
                    <span>i</span>
                    <span>n</span>
                  </div>
                </button>


                {/* <button className='btn btn-outline-primary w-100' type='submit' onClick="Isremember me">Log In</button> */}

                <p className='text-center' style={{ marginTop: "20px" }}>Don't have an account? <a href='/Signup'>Sign Up</a></p>

                <br />
              </form>
            </div>
            <div className="col-md-9">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;



//  type='submit' onClick="Isremember me"


































