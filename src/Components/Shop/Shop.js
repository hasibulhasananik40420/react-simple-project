import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useProducts()
    const [cart,setCart] =useState([])
    // useEffect(()=>{
    //     fetch('products.json')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // },[])
     
    // use effect
     useEffect(()=>{

      const storedCart= getStoredCart()
      const saveCart =[]
      for(const id in storedCart){
        //   console.log(id);
        const addedProduct = products.find(product=> product.id==id)
          if(addedProduct){
            const quantity = storedCart[id]
            addedProduct.quantity = quantity
            saveCart.push(addedProduct)
            console.log(addedProduct);
          }
      }
        setCart(saveCart)

     },[products])

       const handleAddToCart=(selectedProduct)=>{
         let newCart =[]
         const exists = cart.find(product => product.id ===selectedProduct.id)
         if(!exists){
           selectedProduct.quantity = 1
           newCart = [...cart , selectedProduct]
         }
         else{
            const rest = cart.filter(product=>product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1
            newCart = [...rest,exists]
         }
        //  console.log('click');
         setCart(newCart)
         addToDb(selectedProduct.id)
       }

    return (
        <div className='container'>
             <div className="cart-container">
                 {
                     products.map(product=>
                     <Product key={product.id} product={product} handleAddToCart={handleAddToCart} ></Product>)
                 }
             </div>

             <div className="summary">
                <Cart cart={cart}>
               <Link to ='/orders'> 
                <button className='shop-btn'> Review Order </button>
               </Link>
                </Cart>
             </div>
        </div>
    );
};

export default Shop;