import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useAppContext from '../AppContext'
import download from './images/download.png'



const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleclick = () => setClick(!click);


  const { loggedIn, logout } = useAppContext();


  const showLoginOptions = () => {
    if (loggedIn) {
      return (
        <button onClick={logout} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 py-2 text-sm fs-5 mt-4">Logout</button>
      )
    } else {
      return <>

        <NavLink
          to="/Login"
          className="hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-sm fs-5 mt-4"
        >
          Login
        </NavLink>


        <NavLink
          to="/Signup"
          className="hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-sm fs-5 mt-4"
        >
          Signup
        </NavLink>

      </>
    }
  }




  return (
    <div>


      <nav className="fixed top-0 left-0  z-[20] w-screen  bg-[#dbedff] lg:w-screen md:w-screen">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleclick}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {/*
        Icon when menu is closed.
  
        Menu open: "hidden", Menu closed: "block"
      */}
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/*
        Icon when menu is open.
  
        Menu open: "block", Menu closed: "hidden"
      */}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/Home">
                  <img
                    className="h-20 w-auto"
                    src={download}
                    alt="CodeFoundry"
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 ">
                  <NavLink
                    to="/Home"

                    className="hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-sm fs-5 mt-4"
                  >
                    Home

                  </NavLink>

                  {/* mega menu starts */}

                  <div className='group '>
                    <Link to="/Browsestack">
                      <button className=' hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-sm fs-5 mt-4 '>Browse Stack</button>
                    </Link>
                    <div className='hidden group-hover:flex flex-col absolute center-0 p-9 w-50 mt-3 bg-white z-20 text-black duration-300 shadow-3xl rounded-lg '>
                      <div className='grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 '>
                        <div className='flex flex-col md:flex-col '>
                          <h3 className='mb-4 text-2xl text-dark font-semibold'>Frontend Framewroks</h3>
                          <Link to="/Reactdetail" className=' hover:text-gray-500 flex text-lg '>
                            <img src="https://codedthemes.com/wp-content/uploads/2022/04/react-logo.jpg.webp" className='h-10 w-auto -ml-5 -mt-1 mb-2 mr-2' alt="" />
                            React</Link>
                          <Link to="/Bootstrapdetail" className=' hover:text-gray-500 flex text-lg'>
                            <img src="https://codedthemes.com/wp-content/uploads/2022/04/boostrap-logo.jpg.webp" className='h-10 w-auto -ml-5 -mt-1 mb-2 mr-3' alt="" />

                            Bootstrap</Link>
                          <Link to="/Angulardetail" className=' hover:text-gray-500 flex text-lg'>

                            <img src="https://codedthemes.com/wp-content/uploads/2022/04/angular-logo.jpg.webp" className='h-10 w-auto -ml-5 -mt-1 mb-2 mr-3' alt="" />
                            Angular</Link>
                          <Link to="/Vuedetail" className=' hover:text-gray-500 flex text-lg'>
                            <img src="https://masteringjs.io/assets/images/vue/vue.jpg" className='h-10 w-auto -ml-5 -mt-1 mb-2 mr-3' alt="" />

                            Vue</Link>
                          <Link to="/Emberdetail" className=' hover:text-gray-500 flex text-lg'>

                            <img src="https://emberjs.com/images/brand/ember-tomster-lockup-4c.svg" className='h-10 w-auto -ml-5 -mt-1 mb-2 mr-3' alt="" />
                            Ember
                          </Link>
                        </div>
                        <div className='flex flex-col md:flex-col '>
                          <h3 className='mb-4 text-2xl text-dark font-semibold'>Backend Framewroks</h3>
                          <Link to="/Express" className=' hover:text-gray-500 flex text-lg '>
                            <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" className='h-10 w-auto -ml-5 -mt-1 mb-2 mr-2' alt="" />
                            Express.js</Link>
                          <Link to="/Nest" className=' hover:text-gray-500 flex text-lg'>
                            <img src="https://static-00.iconduck.com/assets.00/nestjs-icon-2048x2040-3rrvcej8.png" className='h-10 w-auto -ml-5 -mt-1 mb-2 mr-3' alt="" />

                            Nest.js</Link>
                          <Link to="/Graphql" className=' hover:text-gray-500 flex text-lg'>

                            <img src="https://cdn.iconscout.com/icon/free/png-256/free-graphql-3521468-2944912.png" className='h-10 w-auto -ml-5 -mt-1 mb-2 mr-3' alt="" />
                            GraphQL</Link>
                          
                        </div>
                        <div className='flex flex-col md:flex-col '>
                          <h3 className='mb-4 text-2xl text-dark font-semibold  '>Mobile Applications</h3>
                          <Link to="/Nativescript" className=' hover:text-gray-500 flex text-lg '>
                            <img src="https://seeklogo.com/images/N/nativescript-logo-309BDE68D3-seeklogo.com.png" className='h-10 w-auto -ml-5 -mt-1 mb-2 mr-2' alt="" />
                            NativeScript</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* mega menu end */}
                          
                          
                       




                  <NavLink
                    to="/Contact"
                    className=" hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-sm fs-5 mt-4"
                  >
                    Contact Us
                  </NavLink>
                  <NavLink
                    to="/Feedback"
                    className="hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-sm fs-5 mt-4"
                  >
                    Feedback
                  </NavLink>

                  {showLoginOptions()}


                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              {/* Profile dropdown */}
              <div className="relative ml-3">

                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >


                  {/* <span className="absolute -inset-1.5" /> */}
                  {/* <span className="sr-only">Open user menu</span> */}

                </button>





              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}

        {click && (
          <div>
            <div className="sm:hidden bg-white" id="mobile-menu">
              <div className="space-y-1 px-2 pb-3 pt-2">

                <NavLink
                  to="/Home"
                  className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"

                >
                  Home
                </NavLink>
                <NavLink
                  to="/Browsestack"
                  className="text-gray-300 hover:bg-gray-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Browse Stack

                </NavLink>
                <NavLink
                  to="/Contact"
                  className="text-gray-300 hover:bg-gray-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Contact Us
                </NavLink>
                <NavLink
                  to="/Feedback"
                  className="text-gray-300 hover:bg-gray-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Feedback
                </NavLink>
                <NavLink
                  to="/Login"
                  className="text-gray-300 hover:bg-gray-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/Signup"
                  className="text-gray-300 hover:bg-gray-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Signup
                </NavLink>

              </div>
            </div>
          </div>
        )}
        <ul>


        </ul>
      </nav>
      <div className='mt-20 '>

      </div>

    </div>

  )
}

export default Navbar;