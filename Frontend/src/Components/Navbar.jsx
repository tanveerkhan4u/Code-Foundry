import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useAppContext from '../AppContext'
import download from './images/download.png'



const Navbar = () => {


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

      <nav className="fixed top-0 left-0 right-0 zINDEX w-screen  bg-[#dbedff] lg:w-screen md:w-screen">
       
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
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
                    className="hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-sm fs-5 mt-4 "
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/Browsestack"
                    className="hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-sm fs-5 mt-4"
                  >
                    Browse Stack
                  </NavLink>
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

        <div className="sm:hidden " id="mobile-menu">
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
        <ul>


        </ul>
      </nav>
      <div>
        <div className="mt-20"></div>
        
      </div>
    </div>

  )
}

export default Navbar