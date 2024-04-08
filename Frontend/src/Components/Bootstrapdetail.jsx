import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Card from './Card';

const bootData = [
  {
    name: 'Boottsrap',
    image: 'https://codedthemes.com/wp-content/uploads/edd/2022/05/Empire-Bootstrap-4-Admin-Template.webp',
    link: '/Exportstack/bootstrap',
    description : 'Mantis Bootstrap 5 Admin Dashboard'
  },
  {
    name: 'Bootstrap',
    image: 'https://codedthemes.com/wp-content/uploads/edd/2022/05/Flash-Able-Bootstrap-4-Admin-Template.webp',
    link: '/Exportstack/bootstrap',
    description : 'Berry Bootstrap 5 admin template'
  },
  {
    name: 'Bootstrap',
    image: 'https://codedthemes.com/wp-content/uploads/edd/2022/05/Treva-Bootstrap-Admin-Template-UI-KIT.webp',
    link: '/Exportstack/bootstrap',
    description : 'Materially Bootstrap 5 Admin Dashboard'
  },
];


const Bootstrapdetail = () => {
  return (
    <div >

      <header className='flex mx-auto md:flex-row flex-col min-lg-screen bg-[#dbedff]'>
        <div className='basis-1/2 mt-5   bootemp'>
          <motion.h2 animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-3xl'><strong className='text-primary'>Bootstrap </strong> Admin Template</motion.h2>&nbsp;
          <motion.p animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-gray-500 text-md ' >Are you looking for a Bootstrap Admin Template, For your next project? You are at the right place. We are one of the Best Admin Dashboard makers in the market. Our team develops the<strong className='text' style={{ color: "grey" }}> most advanced, highly customizable </strong> Bootstrap Template. All our Admin Dashboards are fully responsive and tested on all retina devices. With  <strong className='text' style={{ color: "grey" }}> clean, bug-free and well comment code.</strong></motion.p>&nbsp;
          <motion.div animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} >
            <div className='row'>
              <div className='col-md-9  mt-4'>
                <div className='input-group'>
                  <input type="text" className="form-control fs-5" placeholder='Search...' />
                  <button1 >Search</button1>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className='basis-1/2 '>
          <motion.img animate={{ x: 20, y: -40 }} transition={{ ease: "easeOut", duration: 2 }} src='https://codedthemes.com/wp-content/uploads/2022/04/Bootstrap-Banner.svg' className='w-100 mx-auto booimg' alt=''></motion.img>
        </div>
      </header>
      <br />
      <br />
      <div className='container'>
        <div className='row '>
          {
            bootData.map(data => (
              <div className="col-md-4 ">

                <Link to={data.link} className='text-decoration-none'>
                  <Card product={data}  />
                </Link>

              </div>
            ))
          }
        </div>
      </div>
      <br />
      <br />
      <div className='container-fluid'>
        <h2 className='text-3xl font-semibold ml-8' >Bootstrap Admin Templates</h2><br />
        <p className='text ml-8  ' >It's a collection of web pages developed with <strong> HTML, CSS, and JavaScript. </strong>These ready-to-use pages are only used as a backend interface of web applications.<br /><br />

          A good admin template makes your task easy, and creates a <strong>responsive page </strong> layout in no time, in short, it’s time-saving and does not require a designer and When it comes to mobile-first web apps,<strong> Bootstrap </strong> is the best framework.<br /><br />

          Using a Template for your backend project can bring a marked difference to your website because where you can view the data, manage things, change trends, and record business statistics. </p>
      </div>
      <br />
      <div className='container-fluid'>
        <h2 className='text-3xl ml-8 font-semibold'>What does it Include?</h2><br />
        <p className='text ml-8'> A developer with the knowledge of HTML, CSS, & JavaScript can easily use this. You can use our template without any hesitation because it's developer-friendly.<br /><br />

          The template comes with well-written documentation that guides every step from installation to run. Furthermore, every template also includes a starter kit that will help you start your next project.<br /><br />

          If you are still in confusion then you may try our <strong>free bootstrap admin template.</strong> It helps to know our code quality. After that, you move to the premium ones which include more features that are necessary for your new project.</p>
      </div>
      <br />
      <div className='container'>
        <h3 className='text-2xl font-semibold'>Some of our Features:</h3><br />
        <div className='container bg-light bg-gradient mb-4'>
          <ul className='text'>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}> Figma Dashboard pages</li>

            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>Application Designs
            </li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>RTL Dashboard</li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>  Built with Sass Variables</li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>     Widgets</li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>  UI components </li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>  Data Table export to PDF, Excel, CSV</li>
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

export default Bootstrapdetail
