import React, { useState } from 'react'
import { slide as Menu, stack } from 'react-burger-menu'
import { IconMenu2 } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';
import stackData from '../stacks';
import { Link } from 'react-router-dom';
import dependencyData from './depedency';



const Exportstack = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [selDependencies, setSelDependencies] = useState([]);


  const [name, setname] = useState();
  console.log(name);


  // const { depname } = useParams();
  // const seldep = dependencyData.find(dep => dep.name === depname);
  // console.log(depname.name);

  const displayDependency = () => {
    return <div className="card">
      {/* <div className="card-header"></div> */}
      <div className='text'>
        <ul>
          {dependencyData.map(entry => <div className='d-flex align-items-start '>
            <label className="checkbox-container">
              <input type="checkbox" checked={selDependencies.includes(entry.name)} onChange={(e) => {
                if (e.target.checked) {
                  setSelDependencies([...selDependencies, entry.name]);
                } else {
                  setSelDependencies(selDependencies.filter(dep => dep !== entry.name));
                }
              }} />
              <span className="checkmark" />
            </label>
            <li>
              <h4>{entry.name}</h4>
              <p>{entry.description}</p>
            </li>
          </div>
          )}
          <button className='btn btn-primary fs-5 w-100'>Add Depedencies</button>
        </ul>
      </div>
    </div>
  };


  // {
  //   seldep !== undefined && (
  //     displaydepedency()
  //   )
  // }

  const { stackname } = useParams();
  const selStack = stackData.find(stack => stack.name === stackname);
  console.log(selStack.structure);
  const displayStackFiles = () => {
    return <div className='card '>
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
    <div className='flex  p-0  bg-[#dbedff]'>
      {/* <button onClick={() => {setSidebarOpen(!sidebarOpen)}}>
        <IconMenu2 color='red' size={30}/>
      </button> */}




      <div className='flex mx-auto md:flex-row  flex-col min-h-screen'>
        <div className='basis-1/2'>
          <h2 className='text-center p-3' > myForm</h2>
          <h5 className='text-white text-center p-3' style={{ backgroundColor: "grey" }}>Standard</h5>
          <div>
          </div>
          {
            selStack !== undefined && (
              displayStackFiles()
            )
          }
          <button onClick={generateStack} className=' py-2 mt-3 fs-5 w-full btn btn-primary'>Export Stack</button> 
        </div>

          


        

        <div className='basis-1/2'>


      <div className="dpedency">
          {displayDependency()}
        </div>
</div>
      </div>




    </div>
  )
}

export default Exportstack;







































       









      {/* <Menu isOpen={sidebarOpen}>
          <a id="home" className="menu-item" href="/" style={{ marginLeft: "30px", fontSize: "25px", marginBottom: "10px", textDecoration: "none", color: "grey" }}> <i class="fa-regular fa-star"></i>&nbsp;Favorites</a>
          <a id="about" className="menu-item " href="/about" style={{ marginLeft: "30px", fontSize: "25px", marginBottom: "10px", textDecoration: "none", color: "grey" }}><i class="fa-regular fa-bell"></i>&nbsp;Alerts</a>
          <a id="contact" className="menu-item " href="/contact" style={{ marginLeft: "30px", fontSize: "25px", marginBottom: "10px", textDecoration: "none", color: "grey" }}><i class="fa-regular fa-envelope"></i>&nbsp;Messages</a>
          <a id="contact" className="menu-item " href="/contact" style={{ marginLeft: "30px", fontSize: "25px", marginBottom: "10px", textDecoration: "none", color: "grey" }}><i class="fa-regular fa-envelope"></i>&nbsp;Comments</a>
          <a id="contact" className="menu-item " href="/contact" style={{ marginLeft: "30px", fontSize: "25px", marginBottom: "10px", textDecoration: "none", color: "grey" }}><i class="fa-solid fa-chart-simple"></i>&nbsp;Analytics</a>
          <a id="contact" className="menu-item " href="/contact" style={{ marginLeft: "30px", fontSize: "25px", marginBottom: "10px", textDecoration: "none", color: "grey" }}><i class="fa-solid fa-book-open"></i>&nbsp;Reading List</a>

          <a className="menu-item--small" href="" style={{ marginLeft: "30px", fontSize: "25px", marginBottom: "10px", textDecoration: "none", color: "grey" }}>Settings</a>
        </Menu> */}







