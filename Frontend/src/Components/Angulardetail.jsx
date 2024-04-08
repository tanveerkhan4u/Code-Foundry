import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Card from './Card';

const anguData = [
  {
    name: 'Angular',
    image: 'https://codedthemes.com/wp-content/uploads/edd/2022/05/Angular-Mega-Bundle.webp',
    link: '/Exportstack/angular',
    description : 'Mantis MUI Angular Dashboard Template'
  },
  {
    name: 'Angular',
    image: 'https://codedthemes.com/wp-content/uploads/edd/2022/11/Berry-Angular.png',
    link: '/Exportstack/angular',
    description : 'Berry MUI Angular Dashboard Template'
  },
  {
    name: 'Angular',
    image: 'https://codedthemes.com/wp-content/uploads/edd/2023/02/Mantis-Angular-15-Admin-Template.webp',
    link: '/Exportstack/angular',
    description : 'Materially Angular Admin Dashboard'
  },
];





const Angulardetail = () => {
  return (
    <div>
      <header className='flex mx-auto md:flex-row flex-col min-lg-screen   bg-[#dbedff]'>
        <div className='basis-1/2 mt-5 angutemp' >
          <motion.h2 animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-3xl'><strong className='text-primary'>Angular </strong> Admin Template</motion.h2>&nbsp;
          <motion.p animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-gray-500 text-md '>Are you looking for a Angular Admin Template, For your next project? You are at the right place. We are one of the Best Admin Dashboard makers in the market. Our team develops the<strong className='text' style={{ color: "grey" }}> most advanced, highly customizable </strong> Angular Template. All our Admin Dashboards are fully responsive and tested on all retina devices. With  <strong className='text' style={{ color: "grey" }}> clean, bug-free and well comment code.</strong></motion.p>&nbsp;
          <motion.div animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} >
            <div className='row'>
              <div className='col-md-9 mt-4'>
                <div className='input-group'>
                  <input type="text" className="form-control fs-5" placeholder='Search...' />
                  <button1 >Search</button1>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className='basis-1/2 anguimg'>
          <motion.img animate={{ x: 50, y: -100 }} transition={{ ease: "easeOut", duration: 2 }} src='https://codedthemes.com/wp-content/uploads/2022/04/Anular-Banner.svg' className='w-100 mx-auto' alt=''></motion.img>
        </div>
      </header>
      <br />
      <br />
      <div className='container'>
        <div className='row '>
          {
            anguData.map(data => (
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
        <h2 className='text' style={{ marginLeft: "50px" }}>Angular Admin Templates</h2><br />
        <p className='text' style={{ marginLeft: "50px" }}>Built a successful web application with an angular dashboard template. <strong>Angular</strong> is a full-fledged MVC framework, for creating a high-performance back-end panel. It is based on the typescript, which is more compact and error-free as well as its structure application and it provides a ready-to-use solution for every problem. Angular dashboard comes with striking UI Components, forms, pages, and application that makes it easy to create a website.<br /><br />

          These pre-built pages work with the web application to handle backend tasks such as tracking and managing users, website content, products, orders, bookings, appointments, and performance, etc. Angular admin dashboard delivers a bunch of <strong>responsive, customizable,</strong> and<strong> reusable components,</strong> so it helps to create a <strong>modern, good-looking, and responsive web apps.</strong></p>
      </div>
      <br />
      <div className='container-fluid'>
        <h2 className='text' style={{ marginLeft: "50px" }}>What does it Include?</h2><br />
        <p className='text' style={{ marginLeft: "50px" }}> The template comes with <strong> well-written documentation </strong> that guides every step from installation to run. Furthermore, every template also includes a starter kit that will help you start your project rather than removing unnecessary stuff.<br /><br />

          If you are still confused then you may try our <strong> Free angular admin template, </strong> so you can check our code quality. After that, you move to the premium ones which include more features that are necessary for your new project.</p>
      </div>
      <br />
      <div className='container-fluid'>
        <h3 className='text' style={{ marginLeft: "50px" }}>Some of our Features:</h3><br />
        <div className='container bg-light bg-gradient' style={{ marginLeft: "50px" }}>
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

export default Angulardetail
