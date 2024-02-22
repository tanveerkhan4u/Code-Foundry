import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Laraveldetail = () => {
  return (
    <div>

      <header className='row  d-flex' style={{ backgroundColor: "#dbedff" }}>
        <div className='col-md-6 py-5'>
          <motion.h2 animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text'><strong className='text-primary'>Solid </strong></motion.h2>&nbsp;
          <motion.p animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text solid' style={{color: "grey" }}>SolidJS is a declarative JavaScript library for building user interfaces. It is similar to other front-end libraries and frameworks like React and Vue but has its own approach to reactive programming.

            SolidJS focuses on fine-grained reactivity, meaning that it efficiently updates only the parts of the DOM that need to change rather than re-rendering the entire component. This can lead to improved performance in certain scenarios.</motion.p>&nbsp;

          <motion.div animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='container-fluid d-flex justify-content-between'>
            <div className='row'>
              <input type="text" className="form-control" placeholder='Search...' style={{ width: "400px", padding: "15px" }} />
              <button className='btn btn-primary' style={{ position: "absolute", width: "100px", left: "290px", height: "45px", marginTop: "5px" }}>search</button>
            </div>
          </motion.div>
        </div>
      <div className='col-md-4 mt-5 mx-5 solidimage'>
        <motion.img animate={{ x: 50, }} transition={{ ease: "easeOut", duration: 2 }} src='https://miro.medium.com/v2/resize:fit:1400/1*Iv6xrlsGg8ksHXyOGnbqbg.png' className='img-fluid mx-auto'   alt=''></motion.img>
      </div>
      </header>
      <br />
      <br />
      <div className='conatiner-fluid'>
        <div className="row gy-4">
          <div className="col-md-4">
        <Link to="/Exportstack/solid" style={{ textDecoration: "none" }}>
          <div className="card">
            <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/concept-free-admin-dashboard-panel.jpg" className="card-img-top img-fluid mx-auto" alt="..." />
            <div className="card-body">
              <h5 className='text' >Solid</h5>
            </div>
          </div>
        </Link>
        </div>
        <div className="col-md-4">
        <Link to="/Exportstack/solid" style={{ textDecoration: "none" }}>
          <div className="card">
            <img src="https://adminlte.io/wp-content/uploads/2022/02/bootstrap-admin-panels-1024x771.jpg" style={{objectFit:"cover"}} className="card-img-top img-fluid mx-auto" alt="..." />
            <div className="card-body">
              <h5 className='text' >Solid</h5>
            </div>
          </div>
        </Link>
        </div>
        </div>
      </div>
      <br /><br />
      <div className='container-fluid'>
        <p className='text' style={{ marginLeft: "50px" }}>Solid's overall approach to reactivity is to wrap any reactive computation in a function, and rerun that function when its dependencies update. The Solid JSX compiler also wraps most JSX expressions (code in braces) with a function, so they automatically update (and trigger corresponding DOM updates) when their dependencies change. More precisely, automatic rerunning of a function happens whenever the function gets called in a tracking scope, such as a JSX expression or API calls that build "computations" (createEffect, createMemo, etc.).</p>
      </div>
      <br />
      <div className='container-fluid'>
        <h2 className='text' style={{ marginLeft: "50px" }}>What is Solid Js?</h2>
        <p className='text' style={{ marginLeft: "50px" }}>SolidJS is a blazing-fast framework that dodges virtual DOM manipulation. Let’s see how it compares to React, the industry standard, when it comes to components, performance, and developer productivity.<br /><br />
          Solid is a JavaScript framework for making interactive web applications. With Solid, you can use your existing HTML and JavaScript knowledge to build components that can be reused throughout your app. Solid provides the tools to enhance your components with reactivity: declarative JavaScript code that links the user interface with the data that it uses and creates.

        </p>
      </div>
      <br /><br />






















































































    </div>
  )
}

export default Laraveldetail
