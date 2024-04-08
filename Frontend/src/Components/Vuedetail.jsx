import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Card from './Card'; 


const vueData = [
  {
    name: 'Vue',
    image: 'https://codedthemes.com/wp-content/uploads/edd/2022/05/Materially-Free-Reactjs-Admin-Template.webp',
    link: '/Exportstack/vue',
    description : 'Mantis MUI Vue Dashboard Template'
  },
  {
    name: 'Vue',
    image: 'https://codedthemes.com/wp-content/uploads/edd/2022/05/Datta-Able-React-Admin-Template.webp',
    link: '/Exportstack/vue',
    description : 'Berry MUI Vue Dashboard Template'
  },
  {
    name: 'Vue',
    image: 'https://codedthemes.com/wp-content/uploads/edd/2022/05/Gradient-Able-Reactjs-Admin-Dashboard.webp',
    link: '/Exportstack/vue',
    description : 'Materially Vue Admin Dashboard'
  },
];




const Vuedetail = () => {
  return (
    <div>
      <header className='flex mx-auto md:flex-row flex-col min-lg-screen   bg-[#dbedff] '>
        <div className='basis-1/2 mt-5 vue' >
          <motion.h2 animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-3xl'><strong className='text-primary'>Vue </strong> Admin Template</motion.h2>&nbsp;
          <motion.p animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-gray-500 text-md'>Are you looking for a Vue Admin Template, For your next project? You are at the right place. We are one of the Best Admin Dashboard makers in the market. Our team develops the<strong className='text' style={{ color: "grey" }}> most advanced, highly customizable </strong> Vuejs Template. All our Admin Dashboards are fully responsive and tested on all retina devices. With  <strong className='text' style={{ color: "grey" }}> clean, bug-free and well comment code.</strong></motion.p>&nbsp;
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
      <div className='basis-1/2 vueimage'>
        <motion.img animate={{ x: 20, y: -40 }} transition={{ ease: "easeOut", duration: 2 }} src='https://codedthemes.com/wp-content/uploads/2022/11/vue-banner.svg' className='img-fluid mx-auto' alt=''></motion.img>
      </div>
      </header>
      <br />
      
      <div className='container'>
        <div className='row '>
          {
            vueData.map(data => (
              <div className="col-md-4 ">

                <Link to={data.link} className='text-decoration-none'>
                  <Card product={data}  />
                </Link>

              </div>
            ))
          }
        </div>
      </div>
      <br/>
      <div className='container-fluid'>
      <h2 className='text-3xl font-semibold ml-8'>Vue Admin Templates</h2><br />
      <p className='text ml-8'>Vue or <strong> VueJs </strong> is a free and open-source front-end JavaScript library for building UI. React dashboard Template are collection of web pages developed with <strong> HTML, CSS, and JavaScript.</strong> One can use these pre-built pages and perform such backend tasks like manage products, total earnings, orders, bookings, appointments, website content, performance, mail, review, etc. This beautiful admin template makes your backend task easy. We make the most advanced, highly customize, responsive, easy-to-use, and bug-free admin template.
      </p>
      </div>
      <br/>
      <div className='container-fluid'>
      <h2 className='text-3xl ml-8 font-semibold'>What does it Include?</h2><br />
      <p className='text ml-8'> The template comes with <strong> well-written documentation </strong>that guides every step from installation to run. Furthermore, every template also includes a <strong> starter kit </strong>that will help you to start your new project.
      </p> 
      </div>
      <br/>
      <div className='container'>
        <h3 className='text-2xl font-semibold' >Some of our Features:</h3><br />
        <div className='container bg-light bg-gradient mb-4'>
          <ul className='text'>
            

            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>Application Designs
            </li>
            
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>  Built with Sass Variables</li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>     Widgets</li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>  UI components </li>
            
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>Different types of dashboards</li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>Megamenu</li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>Font icons</li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>Completely responsive pages
            </li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}> Charts & tables</li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>Validation forms</li>
          </ul>
        </div>
      </div>























































































































    </div>
  )
}

export default Vuedetail
