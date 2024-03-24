import React from 'react'
import Itemscontainer from './Itemscontainer'
import SocialIcon from './SocialIcon'
import { Icons } from './Menu'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import download from './images/download.png'

  
const Footer = () => {
  return (<footer className="bg-gray-900 text-white">
    <div className='md:flex  md: justify-between md:items-center sm: px-12 px-4 bg-[#dbedff] py-7 '>
      <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 flex  text-dark justify-center'><span className=''><Link to='/Home'><img src={download} className='h-24 w-auto -mt-5' alt='' /></Link></span >Code Foundry</h1>
      <div>
        <input type='email ' placeholder='Enter your email ' className='text-white-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none bg-[#181F76] text-lg' />
        <button  className='bg-[#3A9EFD] hover:bg-cyan-600 duration-300 px-5 py-2.5 font-[popins] rounded-md text-white text-xl md:w-auto w-full'>Submit</button>
      </div>
    </div>
    <Itemscontainer />
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-4 text-gray-400 text-lg pb-8 px-4"
    >
      <span>© 2024 Appy. All rights reserved.</span>
      <span>Terms · Privacy Policy</span>
      <SocialIcon Icons={Icons} />
    </div>
  </footer>
  )
}

export default Footer
