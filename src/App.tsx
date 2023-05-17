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


// type productsType = [{
//   product_id: number;
//   drawing_url: string;
//   image_url:string;
//   name: string;
//   latin_name:string;
//   description:string;
//   intended_for: string[];
//   temp:string;
//   water: string;
//   height: string;
//   sun: string;
//   sun_description:string;
//   water_description:string;
//   price_in_cents:number;
//   invetory:number;
//   modified_date:Date;
// }]

function App() {

  // Product API call

  const [products, setProducts] = useState([] as any[]);

  const productsRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/products"
  
  useEffect(() => {
      axios.get(productsRoute)
     .then((response) => {
      const productList = [...response.data];
    setProducts(productList);
    })
  }, []);

  // Set current user state

  function getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }

  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getCurrentUser()
    setUser(currentUser);

  }, []);

  function updateUserStorage(currentUser: React.SetStateAction<null>) {
    setUser(currentUser);
    localStorage.clear();
    localStorage.setItem("user", JSON.stringify(currentUser));
  }

  // Remove current user state
  function clearUserStorage() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <>
     <BrowserRouter>
    <Header user={user} updateStorage={updateUserStorage} clearStorage={clearUserStorage} products={products}/>
    <Routes>
      <Route path="/" element={<Home products={products}/>} />
      <Route path="/products" element={<Plants products={products} />} /> 
      <Route path="/products/:name" element={<PlantDetail products={products} />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/card" element={<CardIndex products={products} user={user}/>} />
      <Route path="/confirmation" element={<CartConfirm/>} />
      {/* <Route path="/card/configure" element={<CardConfigure />} /> */}
    </Routes>
  </BrowserRouter>
  <Footer />
    </>
  );
}

export default App;
