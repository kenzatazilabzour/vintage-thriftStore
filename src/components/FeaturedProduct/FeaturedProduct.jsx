import React from 'react';
import * as ordersApi from '../../utilities/orders-api';

export default function FeaturedProduct({ product }) {
  async function handleSubmit(){
   const order = await ordersApi.addToOrder(product)
   console.log(order);
  }
  return (
    <div className="featured-product">
      {/* <img src={imageUrl} alt={name} /> */}
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.seller.name}</p>
      <p>{product.category}</p>
      <button onClick = {handleSubmit} >Add to Cart</button>
    </div>
  );
}
