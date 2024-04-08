import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Card from './Card';

const solidData = [
  {
    name: 'SolidJS',
    image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/concept-free-admin-dashboard-panel.jpg',
    link: '/Exportstack/solid',
    description : 'Mantis MUI SolidJS Dashboard Template'
  },
  {
    name: 'SolidJS',
    image: 'https://adminlte.io/wp-content/uploads/2022/02/bootstrap-admin-panels-1024x771.jpg',
    link: '/Exportstack/solid',
    description : 'Berry MUI SolidJS Dashboard Template'
  },
  
];




const Laraveldetail = () => {
  return (
    <div>

      <header className='flex mx-auto md:flex-row flex-col min-lg-screen  gap-5 bg-[#dbedff] '>
        <div className='basis-1/2 mt-5 solid'>
          <motion.h2 animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-3xl'><strong className='text-primary'>Solid </strong></motion.h2>&nbsp;
          <motion.p animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} className='text-gray-500 text-md '>SolidJS is a declarative JavaScript library for building user interfaces. It is similar to other front-end libraries and frameworks like React and Vue but has its own approach to reactive programming.

            SolidJS focuses on fine-grained reactivity, meaning that it efficiently updates only the parts of the DOM that need to change rather than re-rendering the entire component. This can lead to improved performance in certain scenarios.</motion.p>&nbsp;

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
      <div className='basis-1/2 mt-5  '>
        <motion.img animate={{ x: 50,y:-20 }} transition={{ ease: "easeOut", duration: 2 }} src='https://miro.medium.com/v2/resize:fit:1400/1*Iv6xrlsGg8ksHXyOGnbqbg.png' className='img-fluid w-fit h-80 solidimg'   alt=''></motion.img>
      </div>
      </header>
      <div className='container'>
        <div className='row '>
          {
            solidData.map(data => (
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
        <p className='text-md ml-5 '>Solid's overall approach to reactivity is to wrap any reactive computation in a function, and rerun that function when its dependencies update. The Solid JSX compiler also wraps most JSX expressions (code in braces) with a function, so they automatically update (and trigger corresponding DOM updates) when their dependencies change. More precisely, automatic rerunning of a function happens whenever the function gets called in a tracking scope, such as a JSX expression or API calls that build "computations" (createEffect, createMemo, etc.).</p>
      </div>
      <br />
      <div className='container-fluid'>
        <h2 className='text-3xl font-semibold ml-5 mb-3'>What is Solid Js?</h2>
        <p className='text-md  ml-5'>SolidJS is a blazing-fast framework that dodges virtual DOM manipulation. Let’s see how it compares to React, the industry standard, when it comes to components, performance, and developer productivity.<br /><br />
          Solid is a JavaScript framework for making interactive web applications. With Solid, you can use your existing HTML and JavaScript knowledge to build components that can be reused throughout your app. Solid provides the tools to enhance your components with reactivity: declarative JavaScript code that links the user interface with the data that it uses and creates.

        </p>
      </div>
      <br /><br />






















































































    </div>
  )
}

export default Laraveldetail
