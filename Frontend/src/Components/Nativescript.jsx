import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Express = () => {
  return (
    <div>

      <header className='row ' style={{ backgroundColor: "#dbedff" }}>
        <div className='col-md-6  py-5'>
          <motion.h2 animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text'><strong className='text-primary'>NativeScript </strong> Admin Template</motion.h2>&nbsp;
          <motion.p animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text native' style={{color: "grey" }}>
          NativeScript is an open-source framework to develop mobile apps on the iOS and Android platforms. It was originally conceived and developed by Progress. At the end of 2019 responsibility for the NativeScript project was taken over by long-time Progress partner, nStudio.
          </motion.p>&nbsp;

          <motion.div animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} >
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
      <div className='col-md-3 ms-5 mt-3 nativeimg'>
        <motion.img animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} src='https://upload.wikimedia.org/wikipedia/commons/8/86/NativeScript_Logo.png' className='img-fluid mx-auto' alt=''></motion.img>
      </div>
      </header>
      <br />
      <br />
      <div className='conatiner-fluid'>
        <div className="row gy-4">
          <div className="col-md-4">
        <Link to="/Exportstack/NativeScript" style={{ textDecoration: "none" }}>
          <div className="card" >
            <img src="https://img.freepik.com/free-vector/dashboard-user-panel-template_52683-29382.jpg" style={{ height: "300px", objectFit:"cover" }} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className='text' >NativeScript</h5>
            </div>
          </div>
        </Link>
        </div>
        <div className="col-md-4">
        <Link to="/Exportstack/NativeScript" style={{ textDecoration: "none" }}>
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIV2TNxGF5vcfJSwejPKsRYd5OlwxkQmLGe1JoLWUxy6rILk3exFKZAvuYe7-jtxdRnDg&usqp=CAU" style={{ height: "300px", objectFit: 'cover' }} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className='text' >NativeScript</h5>
            </div>
          </div>
        </Link>
        </div>
        <div className="col-md-4">
        <Link to="/Exportstack/NativeScript" style={{ textDecoration: "none" }}>
          <div className="card" >
            <img src="https://lh5.googleusercontent.com/5Qdu2tUFOnTKgFW8FzdYUanMZ42SNMDkwzg6BBHkJHPIxP6WB6qwPHMSjKfwSsGmB5ACS6F76CHHPK2lgQw8p_NcBGCEtkYuDFEwSotuk84OjarURtHKBWDVHGVZo61AUkf3YRsRGPxRKQKQ6Vh5bVo" style={{ height: "300px", objectFit: 'cover' }} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className='text' >NativeScript</h5>
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
