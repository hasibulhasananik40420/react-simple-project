import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {product,handleRemoveProduct} = props
    const {name , price , img, shipping , quantity} = props.product
    return (
        <div className='review-item'>

            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details-container'>
              
               <div className="review-item-details">
                     <p className='product-name' title={name}> {name.length> 20? name.slice(0,20)+ '...' : name }</p>
                     <p> price : ${price}</p>
                     <p> <small>Shipping : ${shipping}</small></p>
                     <p><small>quantity : {quantity}</small></p>
               </div>
               <div className="delete-btn">
                   <button onClick={()=>handleRemoveProduct(product)}>
                       <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                   </button>
               </div>

            </div>
        </div>
    );
};

export default ReviewItem;