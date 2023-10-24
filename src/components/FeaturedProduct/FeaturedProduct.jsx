import React from 'react';

export default function FeaturedProduct({ product }) {
  return (
    <div className="featured-product">
      {/* <img src={imageUrl} alt={name} /> */}
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.seller.name}</p>
      <p>{product.category}</p>
      <button>Add to Cart</button>
    </div>
  );
}
