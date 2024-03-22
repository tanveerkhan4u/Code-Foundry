import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Reactdetail = () => {
  return (
    <div >

      <header className= 'flex mx-auto md:flex-row py-5 flex-col min-lg-screen container-fluid  bg-[#dbedff] '>

        <div className='basis-1/2 reactemp '>
          <motion.h2 animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-3xl ' ><strong className='text-primary'>React </strong> Admin Template</motion.h2>&nbsp;
          <motion.p animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text ' >Are you looking for a React Admin Template, For your next project? You are at the right place. We are one of the Best Admin Dashboard makers in the market. Our team develops the<strong className='text' style={{ color: "grey" }}> most advanced, highly customizable </strong> React Template. All our Admin Dashboards are fully responsive and tested on all retina devices. With  <strong className='text' style={{ color: "grey" }}> clean, bug-free and well comment code.</strong></motion.p>&nbsp;
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



        <div className='basis-1/2 reactimg '>
          <motion.img animate={{ x: 50, y: -40 }} transition={{ ease: "easeOut", duration: 2 }} src='https://codedthemes.com/wp-content/uploads/2022/04/React-Banner.svg' className='w-100 mx-auto ' alt=''></motion.img>
        </div>
      </header>
    
      <br />
      <br />
      <div className='container-fluid'>
        <div className='row gy-4 justify-content-between'>
          <div className='col-md-4'>
            <Link to="/Exportstack/react" style={{ textDecoration: "none" }}>
              <div className="card">
                <img src="https://codedthemes.com/wp-content/uploads/edd/2022/05/Materially-Free-Reactjs-Admin-Template.webp" className="card-img-top img-fluid mx-auto" alt="..." />
                <div className="card-body">
                  <h5 className='text' >React</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className='col-md-4 '>
            <Link to="/Exportstack/react" style={{ textDecoration: "none" }}>
              <div className="card" >
                <img src="https://codedthemes.com/wp-content/uploads/edd/2022/05/Datta-Able-React-Admin-Template.webp" className="card-img-top img-fluid mx-auto" alt="..." />
                <div className="card-body">
                  <h5 className='text' >React</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className='col-md-4'>
            <Link to="/Exportstack/react" style={{ textDecoration: "none" }}>
              <div className="card">
                <img src="https://codedthemes.com/wp-content/uploads/edd/2022/05/Gradient-Able-Reactjs-Admin-Dashboard.webp" className="card-img-top img-fluid mx-auto" alt="..." />
                <div className="card-body">
                  <h5 className='text' >React</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className='container-fluid'>
        <h2 className='text' >React Admin Templates</h2><br />
        <p className='text' style={{ marginLeft: "50px" }}>Well, <strong> React </strong> is a free and open-source front-end JavaScript library for building UI. React dashboard Template are collection of web pages developed with <strong> HTML, CSS, and JavaScript.</strong><br /><br />

          Our admin dashboard are built with <strong> Next.js and MUI  </strong>to provide the best developer experience with all the features you need for production. A ready template makes your developing task easy because you don’t wait for the designer to design for you. We develop <strong>responsive and fully customized  </strong>admin templates that will help you to create responsive web apps in no time.<br /><br />

          By using React Admin Dashboard your web app can get a stunning user interface effortlessly and create a simple view of state in your web application and react will efficiently render the right components when data is changed. The reason to use react is, it allows to view data in a faster way it doesn’t matter the size of the data. It renders time is fast.

          There are some of the benefits use react for you web app like Components, Virtual DOM, Single way data binding, Native approach, Easy texting and optimization.</p>
      </div>
      <br />
      <div className='container-fluid'>
        <h2 className='text' style={{ marginLeft: "50px" }}>What does it Include?</h2><br />
        <p className='text' style={{ marginLeft: "50px" }}> A developer with the knowledge of HTML, CSS, & JavaScript can easily use this without any hesitation because it's developer-friendly. The template comes with <strong> well-written documentation </strong> that guides every step from installation to run. Furthermore, every template also includes a starter kit that will help you start your project rather than removing unnecessary stuff.<br /><br />

          If you are still confused then you may try our <strong> Free react admin template, </strong> so you can check our code quality. After that, you move to the premium ones which include more features that are necessary for your new project.</p>
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
export default Reactdetail;







































































































