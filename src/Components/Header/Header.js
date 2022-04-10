import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
     const [user] = useAuthState(auth)
     const handleSingOut =()=>{
         signOut(auth)

     }
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
               {
                user?
                <a className='singout-btn' onClick={handleSingOut}>Sing Out </a>
                :

               <Link to='/login' > Login</Link>}
            </div>

        </div>
    );
};

export default Header;