import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header className='header container'>

        <div className='logo'>
            <NavLink to='/'>LOGO</NavLink></div>
        <nav className='navbar'>
            <ul className='nav-links'>
                <li><NavLink to='/signin'>Sign In</NavLink></li>
                <li><NavLink to='/signup'>Sign Up</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header