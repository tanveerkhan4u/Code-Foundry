import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' 



const Uikitdetail = () => {
  return (
    <div>
      <header className='flex mx-auto md:flex-row flex-col min-lg-screen   bg-[#dbedff] '>
        <div className='basis-1/2 mt-5  svesearch'>
          <motion.h2 animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-3xl'><strong className='text-primary'>Svelte</strong></motion.h2>&nbsp;
          <motion.p animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-gray-500 text-md'>Build a Website and landing page with a powerful Svelte by CodedFoundry.com. CodeFoundry Svelte helps you to create a modern design and useful elements with the help of Advance Template.
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


      <div className='basis-1/2'>
        <motion.img animate={{ x: 50, }} transition={{ ease: "easeOut", duration: 2 }} src='https://cdn.hashnode.com/res/hashnode/image/upload/v1619358925225/50e2XssdE.png' className='img-fluid mx-auto' alt=''></motion.img>
      </div>
      </header>
      <br />
      <br />
      <div className='conatiner-fluid'>
        <div className="row gy-4">
          <div className="col-md-4">
      <Link to="/Exportstack/svelte" style={{textDecoration:"none"}}>
        <div className="card" >
          <img src="https://blogct.creative-tim.com/blog/content/images/wordpress/2020/09/notus-svelte-768x576.jpg" className="card-img-top img-fluid mx-auto" alt="..." />
          <div className="card-body">
            <h5 className='text' >Svelte</h5>
          </div>
        </div>
        </Link>
        </div>
        <div className="col-md-4">
        <Link to="/Exportstack/svelte" style={{textDecoration:"none"}}>
        <div className="card">
          <img src="https://www.creative-tim.com/blog/content/images/wordpress/2020/09/svelte-admin-dashboard.jpg" className="card-img-top img-fluid mx-auto" alt="..." />
          <div className="card-body">
            <h5 className='text' >Svelte</h5>
          </div>
        </div>
        </Link>
        </div>
        <div className="col-md-4">
        <Link to="/Exportstack/svelte" style={{textDecoration:"none"}}>
        <div className="card">
          <img src="https://cdn.dribbble.com/users/4559563/screenshots/15877225/media/17b5e3e81445d5de8c24dd688cd3794f.png?resize=400x300&vertical=center"  className="card-img-top img-fluid mx-auto" alt="..." />
          <div className="card-body">
            <h5 className='text' >Svelte</h5>
          </div>
        </div>
        </Link>
        </div>
        </div>
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


















































































