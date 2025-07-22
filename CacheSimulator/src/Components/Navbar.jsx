import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div className='navcontainer'>
      <a href="#">Direct Mapped Cache</a>
      <a href="#">Full Associative Cache</a>
      <a href="#">Set Associative Cache</a>
    </div>
  )
}

export default Navbar
