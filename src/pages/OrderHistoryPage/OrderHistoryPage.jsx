import { checkToken } from '../../utilities/users-service';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import * as ordersAPI from "../../utilities/orders-api";

export default function OrderHistoryPage(addOrder) {
  const [orders, setOrders] = useState([]);
  useEffect (()=>{
    async function getOrders(){
      const orders = await ordersAPI.getAllForUser();
     setOrders(orders)
     console.log(orders);
    }
    getOrders();
  }, [])

  return (
    <>
      <h1>Order History Page</h1>
    {
      orders.map(o => (
        <div>
          <p>Order number: {o._id}</p>
          <p>total price: {o.totalPrice}</p>
        </div>
      ))
    }
    </>
);
}
