import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import useAppContext from '../AppContext';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom'



const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is Required').min(4, 'Name is too short'),
  email: Yup.string().email('email is invalid').required(' Required'),
  password: Yup.string().required('Password is Required').min(8, 'Password is too short')
});

const Signup = () => {

  const navigate = useNavigate();

  const { setloggedIn } = useAppContext();

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
    <>
      <div className="flex mx-auto md:flex-row  flex-col min-h-screen  bg-[#dbedff]">
        <div className='basis-1/2'>
          <motion.img animate={{ x: 100, y: 20 }} transition={{ ease: "easeOut", duration: 2 }} src='https://i0.wp.com/stackdigi.com/storage/2020/04/logo-design.png?w=351&ssl=1' className='mx-auto mt-5 soimg' alt='' />
        </div>
        <div className='basis-1/2'>
          <section className=" dark:bg-gray-900 ">
            <motion.div animate={{ x: -50, y: 20 }} transition={{ ease: "easeOut", duration: 2 }} className="flex flex-col   px-6 py-8 mx-auto md:h-screen lg:py-0   simg ">

              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign up to your account
                  </h1>
                  <form onSubmit={SignupForm.handleSubmit}>
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                      >
                        Your Name
                      </label>
                      <span className=' text-danger'>{SignupForm.touched.name && SignupForm.errors.name}</span>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
                        placeholder="Enter Your Name"
                        required=""
                        onChange={SignupForm.handleChange} value={SignupForm.values.name}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                      >
                        Your Email
                      </label>
                      <span className=' text-danger'>{SignupForm.touched.email && SignupForm.errors.email}</span>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
                        placeholder="Enter Your Email"
                        required=""
                        onChange={SignupForm.handleChange} value={SignupForm.values.email}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <span className=' text-danger'>{SignupForm.touched.password && SignupForm.errors.password}</span>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        onChange={SignupForm.handleChange} value={SignupForm.values.password}
                      />
                    </div>

                    <div className="flex items-start mt-3">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          aria-describedby="terms"
                          type="checkbox"
                          className="w-5 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 mt-1"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-md">
                        <label
                          htmlFor="terms"
                          className="font-light text-gray-500 dark:text-gray-300 text-md"
                        >
                          I accept the{" "}
                          <a
                            className="font-medium text-blue-700 hover:underline dark:text-primary-500"
                            href="#"
                          >
                            Terms and Conditions
                          </a>
                        </label>
                      </div>
                    </div>
                    <button type='submit' className="shrink-0 inline-block w-full rounded-lg bg-[#6366F1] py-2 font-medium text-white text-md mt-2">
                      Create an Account
                    </button>
                    <p className="text-lg font-light text-gray-500 dark:text-gray-400 mt-3">
                      Already have an account ?{" "}
                      <NavLink
                        to="/Login"
                        className="font-medium text-blue-600 hover:underline dark:text-primary-500 ml-3"
                      >
                        Login here
                      </NavLink>
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </section>

        </div>



      </div>
    </>

  )
}

export default Signup;

{/* // <div className='vh-100' style={{backgroundColor:"#dbedff"}}>
  
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
             <button type='submit' className=' btn btn-danger w-100 mt-3 rounded-pill'>Sign up</button>
           </form>
         </div>
       </div>
     </div>
   </div> */}


















