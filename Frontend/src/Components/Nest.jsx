import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' 
import Card from './Card';


const nestData = [
  {
    name: 'Nest JS',
    image: 'https://cdn.dribbble.com/users/2562056/screenshots/6251864/uikits.net_-_dashboard_freebies_04_4x.png?resize=400x300&vertical=center',
    link: '/Exportstack/nestJS',
    description : 'Mantis MUI NestJS Dashboard Template'
  },
  {
    name: 'Nest JS',
    image: 'https://cdn.dribbble.com/users/2562056/screenshots/6230816/uikits.net_-_dashboard_freebies_02_4x.png?resize=768x576&vertical=center',
    link: '/Exportstack/nestJS',
    description : 'Berry MUI NestJS Dashboard Template'
  },
  {
    name: 'Nest JS',
    image: 'https://cdn.dribbble.com/users/243145/screenshots/3383968/media/77881d81349ffb417e3e83ab7128f294.png?resize=768x576&vertical=center',
    link: '/Exportstack/nestJS',
    description : 'Materially NestJS Admin Dashboard'
  },
];


const Emberdetail = () => {
  return (
    <div>
      
      <header className='flex mx-auto md:flex-row flex-col min-lg-screen   bg-[#dbedff]'>
        <div className='basis-1/2  nestemp mt-5'>
          <motion.h2 animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-3xl '><strong className='text-primary'>Nest JS </strong> Admin Template</motion.h2>&nbsp;
          <motion.p animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-gray-500 text-md '>Nest JS is a productive, battle-tested JavaScript framework for building modern web applications. It includes everything you need to build rich UIs that work on any device.NestJS Admin can be installed on a project in a matter of minutes and used straight away with your existing entities.
          </motion.p>&nbsp;
          
          <motion.div animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} >
          <div className='row'>
            <div className='col-md-9 nestsearch'>
              <div className='input-group'>
                <input type="text" className="form-control fs-5" placeholder='Search...' />
                <button1 >Search</button1>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      <div className='basis-1/2 mt-10 lion'>
        <motion.img animate={{ x: 50, y: -20 }} transition={{ ease: "easeOut", duration: 2 }} src='https://miro.medium.com/v2/resize:fit:1358/1*s9kgU8F1eB7Tzs7sG0YhBg.jpeg' className=' w-fit h-80 img-fluid' alt=''></motion.img>
      </div>
      </header>
      <div className='container'>
        <div className='row '>
          {
            nestData.map(data => (
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































































































