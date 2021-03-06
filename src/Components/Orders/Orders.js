import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';
import './Orders.css'
const Orders = () => {
    const [products , setProducts] = useProducts()
    const [cart , setCart] = useCart()

     const handleRemoveProduct = product=>{
           console.log(product);
           const rest = cart.filter(pd=> pd._id !== product._id)
           setCart(rest)
           removeFromDb(product._id)
     }    
    return (
        <div className='container'>
            
           <div className="revaiew-cart-container">

           {
               cart.map(product=> <ReviewItem key={product._id} product={product} handleRemoveProduct={handleRemoveProduct} ></ReviewItem>)
           }
           </div>
            <div className="summary">
               <Cart cart={cart}>

               <Link to='/shipment'>
                <button className='shop-btn'>Proceed Shipping</button>
                 </Link>

               </Cart>
            </div>
        </div>
    );
};

export default Orders;