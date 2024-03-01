import React, { } from 'react'
import { NavLink } from 'react-router-dom';
import useAppContext from '../AppContext';


const Navbar = () => {


  const { loggedIn, logout } = useAppContext();


  const showLoginOptions = () => {
    if (loggedIn) {
      return (
        <li className='nav-item'>
          <button onClick={logout} className='btn btn-outline-danger'>Log Out</button>
        </li>
      )
    } else {
      return <>
        <li className="nav-item" style={{ fontSize: '20px' }}>
          <NavLink className="nav-link" to="/Login">
            Login
          </NavLink>
        </li>


        <li className="nav-item" style={{ fontSize: '20px' }}>
          <NavLink className="nav-link" to="/Signup">
            Signup
          </NavLink>
        </li>





      </>
    }
  };




  return (

    <div>
      <nav
        className="navbar  navbar-expand-lg  p-0" style={{ backgroundColor: "#dbedff" }}>
        <div className="container-fluid">
          <NavLink to="/Home">
            <a className="navbar-brand" href="#">
              <img src='https://th.bing.com/th/id/OIG2..qpctzdoHBeFrDp_BRbR?pid=ImgGn' className='img-fluid mx-auto ms-5' style={{ width: "100px", maxHeight: "90px" }} alt=''></img>
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

              <li className="nav-item" style={{ fontSize: '20px', marginLeft: "150px" }}>

                <NavLink className="nav-link" to="/Home">
                  Home
                </NavLink>
              </li>


              <li className="nav-item" style={{ fontSize: '20px' }}>
                <NavLink className="nav-link" to="/Browsestack">
                  Browse Stack
                </NavLink>
              </li>
              <li className="nav-item" style={{ fontSize: '20px' }}>
                <NavLink className="nav-link" to="/Contact">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item" style={{ fontSize: '20px' }}>
                <NavLink className="nav-link" to="/Feedback">
                  Feedback
                </NavLink>
              </li>

            </ul>

            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              {showLoginOptions()}
            </ul>


          </div>
        </div>
      </nav>

    </div>
  )
}


export default Navbar;
