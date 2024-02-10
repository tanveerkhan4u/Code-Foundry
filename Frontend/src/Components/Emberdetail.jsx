import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' 

const Emberdetail = () => {
  return (
    <div>
      
      <header className='text-dark' style={{ backgroundColor: "#dbedff" }}>
        <div className='container-fluid py-5' style={{ height: "400px" }}>
          <motion.h2 animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text' style={{ marginTop: "50px" }}><strong className='text-primary'>Ember </strong></motion.h2>&nbsp;
          <motion.p animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text' style={{ marginRight: "700px", color: "grey" }}>Ember.js is a productive, battle-tested JavaScript framework for building modern web applications. It includes everything you need to build rich UIs that work on any device.

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
        <motion.img animate={{ x: 100, y: -40 }} transition={{ ease: "easeOut", duration: 2 }} src='https://blog.emberjs.com/images/logos/e-icon.png' style={{ width:"300px", height:"250px", marginLeft:"700px", marginTop:'-350px' }} alt=''></motion.img>
      </div>
      <br />
      <br />
      <div className='conatiner-fluid d-flex'>
      <Link to="/Exportstack/ember" style={{textDecoration:"none"}}>
      <div className="card" style={{ width: "25rem", marginLeft: "60px" }}>
          <img src="https://raw.githubusercontent.com/huxinghai1988/ember-adminlte-theme/master/preview.png" style={{height:"300px",objectFit: 'cover'}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className='text' >Ember</h5>
          </div>
        </div>
        </Link>
        <Link to="/Exportstack/ember" style={{textDecoration:"none"}}>
        <div className="card" style={{ width: "25rem", marginLeft: "60px" }}>
          <img src="https://www.drupal.org/files/project-images/Screen%20Shot%202013-09-06%20at%2012.46.00%20PM.png"  style={{height:"300px",objectFit: 'cover'}}  className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className='text' >Ember</h5>
          </div>
        </div>
        </Link>
      </div>
      <br/><br/>

    </div>
  )
}

export default Emberdetail































































































