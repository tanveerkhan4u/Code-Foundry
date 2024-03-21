import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import productData from './dummydata';
import Card from './Card';


import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

const Browsestack = () => {

  const [productList, setProductList] = useState(productData);
  

  const searchRef = useRef(null);
  

  const searchProduct = () => {
    const filteredData = productData.filter((product) => {
      return product.name.toLowerCase().includes(searchRef.current.value.toLowerCase())
    });
    setProductList(filteredData);
  }


  return (
    <div>

      <header className='text-dark' style={{ backgroundColor: "#dbedff" }}>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-md-6 mt-5'>
              <motion.h2 initial={{ x: 50 }} animate={{ x: 0 }} transition={{ ease: "easeOut", duration: 1 }} className='text text-4xl font-semibold ml-5 '>Templates</motion.h2>&nbsp;
              <motion.p initial={{ x: 50 }} animate={{ x: 0 }} transition={{ ease: "easeOut", duration: 1 }} className='text text-gray-500 ml-5 text-xl'>Explore developer friendly Admin Dashboard Templates & UI Kits!</motion.p>&nbsp;
              <motion.div initial={{ x: 50 }} animate={{ x: 0 }} transition={{ ease: "easeOut", duration: 1 }} >
              <div className='row'>
            <div className='col '>
              <div className='input-group '>
                <input type="text " className="form-control fs-5 ml-5 " placeholder='Search...'  ref={searchRef} />
                <button1  onClick={searchProduct}>Search</button1>
              </div>
            </div>
          </div>
        
              

              </motion.div>
            </div>

            <div className='col-md-6 my-2 broimg mt-4 sm:mt-8 md:mt-12 lg:mt-16'>
              <motion.img animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 2 }} src='https://codedthemes.com/wp-content/uploads/2022/06/Templates-banner.svg' className='img-fluid mx-auto' alt=''></motion.img>
            </div>
          </div>
        </div>
      </header>




      <br />

      <div className='row'>
        <div className='col-md-12'>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              200: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              550: {
                slidesPerView: 4,
                spaceBetween: 30
              },
              750: {
                slidesPerView: 5,
                spaceBetween: 30
              },


            }}

            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <motion.ul whileHover={{ scale: 1.2 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }}>
                  <Link className='text' style={{ fontFamily: "Manrope, sans-serif", fontSize: "30px", textDecoration: 'none', color: "grey" }} to="/Vuedetail">Vue</Link>
                </motion.ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <motion.ul whileHover={{ scale: 1.2 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }}>
                  <Link className='text' style={{ fontFamily: "Manrope, sans-serif", fontSize: "30px", textDecoration: 'none', color: "grey" }} to="/Bootstrapdetail">Bootstrap</Link>
                </motion.ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div >
                <motion.ul whileHover={{ scale: 1.2 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }}>
                  <Link className='text' style={{ fontFamily: "Manrope, sans-serif", fontSize: "30px", textDecoration: 'none', color: "grey" }} to="/Reactdetail">React</Link>
                </motion.ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div >
                <motion.ul whileHover={{ scale: 1.2 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} >
                  <Link className='text' style={{ fontFamily: "Manrope, sans-serif", fontSize: "30px", textDecoration: "none", color: "grey" }} to="/Angulardetail">Angular</Link>
                </motion.ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div >
                <motion.ul whileHover={{ scale: 1.2 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }}>
                  <Link className='text' style={{ fontFamily: "Manrope, sans-serif", fontSize: "30px", textDecoration: "none", color: "grey" }} to="/Emberdetail">Ember</Link>
                </motion.ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <motion.ul whileHover={{ scale: 1.2 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }}>
                  <Link className='text' style={{ fontFamily: "Manrope, sans-serif", fontSize: "30px", textDecoration: "none", color: "grey" }} to="/Solid">Solid</Link>
                </motion.ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div >
                <motion.ul whileHover={{ scale: 1.2 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }}>
                  <Link className='text' style={{ fontFamily: "Manrope, sans-serif", fontSize: "30px", textDecoration: "none", color: "grey" }} to="/Sveltedetail">Svelte</Link>
                </motion.ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <motion.ul whileHover={{ scale: 1.2 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }}>
                  <Link className='text' style={{ fontFamily: "Manrope, sans-serif", fontSize: "30px", textDecoration: "none", color: "grey" }} to="/Nextdetail">Next.js</Link>
                </motion.ul>
              </div >
            </SwiperSlide>
            <SwiperSlide>
              <div >
                <motion.ul whileHover={{ scale: 1.2 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }}>
                  <Link className='text' style={{ fontFamily: "Manrope, sans-serif", fontSize: "30px", textDecoration: "none", color: "grey" }} to="/Nest">NestJS</Link>
                </motion.ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div >
                <motion.ul whileHover={{ scale: 1.2 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }}>
                  <Link className='text' style={{ fontFamily: "Manrope, sans-serif", fontSize: "30px", textDecoration: "none", color: "grey" }} to="/Express">Express.js</Link>
                </motion.ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div >
                <motion.ul whileHover={{ scale: 1.2 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }}>
                  <Link className='text' style={{ fontFamily: "Manrope, sans-serif", fontSize: "30px", textDecoration: "none", color: "grey" }} to="/Graphql">GraphQL</Link>
                </motion.ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div >
                <motion.ul whileHover={{ scale: 1.2 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }}>
                  <Link className='text' style={{ fontFamily: "Manrope, sans-serif", fontSize: "30px", textDecoration: "none", color: "grey" }} to="/Nativescript">NativeScript</Link>
                </motion.ul>
              </div>
            </SwiperSlide>
            <br /><br />
          </Swiper>
        </div>
      </div>
      <br />
      <br />


      <div className='conatiner-fluid'>
        <div className='row '>
        {productList.map((product,name) => { 
          return <div className='col-md-4 -mb-20'>
            { <Link to= {product.link} className='text-decoration-none'>
              <Card product={product} description={product.description} 
              />
              </Link> }
          </div>
          })};
              
           
          

         
        </div>
      </div>
      <br />



      
      <br />
      <br />


      <div className='container-fluid'>
        <h2 className='text-3xl ml-10 font-semibold'>Admin Template</h2><br />
        <p className='text ml-10'>If you are a developer and worried about your back-end UI for your project, so here we offer a <strong>highly responsive </strong> and <strong>well-designed </strong>admin dashboard template.<br />

          Admin templates are collections of web pages that are built with HTML, CSS, and JavaScript for typography, forms, buttons, navigation, and other interface components.<br />

          Premium and Free admin templates make building UI of web applications easy, so you don't need to wait for the designer.</p>
      </div>
      <br />
      <div className='container10'>
        <h3 className='text-3xl font-semibold ml-12'>With the help of our admin dashboard, you can build -</h3><br />
        <div className='container bg-body-secondary ml-11'>
          <ul className='text'>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>eCommerce Apps</li>

            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>Medical Apps</li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>School Management Apps</li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>CRM Apps</li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>ERP Apps</li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>Banking Apps</li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>Fitness Apps</li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>Many more...</li>
          </ul>
        </div>
      </div>
      <br />
      <div>
        <h3 className='text-3xl font-semibold ml-11'>Benefits of using an admin dashboard template</h3><br />
        <p className='text ml-11 mb-3'>The biggest benefit of adopting an admin panel template is that you may combine it with any backend framework. Such as Laravel, Django, .NET, React, Flask, Angular, Bootstrap, etc. See what are the other benefits:-</p>
        <div className='container bg-body-secondary ml-10'>
          <ul className='text'>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>Ready to use</li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>Time saving</li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>SEO-friendly</li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>Money saving</li>
            <li className='text' style={{ marginBottom: "10px", fontSize: "20px" }}>Easy to customize</li>
          </ul>
        </div>
      </div>
      <br />
      <div className='container-fluid'>
        <h2 className='text-3xl ml-8 mb-2'>UI Kits</h2>
        <p className='text-md ml-8 mb-3'>A UI kit is a build with design elements such as a style and UI components like input forms, widgets, and navigation menus.<br/>

          We make UI kits based on atomic design which provides a clear methodology for crafting design systems.<br/>

          A simple and good-looking <strong >UI kit </strong>makes easy product design. Our UI kits are <strong>clean, well-built</strong> and <strong>less complicated.</strong></p>
      </div>
      <div className='container-fluid' >
        <h2 className='text-3xl ml-7 mb-3'>Why <strong className='text-primary'>CodeFoundry </strong>Template?</h2>
        <ul className='text'>
          <li className='text ml-7 mb-2' >We develop Free and Premium Admin templates in Bootstrap, Angular, React, Vue, Laravel, CodeIgniter, etc as well as UI kits also. As never seen before we provide the best and a vast variety of options with our admin template in comparison to other admin template providers in the market.</li>
          <li className='text ml-7 mb-2' >Our templates are<strong> flexible, customizable, bug-free, and responsive.</strong> It helps you to create a stunning website with minimalist dashboards, themes, and panels. </li>
          <li className='text ml-7 mb-2' >Each of our template designs speeds up the development process. All our dashboard panels are designed by our expert UX developer team. We created an interface with the right combination of shape, color, content layout, elements, and fonts.</li>
          <li className='text ml-7 mb-2'>It comes with <strong> highly feature-rich pages </strong> and components with <strong> fully developer-centric code. </strong> While developing each Admin template we go through various testing & code optimization processes, for making this performance-centric backend application.</li>
          <li className='text ml-7 mb-2' >We provided all possible prebuilt admin dashboard layouts, which gives you the best selection choice of the backend template needed for your projects. It comes with error/bug-free, well-structured, well-commented code and regularly with all the latest updated code. This saves your large amount of developing backend r application time and it is fully customizable.</li>
          <li className='text ml-7 mb-2'>We also provide a free admin template so you can check our code quality. If you are satisfied with our quality then you move to the premium ones, which have more features and components that make your unique project easy.</li>
          <li className='text ml-7 mb-3'>You will get <strong> premium support, docs access, </strong>and  <strong>free updates </strong> based on the license you purchased.</li>
        </ul>
      </div>
    </div>
  )
}
export default Browsestack;












































