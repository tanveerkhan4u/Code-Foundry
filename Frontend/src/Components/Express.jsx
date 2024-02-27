import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Express = () => {
  return (
    <div>

      <header className='row d-flex' style={{ backgroundColor: "#dbedff" }}>
        <div className='col-md-6 py-5'>
          <motion.h2 animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text' ><strong className='text-primary'>Express JS </strong> Admin Template</motion.h2>&nbsp;
          <motion.p animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text express' style={{color: "grey" }}>
            Express.js is a web application framework for Node.js that simplifies the process of building web applications and APIs. It provides a set of features and tools to make it easier to handle various aspects of web development, such as routing, middleware, and HTTP request/response handling.
          </motion.p>&nbsp;

          <motion.div animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} >
          <div className='row'>
            <div className='col-md-9 exsearch'>
              <div className='input-group'>
                <input type="text" className="form-control fs-5" placeholder='Search...' />
                <button1 >Search</button1>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      <div className='col-md-4 mt-5 expressimg'>
        <motion.img animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} src='https://www.mashupstack.com/assets/image/course-images/mashupstack_expressjs.jpg?version=2.14' className='img-fluid mx-auto' alt=''></motion.img>
      </div>
      </header>
      <br />
      <br />
      <div className='conatiner-fluid'>
        <div className="row gy-4">
          <div className="col-md-4">
          <Link to="/Exportstack/express" style={{ textDecoration: "none" }}>
            <div className="card" >
              <img src="https://adminlte.io/wp-content/uploads/2021/06/minible-nodejs-dashboard-template.jpg" style={{ height: "300px" , objectFit:"cover"}} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className='text' >Express.js</h5>
              </div>
            </div>
          </Link>
          </div>
          <div className="col-md-4">
          <Link to="/Exportstack/express" style={{ textDecoration: "none" }}>
            <div className="card" >
              <img src="https://adminlte.io/wp-content/uploads/2021/06/nodejs-dashboards.jpg" style={{ height: "300px", objectFit: 'cover' }} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className='text' >Express.js</h5>
              </div>
            </div>
          </Link>
          </div>
          <div className="col-md-4">
          <Link to="/Exportstack/express" style={{ textDecoration: "none" }}>
            <div className="card" >
              <img src="https://themeselection-cdn.b-cdn.net/wp-content/uploads/2019/11/veltrix-nodejs-admin-template.png" style={{ height: "300px", objectFit: 'cover' }} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className='text' >Express.js</h5>
              </div>
            </div>
          </Link>
          </div>
        </div>
      </div>
      <br /><br />

    </div>
  )
}

export default Express































































































