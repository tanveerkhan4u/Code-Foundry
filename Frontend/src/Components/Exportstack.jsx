import React, { useState } from 'react'
import { slide as Menu, stack } from 'react-burger-menu'
import {IconMenu2} from '@tabler/icons-react';
import { useParams } from 'react-router-dom';
import stackData from '../stacks';


const Exportstack = () => {


  const [sidebarOpen, setSidebarOpen] = useState(false);

  const {stackname} = useParams();

  const selStack = stackData.find(stack => stack.name === stackname);

  console.log(selStack.structure);

  const displayStackFiles = () => {
    return <div className='card col-md-3'>
      <div className='card-header'>
        <h3>Files</h3>
      </div>
      <div className='card-body'>
        <ul>
          {selStack.structure.map(entry => <li>{entry.filename}</li>)}
        </ul>
      </div>
    </div>
  }

      
      
           
        


  const generateStack = async () => {
    const res = await fetch('http://localhost:5000/stack/generate', {
      method: 'POST',
      body: JSON.stringify(selStack),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(res.status);
  }


  return (
    <div>
      {/* <button onClick={() => {setSidebarOpen(!sidebarOpen)}}>
        <IconMenu2 color='red' size={30}/>
      </button> */}
      <div className='container-fluid '>
        <div className='col-md-3'>
          <h2 className='text-center m-0 p-3' style={{ backgroundColor: "lightblue" }}> myForm</h2>
          <h5 className='text-white text-center p-3' style={{ backgroundColor: "grey" }}>Standard</h5>
        </div>
        {
          selStack !== undefined && (
            displayStackFiles()
          )
        }
        
        <button onClick={generateStack} className='btn btn-primary w-25 py-2 mt-3'style={{fontSize:"20px"}}>export stack</button>
      </div>
       
      
        
        
        
        



        {/* <Menu isOpen={sidebarOpen}>
          <a id="home" className="menu-item" href="/" style={{ marginLeft: "30px", fontSize: "25px", marginBottom: "10px", textDecoration: "none", color: "grey" }}> <i class="fa-regular fa-star"></i>&nbsp;Favorites</a>
          <a id="about" className="menu-item " href="/about" style={{ marginLeft: "30px", fontSize: "25px", marginBottom: "10px", textDecoration: "none", color: "grey" }}><i class="fa-regular fa-bell"></i>&nbsp;Alerts</a>
          <a id="contact" className="menu-item " href="/contact" style={{ marginLeft: "30px", fontSize: "25px", marginBottom: "10px", textDecoration: "none", color: "grey" }}><i class="fa-regular fa-envelope"></i>&nbsp;Messages</a>
          <a id="contact" className="menu-item " href="/contact" style={{ marginLeft: "30px", fontSize: "25px", marginBottom: "10px", textDecoration: "none", color: "grey" }}><i class="fa-regular fa-envelope"></i>&nbsp;Comments</a>
          <a id="contact" className="menu-item " href="/contact" style={{ marginLeft: "30px", fontSize: "25px", marginBottom: "10px", textDecoration: "none", color: "grey" }}><i class="fa-solid fa-chart-simple"></i>&nbsp;Analytics</a>
          <a id="contact" className="menu-item " href="/contact" style={{ marginLeft: "30px", fontSize: "25px", marginBottom: "10px", textDecoration: "none", color: "grey" }}><i class="fa-solid fa-book-open"></i>&nbsp;Reading List</a>

          <a className="menu-item--small" href="" style={{ marginLeft: "30px", fontSize: "25px", marginBottom: "10px", textDecoration: "none", color: "grey" }}>Settings</a>
        </Menu> */}<br/><br/>
        
       
      
    </div>
    
  )
}

export default Exportstack;
