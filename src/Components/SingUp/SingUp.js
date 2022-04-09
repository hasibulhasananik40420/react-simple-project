import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SingUp.css'
import auth from '../../firebase.init';
const SingUp = () => {
    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('')
    const [error , setError] = useState('')
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword , user ] = useCreateUserWithEmailAndPassword(auth )

    const handleEmailBlur= event=>{
        setEmail(event.target.value)
    }
    
     useEffect(()=>{
        if(user){
            navigate('/shop')
         }
     } , [user])
    const hanglePasswordBlur =event=>{
        setPassword(event.target.value)
    }

     const handleConfirmPassword=event=>{
         setConfirmPassword(event.target.value)
     }

      const handleCreateUser = event=>{
           event.preventDefault()
           if(password !==confirmPassword){
               setError("Your password didn't match ..")
               return
           }
           if(password.length <6){
               setError("Yuor password must be six characters")
               return
           }
            
          
            
            createUserWithEmailAndPassword(email , password)

        //    createUserWithEmailAndPassword(email , password)
        //    .then(result=>{
               
        //        console.log('user created');
        //    })


      }
     
    return (
        <div className='from-container'>
           <div>
           <h2 className='from-title'> Sing Up</h2>
            <form onSubmit={handleCreateUser}>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
            </div>
             <div className="input-group">
                 <label htmlFor="password">Password</label>
                 <input onBlur={hanglePasswordBlur} type="password" name="password" id="" required/>
             </div>
             <div className="input-group">
                 <label htmlFor="password"> Confirm Password</label>
                 <input onBlur={handleConfirmPassword} type="password" name="confirm password" id="" required/>
             </div>
              <p style={{color:'red'}}>{error}</p>
              {/* <p style={{color:'red'}}>{hookError}</p> */}
             <input className='from-submit' type="submit" value="Sing Up" required />
            </form>
            <p>
                Already have an account ? <Link className='from-link' to='/login'>Login</Link>
            </p>
           </div>
        </div>
    );
};

export default SingUp;