import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product);
    const {img, name , price, seller, ratings} = props.product
    const {handleAddToCart} =props
    return (
        <div className='product'>
          <img src={img} alt="" />
          <div className="product-details">
          <p>{name}</p>
          <p><small>price : ${price}</small></p>
          <p><small> Manufacturer : {seller}</small></p>
          <p><small>Rating : {ratings} star</small></p>
          </div>
          <div>
              <button onClick={()=>handleAddToCart(props.product) } className='btn-cart'>
                  <p >Add to Cart <FontAwesomeIcon className='btn-text' icon={faShoppingCart} ></FontAwesomeIcon></p>
              </button>
          </div>
        </div>
    );
};

export default Product;