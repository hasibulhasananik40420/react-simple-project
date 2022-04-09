import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
     const [email , setEmail] =useState('')
     const [password , setPassword] =useState('')
     const navigate = useNavigate()

     const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

       
       
     const handleEmailBlur =event=>{
         setEmail(event.target.value)
     }
     const handlePasswordBlur=event=>{
         setPassword(event.target.value)
     }
      
     useEffect(()=>{
        if(user){
            navigate('/shop') 
        }
     }, [user])

     

    const handleFromSubmit =event=>{
        event.preventDefault()
        signInWithEmailAndPassword(email , password)

    }
    return (
        <div className='from-container'>
           <div>
           <h2 className='from-title'> Login</h2>
            <form onSubmit={handleFromSubmit}>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
            </div>
             <div className="input-group">
                 <label htmlFor="password">Password</label>
                 <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
             </div>
             <p style={{color:'red'}}>{error?.message}</p>
             {loading && <p>Loading... </p>}
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