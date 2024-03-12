import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Typewriter, Cursor } from 'react-simple-typewriter'
import { IconStar, IconShoppingCart } from '@tabler/icons-react'

import { Pagination, Autoplay } from 'swiper/modules';
import Card from './Card';
import { TypewriterEffectSmooth } from '../utils/components/Type-writer';

const words = [
  {
    text: "Build",
  },
  {
    text: "awesome",
  },
  {
    text: "apps",
  },
  {
    text: "with",
  },
  {
    text: "Aceternity.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const Home = () => {

  // const [productList, setProductList] = useState(productData);

  const searchRef = useRef(null);

  // const name = ['REACT', 'BOOTSTRAP', 'VUE', 'ANGULAR', 'NESTJS', 'EXPRESS.JS', 'SVELTE', 'EMBER', 'NEXT.JS', 'SOLID', 'GRAPHQL', 'NATIVESCRIPT'];
  //  const [selName, setSelName] = useState([]);
  const searchProduct = () => {
    const filteredData = productData.filter((product) => {
      return product.name.toLowerCase().includes(searchRef.current.value.toLowerCase())
    });
    setProductList(filteredData);
  }
  return (
    <div style={{ overflow: 'hidden' }}>
      <header className='text-dark w-100' style={{ backgroundColor: "#dbedff" }}>
        <div className='container-fluid py-5'>
          <h1 className='text-center mb-4 -mt-8'>
            <TypewriterEffectSmooth words={words} />
          </h1>
          <p className='text-center text-gray-500 text-lg'>Explore our curated collection of free and premium admin dashboard template for your next project!</p>

          <div className='row'>
            <div className='col-md-7 mx-auto'>
              <div className='input-group mt-2'>
                <input type="text" className="form-control fs-5" placeholder='Search...' ref={searchRef} />
                <button1 onClick={searchProduct} className=" p-2" >
                  <div className="original" >Search</div>

                </button1>

              </div>
            </div>
          </div>


          <div className='text-center'>
            <img className='text-center img-fluid mx-auto' src='https://codedthemes.com/wp-content/uploads/2022/03/main-banner-bottom-img-1.png' alt=''></img>
          </div>
        </div>
      </header>
      <br /><br />

      <div className='container'>
        <h3 className='text-center  text-gray-500 text-2xl mb-4'>We create custom for the application using the following technology</h3>
      </div>


      <div className='logo'>
        <Swiper slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper">
          <SwiperSlide>
            <div>
              <Link to="/Bootstrapdetail" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} className='card mb-3 py-5 px-2 shadow' style={{ height: "220px" }}>
                  <img className='img-fluid mx-auto' src='https://codedthemes.com/wp-content/uploads/2022/04/boostrap-logo.jpg.webp' alt='' />
                  <h4 className='text-center' style={{ marginTop: "20px" }}>Bootstrap</h4>
                </motion.div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Angulardetail" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} className='card mb-3 py-5 px-2 shadow' style={{ height: "220px" }}>
                  <img className='mx-auto img-fluid' src='https://codedthemes.com/wp-content/uploads/2022/04/angular-logo.jpg.webp' alt='' />
                  <h4 className='text-center' style={{ marginTop: "20px" }}>Angular</h4>
                </motion.div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Reactdetail" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} className='card mb-3 py-5 px-2 shadow' style={{ height: "220px" }}>
                  <img className='mx-auto img-fluid' src='https://codedthemes.com/wp-content/uploads/2022/04/react-logo.jpg.webp' alt='' />
                  <h4 className='text-center mt-4' style={{ marginTop: "20px" }}>React</h4>
                </motion.div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Vuedetail" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} className='card mb-3 py-5 px-2 shadow ' style={{ height: "220px" }} >
                  <img className='mx-auto img-fluid ' src='https://masteringjs.io/assets/images/vue/vue.jpg' style={{ width: "100px", marginTop: "-20px" }} alt='' />
                  <h4 className='text-center mt-2'>Vue</h4>
                </motion.div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Nest" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} className='card mb-3 py-5 shadow' style={{ height: "220px" }}>
                  <img className='mx-auto img-fluid' src='https://static-00.iconduck.com/assets.00/nestjs-icon-2048x2040-3rrvcej8.png' style={{ width: "80px", height: "80px", marginTop: "-5px" }} alt='' />
                  <h4 className='text-center mt-3'>NestJS</h4>
                </motion.div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Sveltedetail" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} className='card mb-3 py-5 shadow' style={{ height: "220px" }}>
                  <img className='mx-auto img-fluid' src='https://w7.pngwing.com/pngs/598/9/png-transparent-svelte-hd-logo-thumbnail.png' style={{ width: "80px", height: "80px" }} alt='' />
                  <h4 className='text-center mt-2'>Svelte</h4>
                </motion.div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Emberdetail" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} className='card mb-3 py-5 shadow' style={{ height: "220px" }}>
                  <img className='mx-auto img-fluid' src='https://emberjs.com/images/brand/ember-tomster-lockup-4c.svg' style={{ width: "100px", height: "100px", marginTop: "-20px" }} alt='' />
                  <h4 className='text-center mt-2'>Ember</h4>
                </motion.div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Nextdetail" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} className='card mb-3 py-5 shadow' style={{ height: "220px" }}>
                  <img className='mx-auto img-fluid' src='https://miro.medium.com/v2/resize:fit:650/1*Hva7hcsFWulFUPhrEWui1A.jpeg' style={{ width: "150px", height: "100px", marginTop: "-15px" }} alt='' />
                  <h4 className='text-center'>Next.JS</h4>
                </motion.div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Solid" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} className='card mb-3 py-5 shadow' style={{ height: "220px" }}>
                  <img className='mx-auto img-fluid' src='https://avatars.githubusercontent.com/u/79226042?s=280&v=4' style={{ width: "100px", height: "100px", marginTop: "-15px" }} alt='' />
                  <h4 className='text-center' style={{ marginTop: "-2px" }}>Solid</h4>
                </motion.div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Express" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} className='card mb-3 py-5 shadow' style={{ height: "220px" }}>
                  <img className='mx-auto img-fluid' src='https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png' style={{ width: "80px", height: "80px", marginTop: "-10px" }} alt='' />
                  <h4 className='text-center mt-2'>Express.js</h4>
                </motion.div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Graphql" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} className='card mb-3 py-5 shadow' style={{ height: "220px" }}>
                  <img className='mx-auto img-fluid' src='https://cdn.iconscout.com/icon/free/png-256/free-graphql-3521468-2944912.png' style={{ width: "80px", height: "80px", marginTop: "-10px" }} alt='' />
                  <h4 className='text-center mt-2'>GraphQL</h4>
                </motion.div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Nativescript" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} className='card mb-2 py-5 shadow' style={{ height: "220px" }}>
                  <img className='mx-auto img-fluid' src='https://seeklogo.com/images/N/nativescript-logo-309BDE68D3-seeklogo.com.png' style={{ width: "80px", height: "80px", marginTop: "-10px" }} alt='' />
                  <h4 className='text-center mt-1'>Nativescript</h4>
                </motion.div>
              </Link>
            </div>
          </SwiperSlide>
          <br /><br />
        </Swiper>
      </div>
      <br /><br />
      <div className='container bg-body-secondary h-32'>
        <marquee behavior="scroll" direction="left" scrollamount="15">
          <h1 className='text-center p-5 text-3xl'>FRONT-END FRAMEWORKS</h1>
        </marquee>
      </div>
      <br />
      <div className='container-fluid'>
        <h2 className='text ml-10 text-4xl'>Best Selling <strong className='text-primary'>Products</strong></h2><br />
        <p className='text ml-10 text-gray-500 text-xl'>Explore our best-selling templates of all time!</p>
      </div>
      

      <div className='container-fluid '>
        <div className='row'>

          <div className='col-md-4'>
            <Card />
          </div>

          <div className='col-md-4 '>
            <Card/>

            {/* <Link to="/Angulardetail" style={{ textDecoration: "none" }}>

              <div className="card" style={{ maxHeight: "410px" }}>
                <motion.img src="https://codedthemes.com/wp-content/uploads/edd/2022/11/Berry-Angular.png" whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} className="card-img-top mx-auto img-fluid" alt="..." />
                <div className="card-body">
                  <p className='fs-6'>Mantis Angular 17 Admin Template <strong className='text fs-5 float-end' style={{ color: "#5B84FA" }}>FREE</strong></p>
                  <h5 className='text' style={{ color: "grey" }} >Angular<p className='float-end'><IconStar></IconStar> </p><IconShoppingCart></IconShoppingCart></h5>
                </div>
              </div>
            </Link> */}
          </div>






          <div className='col-md-4'>
            <Card/>
            {/* <Link to="/Bootstrapdetail" style={{ textDecoration: "none" }}>
              <div className="card mb-3 py-2 px-2 p-2">
                <motion.img src="https://codedthemes.com/wp-content/uploads/edd/2022/05/Empire-Bootstrap-4-Admin-Template.webp" whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} className="card-img-top mx-auto img-fluid" alt="..." />
                <div className="card-body  mb-3 py-2 px-2">
                  <h5 className='text' >Bootstrap</h5>
                </div>
              </div>
            </Link> */}
          </div>

          {/* <div className='col-md-4'>
            <Link to="/Vuedetail" style={{ textDecoration: "none" }}>
              <div className="card mb-3 py-2 px-2 h-100">
                <motion.img src="https://codedthemes.com/wp-content/uploads/edd/2022/11/Berry-vue.png" whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} className="card-img-top img-fluid mx-auto" alt="..." />
                <div className="card-body mb-3 py-2 px-2">
                  <h5 className='text' >Vue</h5>
                </div>
              </div>
            </Link>
          </div> */}

        </div>

      </div>

      
      <div className='container-fluid'>
        <h2 className='text ml-10 text-4xl -mt-8'>Featured <strong className='text-primary'>Products</strong></h2><br />
        <p className='text ml-10 text-gray-500 text-xl mb-10'>Checkout our featured products having top review and love by customers!</p>
      </div>
      

      <div className="container-fluid">
        <div className="row gy-4">
          <div className='col-md-4'>
            <Link to="/Sveltedetail" style={{ textDecoration: "none" }}>
              <div className="card mb-3 py-2 px-2 h-100">
                <motion.img src="https://www.creative-tim.com/blog/content/images/wordpress/2020/09/svelte-admin-dashboard.jpg" className="card-img-top img-fluid mx-auto" whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} alt="..." />
                <div className="card-body mb-3 py-2 px-2">
                  <h5 className='text' >Svelte</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className='col-md-4'>
            <Link to="/Solid" style={{ textDecoration: "none" }}>
              <div className="card mb-3 py-2 px-2 h-100">
                <motion.img src="https://colorlib.com/wp/wp-content/uploads/sites/2/concept-free-admin-dashboard-panel.jpg" className="card-img-top img-fluid mx-auto" whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} alt="..." />
                <div className="card-body mb-3 py-2 px-2">
                  <h5 className='text' >Solid</h5>
                </div>
              </div>
            </Link>
          </div>

          <div className='col-md-4'>
            <Link to="/Nextdetail" style={{ textDecoration: "none" }}>
              <div className="card mb-3 py-2 px-2 h-100">
                <motion.img src="https://s3.amazonaws.com/creativetim_bucket/products/341/original/opt_md_nextjs_thumbnail.jpg?1597319357" className="card-img-top img-fluid mx-auto" whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} alt="..." />
                <div className="card-body mb-3 py-2 px-2">
                  <h5 className='text' >Next.Js</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <br /><br />
      <div className='container bg-body-secondary'>
        <marquee behavior="scroll" direction="left" scrollamount="15">
          <h1 className='text-center'>BACK-END FRAMEWORKS</h1>
        </marquee>
      </div>
      <br /><br />
      <div className='container-fluid'>
        <h2 className='text' style={{ marginLeft: "40px" }}>New <strong className='text-primary'>Products</strong></h2><br />
        <p className='text fs-5' style={{ marginLeft: "40px", color: "grey" }}>These are the new babies in the collection. Check them out as they will be mature soon!</p>
      </div>
      <br />
      <div className='container-fluid'>
        <div className='row gy-4'>
          <div className='col-md-4'>
            <Link to="/Express" style={{ textDecoration: "none" }}>
              <div className="card ">
                <motion.img src="https://adminlte.io/wp-content/uploads/2021/06/minible-nodejs-dashboard-template.jpg" className="card-img-top img-fluid mx-auto" whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} alt="..." />
                <div className="card-body mb-2 py-2 px-2">
                  <h5 className='text' >Express.js</h5>
                </div>
              </div>
            </Link>
          </div>
          {/* <motion.div whileHover={{ scale: 1.1 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }} className='col-md-4'>
            <Link to="/Express" style={{ textDecoration: "none" }}>
              <div className="card ">
                <img src="https://user-images.githubusercontent.com/7660346/180629352-f92216e3-7cf4-4fba-92fa-089dd96b4478.png" className="card-img-top img-fluid mx-auto" style={{ height: "335px", objectFit: "cover" }} alt="..." />
                <div className="card-body">
                  <h5 className='text' >Next.js</h5>
                </div>
              </div>
            </Link>
          </motion.div> */}
          <div className='col-md-4'>
            <Link to="/Express" style={{ textDecoration: "none" }}>
              <div className="card ">
                <motion.img src="https://adminlte.io/wp-content/uploads/2021/06/minible-nodejs-dashboard-template.jpg" className="card-img-top img-fluid mx-auto" whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} alt="..." />
                <div className="card-body mb-2 py-2 px-2">
                  <h5 className='text' >Node.js</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className='col-md-4 '>
            <Link to="/Express" style={{ textDecoration: "none" }}>
              <div className="card  " >
                <motion.img src="https://adminlte.io/wp-content/uploads/2021/06/minible-nodejs-dashboard-template.jpg" className="card-img-top img-fluid mx-auto" whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} alt="..." />
                <div className="card-body mb-2 py-2 px-2 ">
                  <h5 className='text' >React.js</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div><br /><br />
      <div className='container bg-body-secondary'>
        <marquee behavior="scroll" direction="left" scrollamount="15">
          <h1 className='text-center'>MOBILE APPLICATION</h1>
        </marquee>
      </div>
      <br /><br />
      <div className='container-fluid'>
        <div className='row gy-4'>
          <div className=' col-md-4 '>
            <Link to="/Nativescript" style={{ textDecoration: "none" }}>
              <div className="card">
                <motion.img src="https://img.freepik.com/free-vector/dashboard-user-panel-template_52683-29382.jpg" className="card-img-top img-fluid mx-auto" whileHover={{ scale: 1.1 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }} alt="..." />
                <div className="card-body">
                  <h5 className='text' >NativeScript</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div><br /><br />

      <div className='container d-flex'>
        <h3 className='d- flex col-4' style={{ marginLeft: "10px" }}>
          Agencies<strong className='text-primary'> Trusted us</strong><br /><br />
          <p className='text' style={{ fontSize: "18px", color: "grey" }}>We have been trusted by top companies around the world!</p>
        </h3>

        <marquee behavior="scroll" direction="left" scrollamount="15">
          <div className='myimg '>
            <img src='https://codedthemes.com/wp-content/uploads/2022/05/client-totalstudio-5.svg' alt=''></img>&nbsp;&nbsp;
            <img src='https://codedthemes.com/wp-content/uploads/2022/05/client-montecito-4.svg' alt=''></img>&nbsp;&nbsp;
            <img src='https://codedthemes.com/wp-content/uploads/2022/05/client-eagames.svg' alt=''></img>&nbsp;&nbsp;
            <img src='https://codedthemes.com/wp-content/uploads/2022/05/client-haswent-2.svg' alt=''></img>&nbsp;&nbsp;
            <img src='https://codedthemes.com/wp-content/uploads/2022/05/client-crystal-1.svg' alt=''></img>&nbsp;&nbsp;
            <img src='https://codedthemes.com/wp-content/uploads/2022/05/client-vodafone.svg' alt=''></img>&nbsp;&nbsp;
            <img src='https://codedthemes.com/wp-content/uploads/2022/05/client-slingshot.svg' alt=''></img>&nbsp;&nbsp;
            <img src='https://codedthemes.com/wp-content/uploads/2022/05/client-haxter-3.svg' alt=''></img>&nbsp;&nbsp;
          </div>
        </marquee>
      </div><br />

      <div className='row gy-2'>
        <div className='container-fluid '>
          <div className='col-md-4'>

          </div>
          <img className='img-fluid mx-auto col-md-11 ms-5' src='https://www.designerpeople.com/wp-content/uploads/2019/11/website-template-design-2.jpg' alt='' />
        </div>
      </div>
      <br /><br />
      <div className='row'>
        <div className='col-4 ' style={{ marginLeft: "70px" }}>
          <h2 className='text'>Why <strong className='text-primary'>CodeFoundry?</strong></h2><br />
          <p className='text' style={{ color: "grey" }}>CodeFoundry servicing the web industry since 2020 and gaining trust and support from a large client base.</p>
        </div>
      </div>
      <br /><br />

      <div className='container '>
        <div className='row gy-4 justify-content-between justify-content-between'>
          <motion.div whileHover={{ scale: 1.2 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }} className=' card col-md-3  shadow '>
            <img className='img-fluid mx-auto ' src='https://codedthemes.com/wp-content/uploads/2022/04/Flexible-code-icon-1.png.webp' style={{ marginLeft: "180px", height: "40px", width: "40px", marginTop: "20px" }} alt='' />
            <h4 className='text-center' style={{ marginTop: "20px" }}>Flexible Code</h4><br />
            <p className='text-center mb-5 mx-auto' style={{ color: "grey" }}>Easy to start your project with our easy to use code standard.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }} className='card col-md-3  shadow '>
            <img className='img-fluid mx-auto  ' src='https://codedthemes.com/wp-content/uploads/2022/05/quality.svg' style={{ marginLeft: "180px", height: "40px", width: "40px", marginTop: "20px" }} alt='' />
            <h4 className='text-center mt-3' >Quality First</h4><br />
            <p className='text-center mb-5 mx-auto' style={{ color: "grey" }}>We believe in quality designs and code instead of quantity</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }} className='card col-md-3  shadow'>
            <img className='img-fluid mx-auto ' src='https://codedthemes.com/wp-content/uploads/2022/04/Freemium-Model-icon-1.png.webp' style={{ marginLeft: "40px", height: "40px", width: "40px", marginTop: "20px" }} alt='' />
            <h4 className='text-center' style={{ marginTop: "20px" }}>Freemium Model</h4><br />
            <p className='text-center px-3 mb-5' style={{ color: "grey" }}>Our belief on open-source led us to provide a free versions of most products</p>
          </motion.div>
        </div>
      </div>
      <br /><br />
      <div className='container'>
        <div className='row gy-4 justify-content-between justify-content-between'>
          <motion.div whileHover={{ scale: 1.2 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }} className='card shadow col-md-3'>
            <img className='img-fluid mx-auto' src='https://codedthemes.com/wp-content/uploads/2022/04/Documentation-icon-1.png' style={{ marginLeft: "180px", height: "40px", width: "40px", marginTop: "20px" }} alt='' />
            <h4 className='text-center' style={{ marginTop: "20px" }}>Documentation</h4><br />
            <p className='text-center px-3' style={{ marginTop: "-20px", color: "grey" }}>Detailed step by step documentation helper file for each template</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }} className='card shadow col-md-3'>
            <img className='img-fluid mx-auto' src='https://codedthemes.com/wp-content/uploads/2022/04/Free-updates-icon-1.png' style={{ marginLeft: "180px", height: "40px", width: "40px", marginTop: "20px" }} alt='' />
            <h4 className='text-center' style={{ marginTop: "20px" }}>Free Updates</h4><br />
            <p className='text-center px-3' style={{ marginTop: "-20px", color: "grey" }}>Free updates help to keep your project always up to Date</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }} className='card shadow col-md-3'>
            <img className='img-fluid mx-auto' src='https://codedthemes.com/wp-content/uploads/2022/04/Support-icon-1.png' style={{ marginLeft: "180px", height: "40px", width: "40px", marginTop: "20px" }} alt='' />
            <h4 className='text-center' style={{ marginTop: "20px" }}>Support</h4><br />
            <p className='text-center px-3' style={{ marginTop: "-20px", color: "grey" }}>Support via chat & ticket to resolve your any technical query</p>
          </motion.div>

        </div>
      </div>
      <br /><br />
      <div className='row '>
        <div className='col-md-12'>
          <h2 className='text-center' >Our <strong className='text-primary'>Partners</strong></h2>
        </div>
      </div>
      <br />
      <div className='row justify-content-between'>
        <div className='col-md-4 border-end'>
          <motion.img whileHover={{ scale: 1.2 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }} className='img-fluid mx-auto ms-5 px-5' src='https://codedthemes.com/wp-content/uploads/2022/03/Phoenixcoded-logo.png.webp' alt='' />
        </div>
        <div className='col-md-4 border-end'>
          <motion.img whileHover={{ scale: 1.2 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }} className='img-fluid mx-auto ms-5 px-5' src='https://codedthemes.com/wp-content/uploads/2022/03/Appseed-logo.png.webp' alt='' />
        </div>
        <div className='col-md-4'>
          <motion.img whileHover={{ scale: 1.2 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }} className='img-fluid mx-auto ms-5 px-5 mt-3' src='https://codedthemes.com/wp-content/uploads/2022/03/rudrisha-logo.png.webp' alt='' />
        </div>
      </div>
      <br /><br />
    </div >
  )
}
export default Home


{/* <span style={{ color: '#5B84FA' }}>
              <Typewriter
                words={['Bootstrap', 'Angular', 'Vue', 'React', 'Svelte', 'Ember', 'Next.js', 'Solid', 'Express.js', 'GraphQL', 'Nativescript', 'NestJS']}
                loop={500}
                cursor cursorColor='black'
                cursorStyle='|'
                typeSpeed={200}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span> */}



























































































































