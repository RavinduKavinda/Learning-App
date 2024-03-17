import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from './../../Assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <nav className={`container ${sticky ? 'scroll_nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li className={activeItem === 0 ? 'active' : ''}><a href="#" onClick={() => handleItemClick(0)}>Home</a></li>
        <li className={activeItem === 1 ? 'active' : ''}><a href="#services" onClick={() => handleItemClick(1)}>Services Us</a></li>
        <li className={activeItem === 2 ? 'active' : ''}><a href="#whyus" onClick={() => handleItemClick(2)}>Why Us</a></li>
        <li className={activeItem === 3 ? 'active' : ''}><a href="#goals" onClick={() => handleItemClick(3)}>Our Goals</a></li>
        <li><button className='btn'> <a href="#contact">Contact Us</a></button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
