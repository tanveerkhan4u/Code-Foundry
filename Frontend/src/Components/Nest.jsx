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
          
          <motion.div animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='container-fluid d-flex justify-content-between'>
            <div className='row search'>
              <input type="text" className="form-control" placeholder='Search...' style={{ width: "400px", padding: "15px" }} />
              <button className='btn btn-primary' style={{ position: "absolute", width: "100px", left: "290px", height: "45px", marginTop: "5px" }}>search</button>
            </div>
          </motion.div>
        </div>
      <div className='col-md-4 mt-5 lion'>
        <motion.img animate={{ x: 60, y: -10 }} transition={{ ease: "easeOut", duration: 2 }} src='https://miro.medium.com/v2/resize:fit:1358/1*s9kgU8F1eB7Tzs7sG0YhBg.jpeg' className='img-fluid mx-auto' alt=''></motion.img>
      </div>
      </header>
      <br />
      <br />
      <div className='conatiner-fluid'>
        <div className="row gy-4 justify-content-between">
          <div className="col-md-4">
      <Link to="/Exportstack/nestJS" style={{textDecoration:"none"}}>
      <div className="card" >
          <img src="https://user-images.githubusercontent.com/7660346/180629352-f92216e3-7cf4-4fba-92fa-089dd96b4478.png"  className="card-img-top img-fluid mx-auto" alt="..." />
          <div className="card-body">
            <h5 className='text' >Nest JS</h5>
          </div>
        </div>
        </Link>
        </div>
        <div className="col-md-4">
        <Link to="/Exportstack/nestJS" style={{textDecoration:"none"}}>
        <div className="card" >
          <img src="https://jamstackthemes.dev/capture/wrappixel-xtreme-admin-nextjs-free.png" className="card-img-top img-fluid mx-auto" alt="..." />
          <div className="card-body">
            <h5 className='text' >Nest JS</h5>
          </div>
        </div>
        </Link>
        </div>
        <div className="col-md-4">
        <Link to="/Exportstack/nestJS" style={{textDecoration:"none"}}>
        <div className="card" >
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*0aOOhYjMDiMHHTf0y8dB1Q.png" className="card-img-top img-fluid mx-auto" alt="..." />
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































































































