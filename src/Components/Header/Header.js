import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
             <img src={logo} alt="" />
            </div>
            <div className="navbar">
               <Link to="/shop">Shop</Link>
               <Link to="/orders"> Orders</Link>
               <Link to="/invantory">Invantory</Link>
               <Link to="/about">About</Link>
                <Link to='/login' > Login</Link>
            </div>

        </div>
    );
};

export default Header;