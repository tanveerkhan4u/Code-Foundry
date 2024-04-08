import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Card from './Card';


const expressData = [
  {
    name: 'ExpressJS',
    image: 'https://adminlte.io/wp-content/uploads/2021/06/minible-nodejs-dashboard-template.jpg',
    link: '/Exportstack/express',
    description : 'Mantis MUI ExpressJS Dashboard Template'
  },
  {
    name: 'ExpressJS',
    image: 'https://adminlte.io/wp-content/uploads/2021/06/nodejs-dashboards.jpg',
    link: '/Exportstack/express',
    description : 'Berry MUI ExpressJS Dashboard Template'
  },
  {
    name: 'ExpressJS',
    image: 'https://themeselection-cdn.b-cdn.net/wp-content/uploads/2019/11/veltrix-nodejs-admin-template.png',
    link: '/Exportstack/express',
    description : 'Materially ExpressJS Admin Dashboard'
  },
];







const Express = () => {
  return (
    <div>

      <header className='flex mx-auto md:flex-row flex-col min-lg-screen bg-[#dbedff] gap-5'>
        <div className='basis-1/2 mt-5 exptemp'>
          <motion.h2 animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-3xl' ><strong className='text-primary'>Express JS </strong> Admin Template</motion.h2>&nbsp;
          <motion.p animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-gray-500 text-md'>
            Express.js is a web application framework for Node.js that simplifies the process of building web applications and APIs. It provides a set of features and tools to make it easier to handle various aspects of web development, such as routing, middleware, and HTTP request/response handling.
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
      <div className='basis-1/2 mt-5'>
        <motion.img animate={{ x: 20, y:-20 }} transition={{ ease: "easeOut", duration: 2 }} src='https://www.mashupstack.com/assets/image/course-images/mashupstack_expressjs.jpg?version=2.14' className='img-fluid w-fit h-80 expressimg' alt=''></motion.img>
      </div>
      </header>
      <div className='container'>
        <div className='row '>
          {
            expressData.map(data => (
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

export default Express































































































