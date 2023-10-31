import React, { useState, useEffect } from 'react';
import FeaturedProduct from '../components/FeaturedProduct/FeaturedProduct';
import * as productsApi from '../utilities/products-api';

export default function ProductListPage({products, setProducts}) {

  useEffect(() => {
    async function getAllProducts() {
      const allProducts = await productsApi.getAll();
      setProducts(allProducts);
    }
    getAllProducts();
  }, [])

  return (
    <div>
      <h1>Products</h1>
      {
        products.map((p, idx) => <FeaturedProduct key = {p._id} product = {p}/>)
      }
    </div>
  );
}
