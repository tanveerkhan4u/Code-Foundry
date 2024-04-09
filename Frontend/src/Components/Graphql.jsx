import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Card from './Card';


const graphqlData = [
  {
    name: 'GraphQL',
    image: 'https://i.pinimg.com/originals/30/a7/12/30a71279cc7e849146715efecc3862d0.jpg',
    link: '/Exportstack/graphql',
    description : 'Mantis MUI GraphQL Dashboard Template'
  },
  {
    name: 'GraphQL',
    image: 'https://dist.neo4j.com/wp-content/uploads/20170524035421/graph-dashboard.png',
    link: '/Exportstack/graphql',
    description : 'Berry MUI GraphQL Dashboard Template'
  },
  {
    name: 'GraphQL',
    image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--7-sIPJPp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://reactjsexample.com/content/images/2020/06/poco.jpg',
    link: '/Exportstack/graphql',
    description : 'Materially GraphQL Admin Dashboard'
  },
];



const Express = () => {
  return (
    <div>

      <header className='flex mx-auto md:flex-row flex-col min-lg-screen bg-[#dbedff] gap-5'>
        <div className='basis-1/2 mt-5  graphtemp' >
          <motion.h2 animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-3xl'><strong className='text-primary'>GraphQL </strong> Admin Template</motion.h2>&nbsp;
          <motion.p animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-gray-500 text-md '>
          GraphQL is the developer-friendly query language for the modern web. It transforms how apps fetch data from an API, enabling you to get exactly what you need with a single query—instead of wrangling responses from a patchwork of REST endpoints.
          </motion.p>&nbsp;

          <motion.div animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} >
          <div className='row'>
            <div className='col-md-9'>
              <div className='input-group'>
                <input type="text" className="form-control fs-5" placeholder='Search...' />
                <button1 >Search</button1>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      <div className='basis-1/2 mt-5 mb-5'>
        <motion.img animate={{ x: 50, y:-20 }} transition={{ ease: "easeOut", duration: 2 }} src='https://everyday.codes/wp-content/uploads/2019/12/og_image.png' className='img-fluid w-96 h-70 graphimage' alt=''></motion.img>
      </div>
      </header>
      <div className='container'>
        <div className='row '>
          {
            graphqlData.map(data => (
              <div className="col-md-4 ">

                <Link to={data.link} className='text-decoration-none'>
                  <Card product={data}  />
                </Link>

              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Express
