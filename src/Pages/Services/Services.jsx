import React, { useState } from 'react';
import './Services.css'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import ServicesData from '../../Components/ServicesData/ServicesData'
import Home_Gallery from '../../Components/Home_Gallery/Home_Gallery'
import Footer from '../../Components/Footer/Footer'
const Services = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='services-main'>
      <Header toggleMenu={toggleMenu}/>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu}/>
      <ServicesData/>
      <Home_Gallery/>
      <Footer/>
    </div>
  )
}

export default Services
