import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
             <img src={logo} alt="" />
            </div>
             {/* <FontAwesomeIcon className='icon' icon={faCoffee}></FontAwesomeIcon> */}
            <div className="navbar">
               <a href="/shop">Shop</a>
               <a href="/order"> Order</a>
               <a href="/invantory">Invantory</a>
               <a href="/about">About</a>
            </div>
            {/* <FontAwesomeIcon className='icon' icon={faCoffee}></FontAwesomeIcon> */}

        </div>
    );
};

export default Header;