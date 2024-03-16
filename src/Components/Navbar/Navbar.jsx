import React from 'react'
import './Navbar.css'
import logo from './../../Assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li>Home</li>
        <li>Services Us</li>
        <li>Why Us</li>
        <li>Our Goals</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar