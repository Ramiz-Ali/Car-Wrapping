import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ menuOpen, setSearch }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="navbar-main">
        <ul>
          <Link to="/Home" className="link2"><li>Home</li></Link>
          <Link to="/Catagories" className="link2"><li>Categories</li></Link>
          <Link to="/Wrap" className="link2"><li>Wrap Gallery</li></Link>
          <Link to="/Services" className="link2"><li>Services</li></Link>
          <Link to="/About" className="link2"><li>About</li></Link>
          <Link to="/Contact" className="link2"><li>Contact</li></Link>
        </ul>
        <div className="search-btn">
          {/* Apply onChange to the input */}
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)} // Update the search state
          />
          <Search color="#fff" size={20} className="search-icon" />
        </div>
      </div>

      {/* Mobile Navbar */}
      {isMobile && (
        <div className={`mobile-menu-ul-div ${menuOpen ? 'show' : ''}`}>
          <ul className="mobile-menu-ul">
            <Link to="/Home" className="link2"><li>Home</li></Link>
            <Link to="/Catagories" className="link2"><li>Categories</li></Link>
            <Link to="/Wrap" className="link2"><li>Wrap Gallery</li></Link>
            <Link to="/Services" className="link2"><li>Services</li></Link>
            <Link to="/About" className="link2"><li>About</li></Link>
            <Link to="/Contact" className="link2"><li>Contact</li></Link>
          </ul>
          <div className="search-btn">
            {/* Apply onChange to the mobile search input */}
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)} // Update the search state
            />
            <Search color="#fff" size={20} className="search-icon" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
