import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='from-container'>
           <div>
           <h2 className='from-title'> Login</h2>
            <form>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required />
            </div>
             <div className="input-group">
                 <label htmlFor="password">Password</label>
                 <input type="password" name="password" id="" required/>
             </div>
             <input className='from-submit' type="submit" value="Login" required />
            </form>
            <p>
                New to Ema-Jhon ? <Link className='from-link' to='/singup'>Create an account</Link>
            </p>
           </div>
        </div>
    );
};

export default Login;