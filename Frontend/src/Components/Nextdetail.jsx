import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Card from './Card';

const nextData = [
  {
    name: 'Next.js',
    image: 'https://s3.amazonaws.com/creativetim_bucket/products/341/original/opt_md_nextjs_thumbnail.jpg?1597319357',
    link: '/Exportstack/next.js',
    description : 'Mantis MUI Next.js Dashboard Template'
  },
  {
    name: 'Next.js',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbma3XYD8DQCowKJy1l2f4IFYan6WUB6yaqw&usqp=CAU',
    link: '/Exportstack/next.js',
    description : 'Berry MUI Next.js Dashboard Template'
  },
  {
    name: 'Next.js',
    image: 'https://s3.amazonaws.com/creativetim_bucket/products/341/original/opt_md_nextjs_thumbnail.jpg?1597319357',
    link: '/Exportstack/next.js',
    description : 'Materially Next.js Admin Dashboard'
  },
];










const Nextdetail = () => {
  return (
    <div>

      <header className='flex mx-auto md:flex-row flex-col min-lg-screen   bg-[#dbedff]'>
        <div className='basis-1/2 mt-5 next'>
          <motion.h2 animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-3xl'><strong className='text-primary'>NEXT.JS </strong> Admin template</motion.h2>&nbsp;
          <motion.p animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-gray-500 text-md ' >Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.</motion.p>&nbsp;

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
        <div className='basis-1/2 mt-5  nextimage mb-5'>
          <motion.img animate={{ x: 70 }} transition={{ ease: "easeOut", duration: 2 }} src='https://images.prismic.io/turing/652ec31afbd9a45bcec81965_Top_Features_in_Next_js_13_7f9a32190f.webp?auto=format,compress' className='img-fluid w-96 h-70' alt=''></motion.img>
        </div>
      </header>
      <div className='container'>
        <div className='row '>
          {
            nextData.map(data => (
              <div className="col-md-4 ">

                <Link to={data.link} className='text-decoration-none'>
                  <Card product={data}  />
                </Link>

              </div>
            ))
          }
        </div>
      </div>
      <div className='container-fluid'>
        <p className='text ml-5'>On the left side of the screen, you'll find the docs navbar. The pages of the docs are organized sequentially, from basic to advanced, so you can follow them step-by-step when building your application. However, you can read them in any order or skip to the pages that apply to your use case.

          On the right side of the screen, you'll see a table of contents that makes it easier to navigate between sections of a page. If you need to quickly find a page, you can use the search bar at the top, or the search shortcut (Ctrl+K or Cmd+K).</p>
      </div>
      <br />
      <div className='container-fluid'>
        <h2 className='text-3xl ml-5 mb-2'>What is Next.JS ?</h2>
        <p className='text ml-5' >Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

          Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.<br /><br />
          Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.

        </p>
      </div>
      <br /><br />








    </div>
  )
}

export default Nextdetail;














































































