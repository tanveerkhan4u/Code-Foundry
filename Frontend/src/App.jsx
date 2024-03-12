
import React from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes, NavLink, } from 'react-router-dom';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Reactdetail from './Components/Reactdetail';
import Browsestack from './Components/Browsestack';
import Vuedetail from './Components/Vuedetail';
import Bootstrapdetail from './Components/Bootstrapdetail';
import Angulardetail from './Components/Angulardetail';
import Emberdetail from './Components/Emberdetail';
import Sveltedetail from './Components/Sveltedetail';
import Exportstack from './Components/Exportstack';
import { SnackbarProvider } from 'notistack';
import Home from './Components/Home';
import  Solid  from './Components/Solid';
import Notfound from './Components/Notfound';
import Nextdetail from './Components/Nextdetail';
import Nest from './Components/Nest';
import Express from './Components/Express';
import Graphql from './Components/Graphql';
import Nativescript from './Components/Nativescript';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Feedback from './Components/Feedback';
import { AppProvider} from './AppContext';
import Card from './Components/Card';
import Log from './Components/Log';
import Movingcard from './Components/Movingcard';









function App() {





  return (
    <>
      <div>
        
          <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} iconVariant={{ success: '✔ 🎉😍', error: '👀', }}>
            <BrowserRouter>
            <AppProvider>
              <Navbar></Navbar>
              <Routes>
                <Route path='/Signup' element={<Signup />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/Navbar' element={<Navbar />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Reactdetail' element={<Reactdetail />} />
                <Route path='/Vuedetail' element={<Vuedetail />} />
                <Route path='/Bootstrapdetail' element={<Bootstrapdetail />} />
                <Route path='/Angulardetail' element={<Angulardetail />} />
                <Route path='/Emberdetail' element={<Emberdetail />} />
                <Route path='/Solid' element={<Solid />} />
                <Route path='/Nativescript' element={<Nativescript />} />
                <Route path='/Nextdetail' element={<Nextdetail/>} />
                <Route path='/Nest' element={<Nest/>} />
                <Route path='/Graphql' element={<Graphql/>} />
                <Route path='/Express' element={<Express/>} />
                <Route path='/Sveltedetail' element={<Sveltedetail />} />
                <Route path='/Browsestack' element={<Browsestack />} />
                <Route path='*' element={<Notfound />} />
                <Route path='/Exportstack/:stackname' element={<Exportstack />} />
                <Route path='/Footer' element={<Footer />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Feedback' element={<Feedback/>} />
                <Route path='/Card' element={<Card/>} />
                <Route path='/Log' element={<Log/>} />
                <Route path='/Movingcard' element={<Movingcard/>} />
                
                
              </Routes>
             <Footer></Footer>
             </AppProvider>
            </BrowserRouter>
          </SnackbarProvider>
      </div>
    </>
  )
}

export default App
      
            









