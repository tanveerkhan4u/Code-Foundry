import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' 



const Uikitdetail = () => {
  return (
    <div>
      <header className='text-dark' style={{ backgroundColor: "#dbedff" }}>
        <div className='container-fluid py-5' style={{ height: "450px" }}>
          <motion.h2 animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text' style={{ marginTop: "50px" }}><strong className='text-primary'>Svelte</strong></motion.h2>&nbsp;
          <motion.p animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text' style={{ marginRight: "700px", color: "grey" }}>Build a Website and landing page with a powerful Svelte by CodedFoundry.com. CodeFoundry Svelte helps you to create a modern design and useful elements with the help of Advance Template.

          </motion.p>&nbsp;

          <motion.div animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='container-fluid d-flex justify-content-between'>
            <div className='row'>
              <input type="text" className="form-control" placeholder='Search...' style={{ width: "400px", padding: "15px" }} />
              <button className='btn btn-primary' style={{ position: "absolute", width: "100px", left: "290px", height: "45px", marginTop: "5px" }}>search</button>
            </div>
          </motion.div>
        </div>
      </header>
      <div className='container-fluid d-flex'>
        <motion.img animate={{ x: 100, y: -40 }} transition={{ ease: "easeOut", duration: 2 }} src='https://cdn.hashnode.com/res/hashnode/image/upload/v1619358925225/50e2XssdE.png' style={{height:"300px", marginLeft:"650px", marginTop:'-350px' }} alt=''></motion.img>
      </div>
      <br />
      <br />
      <div className='conatiner-fluid d-flex'>
      <Link to="/Exportstack/svelte" style={{textDecoration:"none"}}>
        <div className="card" style={{ width: "25rem", marginLeft: "60px" }}>
          <img src="https://blogct.creative-tim.com/blog/content/images/wordpress/2020/09/notus-svelte-768x576.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className='text' >Svelte</h5>
          </div>
        </div>
        </Link>
        <Link to="/Exportstack/svelte" style={{textDecoration:"none"}}>
        <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
          <img src="https://www.creative-tim.com/blog/content/images/wordpress/2020/09/svelte-admin-dashboard.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className='text' >Svelte</h5>
          </div>
        </div>
        </Link>
        <Link to="/Exportstack/svelte" style={{textDecoration:"none"}}>
        <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
          <img src="https://www.ui-themes.com/content/images/2021/04/image-17.png" style={{height:"300px",objectFit: 'cover'}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className='text' >Svelte</h5>
          </div>
        </div>
        </Link>
      </div>
      <br /><br />
      <div className='container-fluid'>
        <h2 className='text' style={{ marginLeft: "50px" }}>What is Svelte?</h2><br />
        <p className='text' style={{ marginLeft: "50px" }}>Svelte is an open-source JavaScript framework used for building user interfaces (UIs). It is designed to simplify the development process by shifting the work from the browser to the build step. Unlike traditional frameworks like React, Angular, or Vue, Svelte moves much of the framework code into a compile step before the application is delivered to the browser.
        </p>
      </div>
      <br />
      <div className='container-fluid'>
        <h2 className='text' style={{ marginLeft: "50px" }}>Why you have to use Svelte ?</h2><br />
        <p className='text' style={{ marginLeft: "50px" }}><strong>Performance :</strong> Svelte's build-time approach results in highly optimized and minimalistic JavaScript code, leading to smaller bundle sizes and improved runtime performance. This can contribute to faster load times and a better user experience.<br/>
        <strong>No Virtual DOM :</strong> Svelte does not rely on a virtual DOM, which eliminates the need for runtime diffing and patching. This can result in more efficient updates to the actual DOM, leading to improved performance compared to some virtual DOM-based frameworks.<br/>
        <strong>Reactivity :</strong> Svelte provides a reactive programming model that simplifies state management. Reactive updates are automatically handled, reducing the need for explicit state management code and making the development process more intuitive.<br/>
        <strong>Build-time Optimizations : </strong>  Svelte's compiler optimizes the code during the build process, enabling dead code elimination and other optimizations. This results in smaller bundle sizes and can lead to better performance in production.<br/></p>
      </div>


















































































    </div>
  )
}

export default Uikitdetail
