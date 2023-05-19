import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

//import components
import { Header } from './components/_partials/_Header';
import { Footer } from './components/_partials/_Footer';
import { Home } from './pages/Home';
import { Plants } from './pages/Plants';
import { PlantDetail } from './pages/PlantDetail';
import { CardIndex } from './pages/CardIndex';
import { Profile } from './pages/Profile';
import { CartConfirm } from './pages/CartConfirm';
import { Cart } from './pages/Cart';

function App() {

  // Product API call

  const [products, setProducts] = useState([] as any[]);
  const [user, setUser] = useState(null);

  const [cart, setCart] = useState([] as any[]);
  const [total, setTotal] = useState(0);
  const [totalandTax, setTotalAndTax] = useState(0);
  const [tax, setTax] = useState(0);

  const productsRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/products"
  
  useEffect(() => {
      axios.get(productsRoute)
     .then((response) => {
      const productList = [...response.data];
    setProducts(productList);
    })
  },[]);

  // Set current user state

  function getCurrentUser() {
    const userStr = localStorage.getItem("user");
    console.log(userStr)
    if (userStr) return JSON.parse(userStr);

    return null;
  }

  useEffect(() => {
    const currentUser = getCurrentUser()
    setUser(currentUser);

  }, []);

  function updateUserStorage(currentUser: React.SetStateAction<null>) {
    setUser(currentUser);
    localStorage.clear();
    localStorage.setItem("user", JSON.stringify(currentUser));
    console.log('user', user);
  }

  // Remove current user state
  function clearUserStorage() {
    localStorage.clear();
    setUser(null);
  }

  function sumArray(arr: number[]) {
    const totalReduce = arr.reduce((a, b) => {
      return (a+b);
    });
    return totalReduce;
  }

  function getUserOrderInfo(dataCall: any) {
        setCart(dataCall);
        const totalSum = dataCall.map((cartItem:any) => cartItem.product_price);
        const total = Math.round(sumArray(totalSum)) / 100;
        setTotal(Math.round(total/100))
        const tax = Math.round((total * .05) * 100) / 100;
        setTax(tax);
        const totalandTax = Math.round((total + tax) * 100) / 100;
        setTotalAndTax(totalandTax)
    }

  return (
    <>
     <BrowserRouter>
    <Header user={user} updateStorage={updateUserStorage} clearStorage={clearUserStorage} products={products} getUserOrderInfo={getUserOrderInfo} cart={cart}/>
    <Routes>
      <Route path="/" element={<Home products={products}/>} />
      <Route path="/products" element={<Plants products={products} />} /> 
      <Route path="/products/:name" element={<PlantDetail products={products} />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/card" element={<CardIndex products={products} user={user}/>} />
      <Route path="/confirmation" element={<CartConfirm/>} />
      <Route path="/cart" element = {<Cart user={user} cart={cart} tax={tax} totalandTax={totalandTax} />} />
      {/* <Route path="/card/configure" element={<CardConfigure />} /> */}
    </Routes>
  </BrowserRouter>
  <Footer />
    </>
  );
}

export default App;
