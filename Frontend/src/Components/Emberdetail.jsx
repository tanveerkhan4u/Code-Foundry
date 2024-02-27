import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' 

const Emberdetail = () => {
  return (
    <div>
      
      <header className='row  d-flex ' style={{ backgroundColor: "#dbedff" }}>
        <div className='col-md-6 py-5 '>
          <motion.h2 animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text'><strong className='text-primary'>Ember </strong></motion.h2>&nbsp;
          <motion.p animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text ember' style={{color: "grey" }}>Ember.js is a productive, battle-tested JavaScript framework for building modern web applications. It includes everything you need to build rich UIs that work on any device.

          </motion.p>&nbsp;
          
          <motion.div animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} >
          <div className='row'>
            <div className='col-md-9 embersearch'>
              <div className='input-group'>
                <input type="text" className="form-control fs-5" placeholder='Search...' />
                <button1 >Search</button1>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      <div className='col-md-2 p-2 mt-5 ms-5'>
        <motion.img animate={{ x: 50, y: -20 }} transition={{ ease: "easeOut", duration: 2 }} src='https://blog.emberjs.com/images/logos/e-icon.png' className='img-fluid mx-auto tiger' alt=''></motion.img>
      </div>
      </header>
      <br />
      <br />
      <div className='conatiner-fluid'>
        <div className="row gy-4">
          <div className="col-md-4">
      <Link to="/Exportstack/ember" style={{textDecoration:"none"}}>
      <div className="card" >
          <img src="https://raw.githubusercontent.com/huxinghai1988/ember-adminlte-theme/master/preview.png"  className="card-img-top img-fluid mx-auto" alt="..." />
          <div className="card-body">
            <h5 className='text' >Ember</h5>
          </div>
        </div>
        </Link>
        </div>

        <div className="col-md-4">
      <Link to="/Exportstack/ember" style={{textDecoration:"none"}}>
      <div className="card" >
          <img src="https://raw.githubusercontent.com/huxinghai1988/ember-adminlte-theme/master/preview.png"  className="card-img-top img-fluid mx-auto" alt="..." />
          <div className="card-body">
            <h5 className='text' >Ember</h5>
          </div>
        </div>
        </Link>
        </div>
        <div className="col-md-4">
        <Link to="/Exportstack/ember" style={{textDecoration:"none"}}>
        <div className="card">
          <img src="https://5.imimg.com/data5/SELLER/Default/2021/6/NZ/HL/XM/4216320/hospital-management-software-500x500.png" className="card-img-top img-fluid mx-auto" alt="..." />
          <div className="card-body">
            <h5 className='text' >Ember</h5>
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































































































