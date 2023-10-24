import React, { useState, useEffect } from 'react';
import FeaturedProduct from '../components/FeaturedProduct/FeaturedProduct';


export default function ProductListPage({products}) {



  return (
    <div>
      <h1>Products</h1>
      {
        products.map((p, idx) => <FeaturedProduct key = {p._id} product = {p}/>)
      }
    </div>
  );
}
