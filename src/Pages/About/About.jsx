import React, { useState } from 'react';
import './About.css'
import AboutData from '../../Components/AboutData/AboutData'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import ChooseUs from '../../Components/ChooseUs/ChooseUs'
import Footer from '../../Components/Footer/Footer'
const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='about-main'>
        <Header toggleMenu={toggleMenu}/>
        <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu}/>
       <AboutData/>
       <ChooseUs/>
       <Footer/>
    </div>
  )
}

export default About
