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


  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<ProductListPage products = {products} setProducts = {setProducts}/>} />
              <Route path="/auth" element={<AuthPage />} />
              {/* <Route path="/posts" element={<PostsPage />} /> */}
              <Route path="/products/new" element={<NewProductPage addProduct = {addProduct}/>} />
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/cart" element={<ShoppingCart />} />

            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
