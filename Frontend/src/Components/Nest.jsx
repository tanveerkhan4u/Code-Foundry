import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' 

const Emberdetail = () => {
  return (
    <div>
      
      <header className='text-dark' style={{ backgroundColor: "#dbedff" }}>
        <div className='container-fluid py-5' style={{ height: "400px" }}>
          <motion.h2 animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text' style={{ marginTop: "50px" }}><strong className='text-primary'>Nest JS </strong> Admin Template</motion.h2>&nbsp;
          <motion.p animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text' style={{ marginRight: "700px", color: "grey" }}>Nest JS is a productive, battle-tested JavaScript framework for building modern web applications. It includes everything you need to build rich UIs that work on any device.NestJS Admin can be installed on a project in a matter of minutes and used straight away with your existing entities.
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
        <motion.img animate={{ x: 100, y: -40 }} transition={{ ease: "easeOut", duration: 2 }} src='https://miro.medium.com/v2/resize:fit:1358/1*s9kgU8F1eB7Tzs7sG0YhBg.jpeg' style={{ width:"450px", height:"300px", marginLeft:"700px", marginTop:'-350px' }} alt=''></motion.img>
      </div>
      <br />
      <br />
      <div className='conatiner-fluid d-flex'>
      <Link to="/Exportstack/nestJS" style={{textDecoration:"none"}}>
      <div className="card" style={{ width: "25rem", marginLeft: "60px" }}>
          <img src="https://user-images.githubusercontent.com/7660346/180629352-f92216e3-7cf4-4fba-92fa-089dd96b4478.png" style={{height:"300px"}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className='text' >Nest JS</h5>
          </div>
        </div>
        </Link>
        <Link to="/Exportstack/nestJS" style={{textDecoration:"none"}}>
        <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
          <img src="https://jamstackthemes.dev/capture/wrappixel-xtreme-admin-nextjs-free.png"  style={{height:"300px",objectFit: 'cover'}}  className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className='text' >Nest JS</h5>
          </div>
        </div>
        </Link>
        <Link to="/Exportstack/nestJS" style={{textDecoration:"none"}}>
        <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*0aOOhYjMDiMHHTf0y8dB1Q.png"  style={{height:"300px",objectFit: 'cover'}}  className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className='text' >Nest JS</h5>
          </div>
        </div>
        </Link>
      </div>
      <br/><br/>

    </div>
  )
}

export default Emberdetail































































































