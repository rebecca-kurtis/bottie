import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


//import components
import { Header } from './components/_partials/_Header';
import { Footer } from './components/_partials/_Footer';
import { Home } from './pages/Home';
import { Plants } from './pages/Plants';
import { PlantDetail } from './pages/PlantDetail';
import { CardConfigure } from './pages/CardConfigure';




function App() {
  return (
    <>
     <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Plants />} /> 
      <Route path="/products/id" element={<PlantDetail />} />
      <Route path="/card/cardconfigure" element={<CardConfigure />} />
    </Routes>
  </BrowserRouter>
  <Footer></Footer>
    </>
  );
}

export default App;
