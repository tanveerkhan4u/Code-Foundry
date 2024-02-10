import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Express = () => {
  return (
    <div>

      <header className='text-dark' style={{ backgroundColor: "#dbedff" }}>
        <div className='container-fluid py-5' style={{ height: "400px" }}>
          <motion.h2 animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text' style={{ marginTop: "50px" }}><strong className='text-primary'>NativeScript </strong> Admin Template</motion.h2>&nbsp;
          <motion.p animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text' style={{ marginRight: "700px", color: "grey" }}>
          NativeScript is an open-source framework to develop mobile apps on the iOS and Android platforms. It was originally conceived and developed by Progress. At the end of 2019 responsibility for the NativeScript project was taken over by long-time Progress partner, nStudio.
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
        <motion.img animate={{ x: 100, y: -40 }} transition={{ ease: "easeOut", duration: 2 }} src='https://upload.wikimedia.org/wikipedia/commons/8/86/NativeScript_Logo.png' style={{ width: "300px", height: "300px", marginLeft: "800px", marginTop: '-350px' }} alt=''></motion.img>
      </div>
      <br />
      <br />
      <div className='conatiner-fluid d-flex'>
        <Link to="/Exportstack/NativeScript" style={{ textDecoration: "none" }}>
          <div className="card" style={{ width: "25rem", marginLeft: "60px" }}>
            <img src="https://img.freepik.com/free-vector/dashboard-user-panel-template_52683-29382.jpg" style={{ height: "300px" }} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className='text' >NativeScript</h5>
            </div>
          </div>
        </Link>
        <Link to="/Exportstack/NativeScript" style={{ textDecoration: "none" }}>
          <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIV2TNxGF5vcfJSwejPKsRYd5OlwxkQmLGe1JoLWUxy6rILk3exFKZAvuYe7-jtxdRnDg&usqp=CAU" style={{ height: "300px", objectFit: 'cover' }} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className='text' >NativeScript</h5>
            </div>
          </div>
        </Link>
        <Link to="/Exportstack/NativeScript" style={{ textDecoration: "none" }}>
          <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
            <img src="https://lh5.googleusercontent.com/5Qdu2tUFOnTKgFW8FzdYUanMZ42SNMDkwzg6BBHkJHPIxP6WB6qwPHMSjKfwSsGmB5ACS6F76CHHPK2lgQw8p_NcBGCEtkYuDFEwSotuk84OjarURtHKBWDVHGVZo61AUkf3YRsRGPxRKQKQ6Vh5bVo" style={{ height: "300px", objectFit: 'cover' }} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className='text' >NativeScript</h5>
            </div>
          </div>
        </Link>
      </div>
      <br /><br />

    </div>
  )
}

export default Express
