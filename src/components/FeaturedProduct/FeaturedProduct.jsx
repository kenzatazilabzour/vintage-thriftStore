import React from 'react';

export default function FeaturedProduct({ name, price, imageUrl }) {
  return (
    <div className="featured-product">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
