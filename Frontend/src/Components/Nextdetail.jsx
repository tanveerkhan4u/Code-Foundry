import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' 

const Nextdetail = () => {
  return (
    <div>

      <header className='text-dark' style={{ backgroundColor: "#dbedff" }}>
        <div className='container-fluid py-5' style={{ height: "450px" }}>
          <motion.h2 animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text' style={{ marginTop: "50px" }}><strong className='text-primary'>NEXT.JS </strong> Admin template</motion.h2>&nbsp;
          <motion.p animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='text' style={{ marginRight: "700px", color: "grey" }}>Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.</motion.p>&nbsp;

          <motion.div animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} className='container-fluid d-flex justify-content-between'>
            <div className='row'>
              <input type="text" className="form-control" placeholder='Search...' style={{ width: "400px", padding: "15px" }} />
              <button className='btn btn-primary' style={{ position: "absolute", width: "100px", left: "290px", height: "45px", marginTop: "5px" }}>search</button>
            </div>
          </motion.div>
        </div>
      </header>
      <div className='container-fluid'>
        <motion.img animate={{ x: 100, y: -40 }} transition={{ ease: "easeOut", duration: 2 }} src='https://images.prismic.io/turing/652ec31afbd9a45bcec81965_Top_Features_in_Next_js_13_7f9a32190f.webp?auto=format,compress' style={{ marginLeft: "700px", marginTop: "-370px", width:"500px", height:"300px"}} alt=''></motion.img>
      </div>
      <br />
      <br />
      <div className='conatiner-fluid d-flex'>
      <Link to="/Exportstack/next.js" style={{textDecoration:"none"}}>
        <div className="card" style={{ width: "25rem", marginLeft: "60px" ,height:"375px"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbma3XYD8DQCowKJy1l2f4IFYan6WUB6yaqw&usqp=CAU" style={{objectFit: 'cover'}}  className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className='text' >Next.js</h5>
          </div>
        </div>
        </Link>
        <Link to="/Exportstack/next.js" style={{textDecoration:"none"}}>
        <div className="card" style={{ width: "25rem", marginLeft: "60px",height:"375px" }}>
          <img src="https://s3.amazonaws.com/creativetim_bucket/products/341/original/opt_md_nextjs_thumbnail.jpg?1597319357"  className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className='text' >Next.js</h5>
          </div>
        </div>
        </Link>
      </div>
      <br /><br />
      <div className='container-fluid'>
        <p className='text' style={{ marginLeft: "50px" }}>On the left side of the screen, you'll find the docs navbar. The pages of the docs are organized sequentially, from basic to advanced, so you can follow them step-by-step when building your application. However, you can read them in any order or skip to the pages that apply to your use case.

On the right side of the screen, you'll see a table of contents that makes it easier to navigate between sections of a page. If you need to quickly find a page, you can use the search bar at the top, or the search shortcut (Ctrl+K or Cmd+K).</p>
      </div>
<br/>
<div className='container-fluid'>
  <h2 className='text'style={{marginLeft:"50px"}}>What is Next.JS ?</h2>
  <p className='text' style={{ marginLeft: "50px" }}>Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.<br/><br/>
Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.

</p>
</div>
<br/><br/>








    </div>
  )
}

export default  Nextdetail;














































































