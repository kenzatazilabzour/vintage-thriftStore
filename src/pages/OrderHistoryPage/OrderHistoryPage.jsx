import { checkToken } from '../../utilities/users-service';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function OrderHistoryPage(addOrder) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    categories: "t-shirts",
  });

  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }

  function handleChange(evt) {
    const data = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(data);
  }
  function handleSubmit() {
    addOrder(formData)
    setFormData({
      name: "",
      description: "",
      price: "",
      categories: "t-shirts",
    });
    navigate("/")


  return (
    <>
      <h1>Order History Page</h1>
      <button onClick={handleCheckToken}>Check My Cart</button>
      <button onClick={handleSubmit}>ADD Order</button>
    </>
);
}
}
