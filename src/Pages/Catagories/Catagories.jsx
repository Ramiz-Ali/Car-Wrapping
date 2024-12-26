import React, { useState } from 'react';
import './Catagories.css'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import CateCards from '../../Components/CateCards/CateCards'
import Home_Gallery from '../../Components/Home_Gallery/Home_Gallery'

const Catagories = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='catagories-main'>
       <Header toggleMenu={toggleMenu}/>
       <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu}/>
       <CateCards/>
       <Home_Gallery/>
       <Footer/>
    </div>
  )
}

export default Catagories
