import React, { } from 'react'
import { NavLink } from 'react-router-dom';







const Navbar = () => {

  

  return (
    <div>
      <nav 

      className="navbar navbar-expand-lg shadow">
  <div className="container-fluid">
    <NavLink to="/Home">
    <a className="navbar-brand" href="#">
      <img src='https://images-platform.99static.com/xhigkkx1UQyo9QC5h7cs_Q7Dy8I=/500x500/top/smart/99designs-contests-attachments/37/37621/attachment_37621809'  style={{width:'150px', height:'100px', marginLeft:"70px"}} alt=''></img>
    </a>
    </NavLink>    
    
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      <li className="nav-item" style={{fontSize:'20px', marginLeft:"150px"}}>
              
                <NavLink className="nav-link" to="/Home">
                  Home
                </NavLink>
              </li>
      
              <li className="nav-item" style={{fontSize:'20px'}}>
                <NavLink className="nav-link" to="/Login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item" style={{fontSize:'20px'}}>
                <NavLink className="nav-link" to="/Browsestack">
                 Browse Stack
                </NavLink>
              </li>
              <li className="nav-item" style={{fontSize:'20px'}}>
                <NavLink className="nav-link" to="/Contact">
                 Contact Us
                </NavLink>
              </li>
              <li className="nav-item" style={{fontSize:'20px'}}>
                <NavLink className="nav-link" to="/Feedback">
                 Feedback
                </NavLink>
              </li>
              
              
       
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}


export default Navbar;
