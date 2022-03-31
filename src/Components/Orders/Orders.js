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
    const [cart , setCart] = useCart(products)

     const handleRemoveProduct = product=>{
           console.log(product);
           const rest = cart.filter(pd=> pd.id !== product.id)
           setCart(rest)
           removeFromDb(product.id)
     }    
    return (
        <div className='container'>
            
           <div className="revaiew-cart-container">

           {
               cart.map(product=> <ReviewItem key={product.id} product={product} handleRemoveProduct={handleRemoveProduct} ></ReviewItem>)
           }
           </div>
            <div className="summary">
               <Cart cart={cart}>

               <Link to='/orders'>
                <button>Proceed Checkout</button>
                 </Link>

               </Cart>
            </div>
        </div>
    );
};

export default Orders;