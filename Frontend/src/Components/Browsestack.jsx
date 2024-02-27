import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';




const Browsestack = () => {




  return (
    <div>

      <header className='text-dark' style={{ backgroundColor: "#dbedff" }}>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-md-6'>
              <motion.h2 initial={{ x: 50 }} animate={{ x: 0 }} transition={{ ease: "easeOut", duration: 1 }} className='text' style={{ marginTop: "50px" }}>Templates</motion.h2>&nbsp;
              <motion.p initial={{ x: 50 }} animate={{ x: 0 }} transition={{ ease: "easeOut", duration: 1 }} className='text'>Explore developer friendly Admin Dashboard Templates & UI Kits!</motion.p>&nbsp;
              <motion.div initial={{ x: 50 }} animate={{ x: 0 }} transition={{ ease: "easeOut", duration: 1 }} >
              <div className='row'>
            <div className='col-md- '>
              <div className='input-group '>
                <input type="text" className="form-control fs-5 " placeholder='Search...' />
                <button1 >Search</button1>
                {/* <button1  className='btn btn-primary w-5'>Search</button1> */}
              
              </div>
            </div>
          </div>

              </motion.div>
            </div>

            <div className='col-md-6 my-2 broimg'>
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
        <div className='row gy-4 justify-content-center'>
          <div className='col-md-3 ms-5'>
            <Link to="/Exportstack/vue" style={{ textDecoration: "none" }}>
              <div className="card" >
                <motion.img src="https://codedthemes.com/wp-content/uploads/edd/2023/12/Mantis-free.png" whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} className="card-img-top img-fluid mx-auto" alt="..." />
                <div className="card-body">
                  <h5 className='text' >Vue</h5>
                </div>
              </div>
            </Link>
          </div>

          <div className='col-md-3 ms-5'>
            <Link to="/Exportstack/bootstrap" style={{ textDecoration: "none" }}>
              <div className="card " >
                <motion.img src="https://codedthemes.com/wp-content/uploads/edd/2023/02/Mantis-pro-bootstrap5.png" whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} className="card-img-top img-fluid mx-auto" alt="..." />
                <div className="card-body">
                  <h5 className='text' >Bootstrap</h5>
                </div>
              </div>
            </Link>
          </div>

          <div className='col-md-3 ms-5'>
            <Link to="/Exportstack/react" style={{ textDecoration: "none" }}>
              <div className="card " >
                <motion.img src="https://codedthemes.com/wp-content/uploads/edd/2022/05/Datta-Able-React-Admin-Template.webp" whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} className="card-img-top img-fluid mx-auto" alt="..." />
                <div className="card-body">
                  <h5 className='text' >React</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <br />



      <div className='conatiner-fluid d-flex'>
        <div className='row gy-4 justify-content-center'>
          <div className='col-md-3 ms-5'>
            <Link to="/Exportstack/angular" style={{ textDecoration: "none" }}>
              <div className="card" >
                <motion.img src="https://codedthemes.com/wp-content/uploads/edd/2023/08/Mantis-Angular-16-Free-Admin-Template.png"  whileHover={{ scale: 1.1 }}
                onHoverStart={e => { }}
                onHoverEnd={e => { }} className="card-img-top img-fluid mx-auto" alt="..." />
                <div className="card-body">
                  <h5 className='text' >Angular</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className='col-md-3 ms-5'>
            <Link to="/Exportstack/django" style={{ textDecoration: "none" }}>
              <div className="card " >
                <motion.img src="https://codedthemes.com/wp-content/uploads/edd/2022/09/Berry-bootstrap-django.png"  whileHover={{ scale: 1.1 }}
                onHoverStart={e => { }}
                onHoverEnd={e => { }} className="card-img-top img-fluid mx-auto" alt="..." />
                <div className="card-body">
                  <h5 className='text' >Django</h5>
                </div>
              </div>
            </Link>
          </div>

          <div className='col-md-3 ms-5'>
            <Link to="/Exportstack/laravel" style={{ textDecoration: "none" }}>
              <div className="card">
                <motion.img src="https://codedthemes.com/wp-content/uploads/edd/2022/05/Datta-Able-Laravel-Admin-Dashboard.webp"  whileHover={{ scale: 1.1 }}
                onHoverStart={e => { }}
                onHoverEnd={e => { }}className="card-img-top img-fluid mx-auto" alt="..." />
                <div className="card-body">
                  <h5 className='text' >Laravel</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />


      <div className='container-fluid'>
        <h2 className='text' style={{ marginLeft: "50px" }}>Admin Template</h2><br />
        <p className='text' style={{ marginLeft: "50px" }}>If you are a developer and worried about your back-end UI for your project, so here we offer a <strong>highly responsive </strong> and <strong>well-designed </strong>admin dashboard template.<br />

          Admin templates are collections of web pages that are built with HTML, CSS, and JavaScript for typography, forms, buttons, navigation, and other interface components.<br />

          Premium and Free admin templates make building UI of web applications easy, so you don't need to wait for the designer.</p>
      </div>
      <br />
      <div className='container10'>
        <h3 className='text' style={{ marginLeft: "50px" }}>With the help of our admin dashboard, you can build -</h3><br />
        <div className='container bg-body-secondary' style={{ marginLeft: "50px" }}>
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
        <h3 className='text' style={{ marginLeft: "50px" }}>Benefits of using an admin dashboard template</h3><br />
        <p className='text' style={{ marginLeft: "50px" }}>The biggest benefit of adopting an admin panel template is that you may combine it with any backend framework. Such as Laravel, Django, .NET, React, Flask, Angular, Bootstrap, etc. See what are the other benefits:-</p>
        <div className='container bg-body-secondary' style={{ marginLeft: "50px" }}>
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
      <div className='container-fluid' style={{ marginLeft: "50px" }}>
        <h2 className='text'>UI Kits</h2>
        <p className='text'>A UI kit is a build with design elements such as a style and UI components like input forms, widgets, and navigation menus.<br />

          We make UI kits based on atomic design which provides a clear methodology for crafting design systems.<br />

          A simple and good-looking <strong >UI kit </strong>makes easy product design. Our UI kits are <strong>clean, well-built</strong> and <strong>less complicated.</strong></p>
      </div>
      <div className='container-fluid' style={{ margin: "50px" }}>
        <h2 className='text'>Why <strong className='text-primary'>CodeFoundry </strong>Template?</h2><br />
        <ul className='text'>
          <li className='text' style={{ marginRight: "80px", marginBottom: "15px" }}>We develop Free and Premium Admin templates in Bootstrap, Angular, React, Vue, Laravel, CodeIgniter, etc as well as UI kits also. As never seen before we provide the best and a vast variety of options with our admin template in comparison to other admin template providers in the market.</li>
          <li className='text' style={{ marginBottom: "15px" }}>Our templates are<strong> flexible, customizable, bug-free, and responsive.</strong> It helps you to create a stunning website with minimalist dashboards, themes, and panels. </li>
          <li className='text' style={{ marginRight: "80px", marginBottom: "15px" }}>Each of our template designs speeds up the development process. All our dashboard panels are designed by our expert UX developer team. We created an interface with the right combination of shape, color, content layout, elements, and fonts.</li>
          <li className='text' style={{ marginRight: "80px", marginBottom: "15px" }}>It comes with <strong> highly feature-rich pages </strong> and components with <strong> fully developer-centric code. </strong> While developing each Admin template we go through various testing & code optimization processes, for making this performance-centric backend application.</li>
          <li className='text' style={{ marginRight: "80px", marginBottom: "15px" }}>We provided all possible prebuilt admin dashboard layouts, which gives you the best selection choice of the backend template needed for your projects. It comes with error/bug-free, well-structured, well-commented code and regularly with all the latest updated code. This saves your large amount of developing backend r application time and it is fully customizable.</li>
          <li style={{ marginRight: "70px", marginBottom: "15px" }}>We also provide a free admin template so you can check our code quality. If you are satisfied with our quality then you move to the premium ones, which have more features and components that make your unique project easy.</li>
          <li>You will get <strong> premium support, docs access, </strong>and  <strong>free updates </strong> based on the license you purchased.</li>
        </ul>
      </div>
    </div>
  )
}
export default Browsestack;












































