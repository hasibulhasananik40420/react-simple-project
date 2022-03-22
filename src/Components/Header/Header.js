import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
             <img src={logo} alt="" />
            </div>
            <div className="navbar">
               <a href="/shop">Shop</a>
               <a href="/order"> Order</a>
               <a href="/invantory">Invantory</a>
               <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;