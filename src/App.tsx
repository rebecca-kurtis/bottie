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
import { User } from './components/_partials/_User';
import { CardConfigure } from './pages/CardConfigure';
import { Profile } from './pages/Profile';


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

// User APi call

const [user, setUser] = useState({
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  address: "", 
  city: "", 
  state: "",
  country: "",
  postal_code: ""
});


const usersRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/login"

const handleUserSubmit = (e: { preventDefault: () => void; }) => {
  e.preventDefault();
  setUser(user)
  
  axios.post(usersRoute, user)
  .then((response) => {
    if (response.data.accessToken) {
       localStorage.setItem("user", JSON.stringify(response.data));
    }
    setUser(response.data[0]);
    console.log(user.first_name)
    // routeChange();
    // canva.closeCanva();
    return user;
  })
  .catch((error) => {
    if (error.response) {
      alert(`Error! ${error.message}`);
      // console.log(error.response);
      // console.log("server responded");
    } else if (error.request) {
      console.log("network error");
    } else {
      console.log(error);
    }
  });
};

  return (
    <>
     <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home products={products}/>} />
      <Route path="/products" element={<Plants products={products} />} /> 
      <Route path="/products/:name" element={<PlantDetail products={products} />} />
      <Route path="/card" element={<CardIndex products={products} />} />
      <Route path="/card/configure" element={<CardConfigure />} />
      <Route path="/login" element={<User />} />
      <Route path="/profile" element={<Profile  user={user}/>} />
    </Routes>
  </BrowserRouter>
  <Footer></Footer>
    </>
  );
}

export default App;
