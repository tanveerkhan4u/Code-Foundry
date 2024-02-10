import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Express = () => {
  return (
    <div>

      <header className='text-dark' style={{ backgroundColor: "#dbedff" }}>
        <div className='container-fluid py-5' style={{ height: "400px" }}>
          <motion.h2 animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text' style={{ marginTop: "50px" }}><strong className='text-primary'>GraphQL </strong> Admin Template</motion.h2>&nbsp;
          <motion.p animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text' style={{ marginRight: "700px", color: "grey" }}>
          GraphQL is the developer-friendly query language for the modern web. It transforms how apps fetch data from an API, enabling you to get exactly what you need with a single query—instead of wrangling responses from a patchwork of REST endpoints.
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
        <motion.img animate={{ x: 100, y: -40 }} transition={{ ease: "easeOut", duration: 2 }} src='https://everyday.codes/wp-content/uploads/2019/12/og_image.png' style={{ width: "500px", height: "300px", marginLeft: "700px", marginTop: '-350px' }} alt=''></motion.img>
      </div>
      <br />
      <br />
      <div className='conatiner-fluid d-flex'>
        <Link to="/Exportstack/" style={{ textDecoration: "none" }}>
          <div className="card" style={{ width: "25rem", marginLeft: "60px" }}>
            <img src="https://i.pinimg.com/originals/30/a7/12/30a71279cc7e849146715efecc3862d0.jpg" style={{ height: "300px" }} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className='text' >GraphQL</h5>
            </div>
          </div>
        </Link>
        <Link to="/Exportstack/graphql" style={{ textDecoration: "none" }}>
          <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
            <img src="https://dist.neo4j.com/wp-content/uploads/20170524035421/graph-dashboard.png" style={{ height: "300px", objectFit: 'cover' }} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className='text' >GraphQL</h5>
            </div>
          </div>
        </Link>
        <Link to="/Exportstack/graphql" style={{ textDecoration: "none" }}>
          <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--7-sIPJPp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://reactjsexample.com/content/images/2020/06/poco.jpg" style={{ height: "300px", objectFit: 'cover' }} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className='text' >GraphQL</h5>
            </div>
          </div>
        </Link>
      </div>
      <br /><br />

    </div>
  )
}

export default Express
