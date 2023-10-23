import React, { useState, useEffect } from 'react';



export default function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [ascendingOrder, setAscendingOrder] = useState(true);

  useEffect(() => {

  }, []);

  function addProduct(product) {
    setProducts([...products, product]);
  }




  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}
