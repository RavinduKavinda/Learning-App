import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from './../../Assets/logo.png';

const Navbar = () => {

  // Sticky Navbar on scroll
  const [sticky, setSticky] = useState(false); 
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', () => {
        window.scrollY > 100 ? setSticky(true) : setSticky(false);
      });
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'scroll_nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li>Home</li>
        <li>Services Us</li>
        <li>Why Us</li>
        <li>Our Goals</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
