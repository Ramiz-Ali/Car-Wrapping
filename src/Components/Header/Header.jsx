import React from 'react';
import './Header.css';
import { Menu } from 'lucide-react';

const Header = ({ toggleMenu }) => {
  return (
    <div className='header-main'>
      <div className="menu-header" onClick={toggleMenu}> {/* Calls toggleMenu on click */}
        <Menu size={22} color='#b9b7b7' />
      </div>
      <div className="just-wrap-text">
        <h1>Just</h1>
        <h1 className='wrap-text'>Wrap</h1>
      </div>
      <button className='estimate-button'>Get Estimate</button>
    </div>
  );
};

export default Header;
