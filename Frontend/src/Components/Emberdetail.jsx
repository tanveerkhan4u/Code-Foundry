import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' 
import Card from './Card';

const emberData = [
  {
    name: 'Ember',
    image: 'https://codedthemes.com/wp-content/uploads/edd/2022/05/Materially-Free-Reactjs-Admin-Template.webp',
    link: '/Exportstack/ember',
    description : 'Mantis MUI Ember Dashboard Template'
  },
  {
    name: 'Ember',
    image: 'https://codedthemes.com/wp-content/uploads/edd/2022/05/Datta-Able-React-Admin-Template.webp',
    link: '/Exportstack/ember',
    description : 'Berry MUI Ember Dashboard Template'
  },
  {
    name: 'Ember',
    image: 'https://codedthemes.com/wp-content/uploads/edd/2022/05/Gradient-Able-Reactjs-Admin-Dashboard.webp',
    link: '/Exportstack/ember',
    description : 'Materially Ember Admin Dashboard'
  },
];





const Emberdetail = () => {
  return (
    <div>
      
      <header className='flex mx-auto md:flex-row flex-col min-lg-screen   bg-[#dbedff]'>
        <div className='basis-1/2 mt-5 ember '>
          <motion.h2 animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-3xl '><strong className='text-primary'>Ember </strong></motion.h2>&nbsp;
          <motion.p animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-gray-500 text-md '>Ember.js is a productive, battle-tested JavaScript framework for building modern web applications. It includes everything you need to build rich UIs that work on any device.

          </motion.p>&nbsp;
          
          <motion.div animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} >
          <div className='row'>
            <div className='col-md-9 '>
              <div className='input-group'>
                <input type="text" className="form-control fs-5" placeholder='Search...' />
                <button1 >Search</button1>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      <div className='basis-1/2  mt-5'>
        <motion.img animate={{ x: 50, y: -20 }} transition={{ ease: "easeOut", duration: 2 }} src='https://blog.emberjs.com/images/logos/e-icon.png' className='img-fluid mx-auto tiger  w-96 h-70' alt=''></motion.img>
      </div>
      </header>
      <div className='container'>
        <div className='row '>
          {
            emberData.map(data => (
              <div className="col-md-4 ">

                <Link to={data.link} className='text-decoration-none'>
                  <Card product={data}  />
                </Link>

              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Emberdetail































































































