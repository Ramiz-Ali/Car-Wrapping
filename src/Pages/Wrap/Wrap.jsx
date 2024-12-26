import React, { useState } from 'react';
import './Wrap.css';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Wrapgallery from '../../Components/Wrapgallery/Wrapgallery';
import Home_Gallery from '../../Components/Home_Gallery/Home_Gallery';
import Footer from '../../Components/Footer/Footer';

const Wrap = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState(''); // Search state in Wrap

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="wrap-main">
      <Header toggleMenu={toggleMenu} />
      {/* Pass search state and setSearch function to Navbar */}
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} setSearch={setSearch} />
      {/* Pass search state to Wrapgallery */}
      <Wrapgallery search={search} />
      <Home_Gallery />
      <Footer />
    </div>
  );
};

export default Wrap;
