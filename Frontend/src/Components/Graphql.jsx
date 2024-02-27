import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Express = () => {
  return (
    <div>

      <header className='row d-flex' style={{ backgroundColor: "#dbedff" }}>
        <div className='col-md-6 py-5' >
          <motion.h2 animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text'><strong className='text-primary'>GraphQL </strong> Admin Template</motion.h2>&nbsp;
          <motion.p animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text graph' style={{color: "grey" }}>
          GraphQL is the developer-friendly query language for the modern web. It transforms how apps fetch data from an API, enabling you to get exactly what you need with a single query—instead of wrangling responses from a patchwork of REST endpoints.
          </motion.p>&nbsp;

          <motion.div animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} >
          <div className='row'>
            <div className='col-md-9 qlsearch'>
              <div className='input-group'>
                <input type="text" className="form-control fs-5" placeholder='Search...' />
                <button1 >Search</button1>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      <div className='col-md-4 mt-5 mx-5 graphimage'>
        <motion.img animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} src='https://everyday.codes/wp-content/uploads/2019/12/og_image.png' className='img-fluid mx-auto' alt=''></motion.img>
      </div>
      </header>
      <br />
      <br />
      <div className='conatiner-fluid'>
        <div className="row gy-4">
          <div className="col-md-4">
        <Link to="/Exportstack/" style={{ textDecoration: "none" }}>
          <div className="card" >
            <img src="https://i.pinimg.com/originals/30/a7/12/30a71279cc7e849146715efecc3862d0.jpg" style={{ height: "300px",objectFit:"cover" }} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className='text' >GraphQL</h5>
            </div>
          </div>
        </Link>
        </div>
        <div className="col-md-4">
        <Link to="/Exportstack/graphql" style={{ textDecoration: "none" }}>
          <div className="card">
            <img src="https://dist.neo4j.com/wp-content/uploads/20170524035421/graph-dashboard.png" style={{ height: "300px", objectFit: 'cover' }} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className='text' >GraphQL</h5>
            </div>
          </div>
        </Link>
        </div>
        <div className="col-md-4">
        <Link to="/Exportstack/graphql" style={{ textDecoration: "none" }}>
          <div className="card" >
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--7-sIPJPp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://reactjsexample.com/content/images/2020/06/poco.jpg" style={{ height: "300px", objectFit: 'cover' }} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className='text' >GraphQL</h5>
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
