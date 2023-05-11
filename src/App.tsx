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
import { CardIndex } from './components/card/CardIndex';


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
  const [products, setProducts] = useState([] as any[]);
  
  const route = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/products"

  useEffect(() => {
      axios.get(route)
     .then((response) => {
      const productList = [...response.data];
    setProducts(productList);
    })
  },[]);

  return (
    <>
     <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home
      products={products}
      />} />
      <Route path="/products" element={<Plants products={products} />} /> 
      <Route path="/products/:name" element={<PlantDetail products={products} />} />
      <Route path="/card" element={<CardIndex />} />
    </Routes>
  </BrowserRouter>
  <Footer></Footer>
    </>
  );
}

export default App;
