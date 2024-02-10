import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' 

const Vuedetail = () => {
  return (
    <div>
      <header className='text-dark' style={{ backgroundColor: "#dbedff" }}>
        <div className='container-fluid py-5' style={{ height: "500px" }}>
          <motion.h2 animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text' style={{ marginTop: "50px" }}><strong className='text-primary'>Vue </strong> Admin Template</motion.h2>&nbsp;
          <motion.p animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text' style={{ marginRight: "700px", color:"grey" }}>Are you looking for a Vue Admin Template, For your next project? You are at the right place. We are one of the Best Admin Dashboard makers in the market. Our team develops the<strong className='text' style={{ color: "grey" }}> most advanced, highly customizable </strong> Vuejs Template. All our Admin Dashboards are fully responsive and tested on all retina devices. With  <strong className='text' style={{ color: "grey" }}> clean, bug-free and well comment code.</strong></motion.p>&nbsp;
          <motion.div animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='container-fluid d-flex justify-content-between'>
            <div className='row'>
              <input type="text" className="form-control" placeholder='Search...' style={{ width: "400px", padding: "15px" }} />
              <button className='btn btn-primary' style={{ position: "absolute", width: "100px", left: "290px", height: "45px", marginTop: "5px" }}>search</button>
            </div>
          </motion.div>
        </div>
      </header>
      <div className='container-fluid'>
        <motion.img animate={{ x: 100, y: -40 }} transition={{ ease: "easeOut", duration: 2 }} src='https://codedthemes.com/wp-content/uploads/2022/11/vue-banner.svg' style={{ marginLeft: "700px", marginTop: "-550px" }} alt=''></motion.img>
      </div>
      <br />
      <br />
      <div className='conatiner-fluid d-flex'>
      <Link to="/Exportstack/vue" style={{textDecoration:"none"}}>
      <div className="card" style={{ width: "25rem", marginLeft: "60px" }}>
          <img src="https://codedthemes.com/wp-content/uploads/edd/2023/12/Mantis-free.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className='text' >Vue</h5>
          </div>
        </div>
        </Link>
        <Link to="/Exportstack/vue" style={{textDecoration:"none"}}>
        <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
          <img src="https://codedthemes.com/wp-content/uploads/edd/2022/11/Berry-vue.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className='text' >Vue</h5>
          </div>
        </div>
        </Link>
        <Link to="/Exportstack/vue" style={{textDecoration:"none"}}>
        <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
          <img src="https://codedthemes.com/wp-content/uploads/edd/2022/11/Berry-vue.png  " className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className='text' >Vue</h5>
          </div>
        </div>
        </Link>
      </div>
      <br/><br/>
      <div className='container-fluid'>
      <h2 className='text' style={{ marginLeft: "50px" }}>Vue Admin Templates</h2><br />
      <p className='text' style={{ marginLeft: "50px" }}>Vue or <strong> VueJs </strong> is a free and open-source front-end JavaScript library for building UI. React dashboard Template are collection of web pages developed with <strong> HTML, CSS, and JavaScript.</strong> One can use these pre-built pages and perform such backend tasks like manage products, total earnings, orders, bookings, appointments, website content, performance, mail, review, etc. This beautiful admin template makes your backend task easy. We make the most advanced, highly customize, responsive, easy-to-use, and bug-free admin template.
      </p>
      </div>
      <br/>
      <div className='container-fluid'>
      <h2 className='text' style={{ marginLeft: "50px" }}>What does it Include?</h2><br />
      <p className='text' style={{ marginLeft: "50px" }}> The template comes with <strong> well-written documentation </strong>that guides every step from installation to run. Furthermore, every template also includes a <strong> starter kit </strong>that will help you to start your new project.
      </p> 
      </div>
      <br/>
      <div className='container-fluid'>
        <h3 className='text' style={{ marginLeft: "50px" }}>Some of our Features:</h3><br />
        <div className='container bg-light bg-gradient' style={{ marginLeft: "50px" }}>
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
