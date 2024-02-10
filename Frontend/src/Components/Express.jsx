import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Express = () => {
  return (
    <div>

      <header className='text-dark' style={{ backgroundColor: "#dbedff" }}>
        <div className='container-fluid py-5' style={{ height: "400px" }}>
          <motion.h2 animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text' style={{ marginTop: "50px" }}><strong className='text-primary'>Express JS </strong> Admin Template</motion.h2>&nbsp;
          <motion.p animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text' style={{ marginRight: "700px", color: "grey" }}>
            Express.js is a web application framework for Node.js that simplifies the process of building web applications and APIs. It provides a set of features and tools to make it easier to handle various aspects of web development, such as routing, middleware, and HTTP request/response handling.
          </motion.p>&nbsp;

          <motion.div animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='container-fluid d-flex justify-content-between'>
            <div className='row'>
              <input type="text" className="form-control" placeholder='Search...' style={{ width: "400px", padding: "15px" }} />
              <button className='btn btn-primary' style={{ position: "absolute", width: "100px", left: "290px", height: "45px", marginTop: "5px" }}>search</button>
            </div>
          </motion.div>
        </div>
      </header>
      <div className='container-fluid'>
        <motion.img animate={{ x: 100, y: -40 }} transition={{ ease: "easeOut", duration: 2 }} src='https://www.mashupstack.com/assets/image/course-images/mashupstack_expressjs.jpg?version=2.14' style={{ width: "450px", height: "300px", marginLeft: "700px", marginTop: '-350px' }} alt=''></motion.img>
      </div>
      <br />
      <br />
      <div className='conatiner-fluid d-flex'>
        <Link to="/Exportstack/express" style={{ textDecoration: "none" }}>
          <div className="card" style={{ width: "25rem", marginLeft: "60px" }}>
            <img src="https://adminlte.io/wp-content/uploads/2021/06/minible-nodejs-dashboard-template.jpg" style={{ height: "300px" }} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className='text' >Express.js</h5>
            </div>
          </div>
        </Link>
        <Link to="/Exportstack/express" style={{ textDecoration: "none" }}>
          <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
            <img src="https://adminlte.io/wp-content/uploads/2021/06/nodejs-dashboards.jpg" style={{ height: "300px", objectFit: 'cover' }} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className='text' >Express.js</h5>
            </div>
          </div>
        </Link>
        <Link to="/Exportstack/express" style={{ textDecoration: "none" }}>
          <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
            <img src="https://themeselection-cdn.b-cdn.net/wp-content/uploads/2019/11/veltrix-nodejs-admin-template.png" style={{ height: "300px", objectFit: 'cover' }} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className='text' >Express.js</h5>
            </div>
          </div>
        </Link>
      </div>
      <br /><br />

    </div>
  )
}

export default Express































































































