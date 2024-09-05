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
                <li><NavLink to='/register'>Register</NavLink></li>
                <li><NavLink to='/login'>Log In</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header