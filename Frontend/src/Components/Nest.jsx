import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' 

const Emberdetail = () => {
  return (
    <div>
      
      <header className='row  d-flex' style={{ backgroundColor: "#dbedff" }}>
        <div className='col-md-6 py-5'>
          <motion.h2 animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text'><strong className='text-primary'>Nest JS </strong> Admin Template</motion.h2>&nbsp;
          <motion.p animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text nest' style={{ color: "grey" }}>Nest JS is a productive, battle-tested JavaScript framework for building modern web applications. It includes everything you need to build rich UIs that work on any device.NestJS Admin can be installed on a project in a matter of minutes and used straight away with your existing entities.
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
      <div className='col-md-4 mt-5 lion'>
        <motion.img animate={{ x: 100, y: -10 }} transition={{ ease: "easeOut", duration: 2 }} src='https://miro.medium.com/v2/resize:fit:1358/1*s9kgU8F1eB7Tzs7sG0YhBg.jpeg' className='img-fluid mx-auto' alt=''></motion.img>
      </div>
      </header>
      <br />
      <br />
      <div className='conatiner-fluid'>
        <div className="row gy-4 ">
          <div className="col-md-4">
      <Link to="/Exportstack/nestJS" style={{textDecoration:"none"}}>
      <div className="card" >
          <img src="https://cdn.dribbble.com/users/2562056/screenshots/6251864/uikits.net_-_dashboard_freebies_04_4x.png?resize=400x300&vertical=center"  className="card-img-top img-fluid mx-auto" alt="..." />
          <div className="card-body">
            <h5 className='text' >Nest JS</h5>
          </div>
        </div>
        </Link>
        </div>
        <div className="col-md-4 ">
        <Link to="/Exportstack/nestJS" style={{textDecoration:"none"}}>
        <div className="card " >
          <img src="https://cdn.dribbble.com/users/2562056/screenshots/6230816/uikits.net_-_dashboard_freebies_02_4x.png?resize=768x576&vertical=center" className="card-img-top img-fluid mx-auto"  alt="..." />
          <div className="card-body">
            <h5 className='text' >Nest JS</h5>
          </div>
        </div>
        </Link>
        </div>
        <div className="col-md-4 ">
        <Link to="/Exportstack/nestJS" style={{textDecoration:"none"}}>
        <div className="card " >
          <img src="https://cdn.dribbble.com/users/243145/screenshots/3383968/media/77881d81349ffb417e3e83ab7128f294.png?resize=768x576&vertical=center" className="card-img-top img-fluid mx-auto" alt="..." />
          <div className="card-body">
            <h5 className='text' >Nest JS</h5>
          </div>
        </div>
        </Link>
        </div>
        </div>
      </div>
      <br/><br/>

    </div>
  )
}

export default Emberdetail































































































