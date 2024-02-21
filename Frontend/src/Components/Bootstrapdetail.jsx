import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' 

const Bootstrapdetail = () => {
  return (
    <div >

      <header className='row d-flex' style={{ backgroundColor: "#dbedff" }}>
        <div className='col-md-6 py-5'>
          <motion.h2 animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text'><strong className='text-primary'>Bootstrap </strong> Admin Template</motion.h2>&nbsp;
          <motion.p animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text bootstrap' style={{ color:"grey" }}>Are you looking for a Bootstrap Admin Template, For your next project? You are at the right place. We are one of the Best Admin Dashboard makers in the market. Our team develops the<strong className='text' style={{ color: "grey" }}> most advanced, highly customizable </strong> Bootstrap Template. All our Admin Dashboards are fully responsive and tested on all retina devices. With  <strong className='text' style={{ color: "grey" }}> clean, bug-free and well comment code.</strong></motion.p>&nbsp;
          <motion.div animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='container-fluid d-flex justify-content-between'>
            <div className='row'>
              <input type="text" className="form-control" placeholder='Search...' style={{ width: "400px", padding: "15px" }} />
              <button className='btn btn-primary' style={{ position: "absolute", width: "100px", left: "290px", height: "45px", marginTop: "5px" }}>search</button>
            </div>
          </motion.div>
        </div>
      <div className='col-md-6'>
        <motion.img animate={{ x: 50, y: -40 }} transition={{ ease: "easeOut", duration: 2 }} src='https://codedthemes.com/wp-content/uploads/2022/04/Bootstrap-Banner.svg' className='w-100 mx-auto' alt=''></motion.img>
      </div>
      </header>
      <br />
      <br />
      <div className='conatiner-fluid'>
        <div className="row gy-4 justify-content-between">
          <div className="col-md-4">
      <Link to="/Exportstack/bootstrap" style={{textDecoration:"none"}}>
        <div className="card">
          <img src="https://codedthemes.com/wp-content/uploads/edd/2022/05/Empire-Bootstrap-4-Admin-Template.webp" className="card-img-top img-fluid mx-auto" alt="..." />
          <div className="card-body">
            <h5 className='text' >Bootstrap</h5>
          </div>
        </div>
        </Link>
        </div>
        <div className="col-md-4">
        <Link to="/Exportstack/bootstrap" style={{textDecoration:"none"}}>
        <div className="card">
          <img src="https://codedthemes.com/wp-content/uploads/edd/2022/05/Flash-Able-Bootstrap-4-Admin-Template.webp" className="card-img-top img-fluid mx-auto" alt="..." />
          <div className="card-body">
            <h5 className='text' >Bootstrap</h5>
          </div>
        </div>
        </Link>
        </div>
        <div className="col-md-4">
        <Link to="/Exportstack/bootstrap" style={{textDecoration:"none"}}>
        <div className="card">
          <img src="https://codedthemes.com/wp-content/uploads/edd/2022/05/Treva-Bootstrap-Admin-Template-UI-KIT.webp" className="card-img-top  img-fluid mx-auto " alt="..." />
          <div className="card-body">
            <h5 className='text' >Bootstrap</h5>
          </div>
        </div>
        </Link>
        </div>
        </div>
      </div>
      <br />
      <br />
      <div className='container-fluid'>
        <h2 className='text' style={{ marginLeft: "50px" }}>Bootstrap Admin Templates</h2><br />
        <p className='text' style={{ marginLeft: "50px" }}>It's a collection of web pages developed with <strong> HTML, CSS, and JavaScript. </strong>These ready-to-use pages are only used as a backend interface of web applications.<br /><br />

          A good admin template makes your task easy, and creates a <strong>responsive page </strong> layout in no time, in short, it’s time-saving and does not require a designer and When it comes to mobile-first web apps,<strong> Bootstrap </strong> is the best framework.<br /><br />

          Using a Template for your backend project can bring a marked difference to your website because where you can view the data, manage things, change trends, and record business statistics. </p>
      </div>
      <br />
      <div className='container-fluid'>
        <h2 className='text' style={{ marginLeft: "50px" }}>What does it Include?</h2><br />
        <p className='text' style={{ marginLeft: "50px" }}> A developer with the knowledge of HTML, CSS, & JavaScript can easily use this. You can use our template without any hesitation because it's developer-friendly.<br /><br />

          The template comes with well-written documentation that guides every step from installation to run. Furthermore, every template also includes a starter kit that will help you start your next project.<br /><br />

          If you are still in confusion then you may try our <strong>free bootstrap admin template.</strong> It helps to know our code quality. After that, you move to the premium ones which include more features that are necessary for your new project.</p>
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

export default Bootstrapdetail
