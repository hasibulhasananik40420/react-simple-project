import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Shipment = () => {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone , setPhone] = useState('')
    const [error , setError] = useState('')
    const navigate = useNavigate()


    const handleNameBlur=event=>{
        setName(event.target.value)
    }

    const handleEmailBlur= event=>{
        setEmail(event.target.value)
    }
    
    const handleAddressBlur =event=>{
     setAddress(event.target.value)
    }

     const handlePhoneNumberBlur=event=>{
         setPhone(event.target.value)
     }

      const handleCreateUser = event=>{
           event.preventDefault()
      } 
            


    return (
        <div className='from-container'>
        <div>
        <h2 className='from-title'> Shipping Information</h2>
         <form onSubmit={handleCreateUser}>
         <div className="input-group">
             <label htmlFor="text">Your Name</label>
             <input onBlur={handleNameBlur} type="text" name="text" id="" required/>
         </div>
         <div className="input-group">
             <label htmlFor="email">Your Email</label>
             <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
         </div>
          <div className="input-group">
              <label htmlFor="text">Address</label>
              <input onBlur={handleAddressBlur} type="Address" name="address" id="" required/>
          </div>
          <div className="input-group">
              <label htmlFor="text"> Phone Number</label>
              <input onBlur={handlePhoneNumberBlur} type="text" name="phone number" id="" required/>
          </div>
           <p style={{color:'red'}}>{error}</p>
          <input className='from-submit' type="submit" value="Add Shipping" required />
         </form>
        
        </div>
     </div>
    );
};

export default Shipment;