import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination, Autoplay } from 'swiper/modules';

const Home = () => {
  return (
    <div>
      <header className='text-dark' style={{ backgroundColor: "#dbedff" }}>
        <div className='container-fluid py-5' style={{ height: "650px" }}>
          <h1 className='text-center' style={{ marginTop: "20px" }}>Trending Templates</h1>
          <p className='text-center' style={{ marginTop: "30px", color: "grey" }}>Explore our curated collection of free and premium admin dashboard template for your next project!</p>
          <div className='row' style={{ marginLeft: "400px", marginTop: "40px" }}>
            <input type="text" className="form-control" placeholder='Search...' style={{ width: "500px", padding: "15px" }} />
            <button className='btn btn-primary' style={{ position: "relative", width: "100px", right: "105px", height: "45px", marginTop: "5px" }}>search</button>
          </div>
          <img src='https://codedthemes.com/wp-content/uploads/2022/03/main-banner-bottom-img-1.png' style={{ marginLeft: "400px" }} alt=''></img>
        </div>
      </header>
      <br /><br />

      <div className='container'>
        <h3 className='text-center'>We create custom for the application using the following technology</h3>
      </div>


      <div className='logo d-flex'>
        <Swiper slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper">
          <SwiperSlide>
            <div>
              <Link to="/Bootstrapdetail" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <div className='card py-5'>
                  <img src='https://codedthemes.com/wp-content/uploads/2022/04/boostrap-logo.jpg.webp' style={{ marginLeft: "70px", height: "80px", width: "100px", objectFit: 'cover' }} alt='' />
                  <h4 className='text-center' style={{ marginTop: "20px" }}>Bootstrap</h4>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Angulardetail" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <div className='card py-5'>
                  <img src='https://codedthemes.com/wp-content/uploads/2022/04/angular-logo.jpg.webp' style={{ marginLeft: "70px", height: "80px", width: "100px" }} alt='' />
                  <h4 className='text-center' style={{ marginTop: "20px" }}>Angular</h4>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Reactdetail" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <div className='card py-5'>
                  <img src='https://codedthemes.com/wp-content/uploads/2022/04/react-logo.jpg.webp' style={{ marginLeft: "70px", height: "80px", width: "100px" }} alt='' />
                  <h4 className='text-center' style={{ marginTop: "20px" }}>React</h4>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Vuedetail" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <div className='card py-5'>
                  <img src='https://masteringjs.io/assets/images/vue/vue.jpg' style={{ marginLeft: "70px", height: "80px", width: "100px" }} alt='' />
                  <h4 className='text-center' style={{ marginTop: "20px" }}>Vue</h4>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Nest" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <div className='card py-5'>
                  <img src='https://static-00.iconduck.com/assets.00/nestjs-icon-2048x2040-3rrvcej8.png' style={{ marginLeft: "80px", height: "80px", width: "80px", objectFit: "cover" }} alt='' />
                  <h4 className='text-center' style={{ marginTop: "20px" }}>NestJS</h4>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Sveltedetail" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <div className='card py-5'>
                  <img src='https://w7.pngwing.com/pngs/598/9/png-transparent-svelte-hd-logo-thumbnail.png' style={{ marginLeft: "80px", height: "80px", width: "80px" }} alt='' />
                  <h4 className='text-center' style={{ marginTop: "20px" }}>Svelte</h4>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Emberdetail" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <div className='card py-5'>
                  <img src='https://emberjs.com/images/brand/ember-tomster-lockup-4c.svg' style={{ marginLeft: "60px", height: "150px", width: "120px", marginTop: "-40px" }} alt='' />
                  <h4 className='text-center' style={{ marginTop: "-5px" }}>Ember</h4>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Nextdetail" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <div className='card py-5'>
                  <img src='https://miro.medium.com/v2/resize:fit:650/1*Hva7hcsFWulFUPhrEWui1A.jpeg' style={{ marginLeft: "20px", height: "120px", width: "200px", marginTop: "-20px" }} alt='' />
                  <h4 className='text-center'>Next.JS</h4>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Solid" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <div className='card py-5'>
                  <img src='https://avatars.githubusercontent.com/u/79226042?s=280&v=4' style={{ marginLeft: "70px", height: "100px", width: "120px" }} alt='' />
                  <h4 className='text-center' style={{ marginTop: "-2px" }}>Solid</h4>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Express" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <div className='card py-5'>
                  <img src='https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png' style={{ marginLeft: "70px", height: "100px", width: "100px" }} alt='' />
                  <h4 className='text-center'>Express.js</h4>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Graphql" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <div className='card py-5'>
                  <img src='https://cdn.iconscout.com/icon/free/png-256/free-graphql-3521468-2944912.png' style={{ marginLeft: "60px", height: "100px", width: "120px" }} alt='' />
                  <h4 className='text-center' style={{ marginTop: "5px" }}>GraphQL</h4>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Nativescript" className='col-2 ' style={{ marginLeft: "75px", textDecoration: "none" }}>
                <div className='card py-5'>
                  <img src='https://seeklogo.com/images/N/nativescript-logo-309BDE68D3-seeklogo.com.png' style={{ marginLeft: "70px", height: "100px", width: "100px" }} alt='' />
                  <h4 className='text-center' style={{ marginTop: "10px" }}>Nativescript</h4>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <br /><br />
        </Swiper>
      </div>
      <br /><br />








      <div className='container bg-body-secondary'>
        <marquee behavior="scroll" direction="left" scrollamount="15">
          <h1 className='text-center'>FRONT-END FRAMEWORKS</h1>
        </marquee>
      </div>
      <br /><br />
      <div className='container-fluid'>
        <h2 className='text' style={{ marginLeft: "40px" }}>Best Selling <strong className='text-primary'>Products</strong></h2><br />
        <p className='text' style={{ marginLeft: "40px", color: "grey" }}>Explore our best-selling templates of all time!</p>

      </div>
      <br /><br />

      <div className='container-fluid d-flex'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper">
          <SwiperSlide>
            <div>
              <Link to="/Reactdetail" style={{ textDecoration: "none" }}>

                <div className="card" style={{ width: "25rem", marginLeft: "40px" }}>
                  <img src="https://codedthemes.com/wp-content/uploads/edd/2022/05/Materially-Free-Reactjs-Admin-Template.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className='text' >React</h5>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Angulardetail" style={{ textDecoration: "none" }}>
                <div className="card " style={{ width: "25rem", marginLeft: "20px" }}>
                  <img src="https://codedthemes.com/wp-content/uploads/edd/2022/11/Berry-Angular.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className='text' >Angular</h5>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Bootstrapdetail" style={{ textDecoration: "none" }}>
                <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
                  <img src="https://codedthemes.com/wp-content/uploads/edd/2022/05/Empire-Bootstrap-4-Admin-Template.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className='text' >Bootstrap</h5>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Vuedetail" style={{ textDecoration: "none" }}>
                <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
                  <img src="https://codedthemes.com/wp-content/uploads/edd/2022/11/Berry-vue.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className='text' >Vue</h5>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Sveltedetail" style={{ textDecoration: "none" }}>
                <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
                  <img src="https://www.creative-tim.com/blog/content/images/wordpress/2020/09/svelte-admin-dashboard.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className='text' >Svelte</h5>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Emberdetail" style={{ textDecoration: "none" }}>
                <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
                  <img src="https://raw.githubusercontent.com/huxinghai1988/ember-adminlte-theme/master/preview.png" style={{ height: "300px", objectFit: 'cover' }} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className='text' >Ember</h5>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Solid" style={{ textDecoration: "none" }}>
                <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
                  <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/concept-free-admin-dashboard-panel.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className='text' >Solid</h5>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Nextdetail" style={{ textDecoration: "none" }}>
                <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
                  <img src="https://s3.amazonaws.com/creativetim_bucket/products/341/original/opt_md_nextjs_thumbnail.jpg?1597319357" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className='text' >Next.Js</h5>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <br /><br />
        </Swiper>
      </div><br /><br />

      <div className='container bg-body-secondary'>
        <marquee behavior="scroll" direction="left" scrollamount="15">
          <h1 className='text-center'>BACK-END FRAMEWORKS</h1>
        </marquee>
      </div>
      <br /><br />
      <div className='container-fluid d-flex'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <Link to="/Express" style={{ textDecoration: "none" }}>
                <div className="card" style={{ width: "25rem", marginLeft: "40px" }}>
                  <img src="https://adminlte.io/wp-content/uploads/2021/06/minible-nodejs-dashboard-template.jpg" style={{ height: "275px" }} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className='text' >Express.js</h5>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Nest" style={{ textDecoration: "none" }}>
                <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
                  <img src="https://user-images.githubusercontent.com/7660346/180629352-f92216e3-7cf4-4fba-92fa-089dd96b4478.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className='text' >NestJS</h5>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Graphql" style={{ textDecoration: "none" }}>
                <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
                  <img src="https://raw.githubusercontent.com/huxinghai1988/ember-adminlte-theme/master/preview.png" style={{ height: "275px", objectFit: 'cover' }} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className='text' >GraphQL</h5>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to="/Graphql" style={{ textDecoration: "none" }}>
                <div className="card" style={{ width: "25rem", marginLeft: "20px" }}>
                  <img src="https://codedthemes.com/wp-content/uploads/edd/2022/09/Berry-bootstrap-nodejs.png" style={{ height: "275px" }} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className='text' >Nitro</h5>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <br /><br />
        </Swiper>
      </div><br /><br />

      <div className='container bg-body-secondary'>
        <marquee behavior="scroll" direction="left" scrollamount="15">
          <h1 className='text-center'>MOBILE APPLICATION</h1>
        </marquee>
      </div>
      <br /><br />
      <div className='container-fluid d-flex'>
        <Link to="/Nativescript" style={{ textDecoration: "none" }}>
          <div className="card" style={{ width: "25rem", marginLeft: "40px" }}>
            <img src="https://img.freepik.com/free-vector/dashboard-user-panel-template_52683-29382.jpg" style={{ height: "275px", objectFit: 'cover' }} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className='text' >NativeScript</h5>
            </div>
          </div>
        </Link>
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


      <div className='container-fluid'>
        <img src='https://www.designerpeople.com/wp-content/uploads/2019/11/website-template-design-2.jpg' style={{ marginLeft: "60px", height: "400px", width: "1200px" }} alt='' />
      </div>
      <br /><br />
      <div className='col-4 ' style={{ marginLeft: "70px" }}>
        <h2 className='text'>Why <strong className='text-primary'>CodeFoundry?</strong></h2><br />
        <p className='text' style={{ color: "grey" }}>CodeFoundry servicing the web industry since 2020 and gaining trust and support from a large client base.</p>
      </div>
      <br /><br />

<div className='container-fluid d-flex'>
      <div className='card shadow'style={{marginLeft:"40px",width:"400px",height:"200px"}}>
        <img src='https://codedthemes.com/wp-content/uploads/2022/04/Flexible-code-icon-1.png.webp' style={{ marginLeft: "180px", height: "40px", width: "40px", marginTop:"20px" }} alt='' />
        <h4 className='text-center' style={{ marginTop: "20px" }}>Flexible Code</h4><br/>
        <p className='text-center px-3' style={{marginTop:"-20px", color:"grey" }}>Easy to start your project with our easy to use code standard.</p>
      </div>
      <div className='card shadow' style={{marginLeft:"20px", width:"400px", height:"200px"}}>
        <img src='https://codedthemes.com/wp-content/uploads/2022/05/quality.svg' style={{ marginLeft: "180px", height: "40px", width: "40px",marginTop:"20px" }} alt='' />
        <h4 className='text-center' style={{ marginTop: "20px" }}>Quality First</h4><br/>
        <p className='text-center px-3' style={{marginTop:"-20px", color:"grey" }}>We believe in quality designs and code instead of quantity</p>
      </div>
      <div className='card shadow' style={{marginLeft:"20px", width:"400px", height:"200px"}}>
        <img src='https://codedthemes.com/wp-content/uploads/2022/04/Freemium-Model-icon-1.png.webp' style={{ marginLeft: "180px", height: "40px", width: "40px",marginTop:"20px" }} alt='' />
        <h4 className='text-center' style={{ marginTop: "20px" }}>Freemium Model</h4><br/>
        <p className='text-center px-3' style={{marginTop:"-20px", color:"grey" }}>Our belief on open-source led us to provide a free versions of most products</p>
      </div>
      </div>
      <br /><br />

      <div className='container-fluid d-flex'>
      <div className='card shadow'style={{marginLeft:"40px",width:"400px",height:"200px"}}>
        <img src='https://codedthemes.com/wp-content/uploads/2022/04/Documentation-icon-1.png' style={{ marginLeft: "180px", height: "40px", width: "40px", marginTop:"20px" }} alt='' />
        <h4 className='text-center' style={{ marginTop: "20px" }}>Documentation</h4><br/>
        <p className='text-center px-3' style={{marginTop:"-20px", color:"grey" }}>Detailed step by step documentation helper file for each template</p>
      </div>
      <div className='card shadow' style={{marginLeft:"20px", width:"400px", height:"200px"}}>
        <img src='https://codedthemes.com/wp-content/uploads/2022/04/Free-updates-icon-1.png' style={{ marginLeft: "180px", height: "40px", width: "40px",marginTop:"20px" }} alt='' />
        <h4 className='text-center' style={{ marginTop: "20px" }}>Free Updates</h4><br/>
        <p className='text-center px-3' style={{marginTop:"-20px", color:"grey" }}>Free updates help to keep your project always up to Date</p>
      </div>
      <div className='card shadow' style={{marginLeft:"20px", width:"400px", height:"200px"}}>
        <img src='https://codedthemes.com/wp-content/uploads/2022/04/Support-icon-1.png' style={{ marginLeft: "180px", height: "40px", width: "40px",marginTop:"20px" }} alt='' />
        <h4 className='text-center' style={{ marginTop: "20px" }}>Support</h4><br/>
        <p className='text-center px-3' style={{marginTop:"-20px", color:"grey" }}>Support via chat & ticket to resolve your any technical query</p>
      </div>
      </div>
      <br /><br />

      <div className='container-fluid d-flex'>
        <h2 className='text' style={{ marginLeft: "550px" }}>Our <strong className='text-primary'>Partners</strong></h2>
        </div>
        <br/>

        <div className='container-fluid d-flex'>
          <div>
            <img src='https://codedthemes.com/wp-content/uploads/2022/03/Phoenixcoded-logo.png.webp' style={{marginLeft:"150px"}}  alt='' />
          </div>
          <div>
            <img src='https://codedthemes.com/wp-content/uploads/2022/03/Appseed-logo.png.webp' style={{marginLeft:"150px", marginTop:"-10px"}} alt='' />
          </div>
          <div>
            <img src='https://codedthemes.com/wp-content/uploads/2022/03/rudrisha-logo.png.webp' style={{marginLeft:"150px"}} alt='' />
          </div>
        </div>
        <br/><br/>

        
            
            
          
      
      










































































    </div>


  )
}

export default Home
