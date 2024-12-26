import React, { useState } from 'react';
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Premium from '../../Components/Premium/Premium'
import Pricing from '../../Components/Pricing/Pricing'
import FAQ from '../../Components/Faqs/FAQ'
import Home_Gallery from '../../Components/Home_Gallery/Home_Gallery'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='home-main'>
      <Header toggleMenu={toggleMenu}/>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu}/>
      <Premium/>
      <Pricing/>
      <FAQ/>
      <Home_Gallery/>
      <Footer/>
    </div>
  )
}

export default Home
