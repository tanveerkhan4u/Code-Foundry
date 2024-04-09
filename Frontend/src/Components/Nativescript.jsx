import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Card from './Card';


const nativeData = [
  {
    name: 'NativeScript',
    image: 'https://img.freepik.com/free-vector/dashboard-user-panel-template_52683-29382.jpg',
    link: '/Exportstack/NativeScript',
    description : 'Mantis MUI NativeScript Dashboard Template'
  },
  {
    name: 'NativeScript',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIV2TNxGF5vcfJSwejPKsRYd5OlwxkQmLGe1JoLWUxy6rILk3exFKZAvuYe7-jtxdRnDg&usqp=CAU',
    link: '/Exportstack/NativeScript',
    description : 'Berry MUI NativeScript Dashboard Template'
  },
  {
    name: 'NativeScript',
    image: 'https://lh5.googleusercontent.com/5Qdu2tUFOnTKgFW8FzdYUanMZ42SNMDkwzg6BBHkJHPIxP6WB6qwPHMSjKfwSsGmB5ACS6F76CHHPK2lgQw8p_NcBGCEtkYuDFEwSotuk84OjarURtHKBWDVHGVZo61AUkf3YRsRGPxRKQKQ6Vh5bVo',
    link: '/Exportstack/NativeScript',
    description : 'Materially NativeScript Admin Dashboard'
  },
];


const Express = () => {
  return (
    <div>

      <header className='flex mx-auto md:flex-row flex-col min-lg-screen bg-[#dbedff] gap-16'>
        <div className='basis-1/2 mt-5 native'>
          <motion.h2 animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-3xl'><strong className='text-primary'>NativeScript </strong> Admin Template</motion.h2>&nbsp;
          <motion.p animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-gray-500 text-md'>
          NativeScript is an open-source framework to develop mobile apps on the iOS and Android platforms. It was originally conceived and developed by Progress. At the end of 2019 responsibility for the NativeScript project was taken over by long-time Progress partner, nStudio.
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
      <div className='basis-1/2 mt-5 mb-5'>
        <motion.img animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} src='https://upload.wikimedia.org/wikipedia/commons/8/86/NativeScript_Logo.png' className='img-fluid w-80 h-80 nativeimg' alt=''></motion.img>
      </div>
      </header>
      <div className='container'>
        <div className='row '>
          {
            nativeData.map(data => (
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
