import { useState, useEffect } from "react"
import * as ordersApi from "../../utilities/orders-api";

export default function ShoppingCart () {
  const [cart, setCart] = useState(null)
  console.log('hello', cart);
  useEffect(() => {
    async function getCart() {
      const order = await ordersApi.getOrder()
      console.log(order);
      setCart(order);
    }
    getCart();

  }, [])

 return (
  <div>
    <h1> Shopping Cart</h1>
    {
      cart && cart.products.map(p=>(
        <div key = {p._id}>
          <h3>{p.name}</h3>
          <p>price: {p.price}</p>
        </div>
      ))
    }
  </div>
 )
}
