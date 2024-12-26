import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home'
import Catagories from './Pages/Catagories/Catagories'
import Wrap from './Pages/Wrap/Wrap';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Catagories' element={<Catagories/>}/>
        <Route path='/Wrap' element={<Wrap/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
  
    </div>
  )
}

export default App
