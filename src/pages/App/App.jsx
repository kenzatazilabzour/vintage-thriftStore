import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewProductPage from '../NewProductPage/NewProductPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import NavBar from '../../components/NavBar/NavBar';
import ProductListPage from '../../ProductListPage/ProductListPage';
import PostsPage from '../PostsPage/PostsPage';
import Navigate from '../../components/Navigate/Navigate';
import * as productsApi from "../../utilities/products-api";
import * as ordersApi from "../../utilities/orders-api";



export default function App() {
  const [user, setUser] = useState(getUser());
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  async function addProduct (formData){
    const product = await productsApi.add(formData)
    console.log(product);
    setProducts([...products, product]);
  }
  useEffect(() => {
    async function getAllProducts(){
      const products = await productsApi.getAll();
      setProducts(products);
    }
    getAllProducts();
  }, [])

  // async function addOrder(formData) {
  //   const order = await ordersApi.add(formData)
  //   setOrders([...orders, order]);
  // }
  // useEffect(() => {
  //   async function checkoutAllOrders() {
  //     const orders = await ordersApi.checkoutAll();
  //     setOrders(orders);
  //   }
  //   checkoutAllOrders();
  // }, [])

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<ProductListPage products = {products}/>} />
              <Route path="/auth" element={<AuthPage />} />
              {/* <Route path="/posts" element={<PostsPage />} /> */}
              <Route path="/products/new" element={<NewProductPage addProduct = {addProduct}/>} />
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/cart" element={<ShoppingCart />} />
            {/* <Route path="/*" element={<Navigate to="/" />} /> */}
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}

// export default function ProductDelete({ product, onDelete }) {
//   const handleDelete = () => {
//     fetch(`/api/products/${product._id}`, {
//       method: 'DELETE',
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           onDelete(product._id);
//         } else {
//           console.error('Error deleting product');
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <p>{product.description}</p>
//       <button onClick={handleDelete}>Delete</button>
//     </div>
//   );
// }

async  function DeleteDetails() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleDeleteProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
  };

  return (
    <div>
      {products.map((product) => (
        <DeleteDetails key={product._id} product={product} onDelete={handleDeleteProduct} />
      ))}
    </div>
  );
}
