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

//import hooks
import { useLocalStorage } from './hooks/useLocalStorage';

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
  },[]);

  // Set current user state

  // const [user, setUser] = useState(null);
  const [user, setUser] = useLocalStorage("user", null);

  // function getCurrentUser() {
  //   const userStr = localStorage.getItem("user");
  //   console.log(userStr)
  //   if (userStr) return JSON.parse(userStr);

  //   return null;
  // }

  // useEffect(() => {
  //   const currentUser = getCurrentUser()
  //   setUser(currentUser);

  // }, []);

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

  // Set current cart state

  // const [cart, setCart] = useState([] as any[]);
  // const [total, setTotal] = useState(0);
  // const [totalandTax, setTotalAndTax] = useState(0);
  // const [tax, setTax] = useState(0);

  const [cart, setCart] = useLocalStorage("cart", [] as any[]);
  const [total, setTotal] = useState(0);
  const [totalandTax, setTotalAndTax] = useLocalStorage("totalandTax", 0);
  const [tax, setTax] = useLocalStorage("tax", 0);

  // function getUserOrderInfo(dataCall: any) {
  //       setCart(dataCall);
  //       const totalSum = dataCall.map((cartItem:any) => cartItem.product_price);
  //       const total = Math.round(sumArray(totalSum)) / 100;
  //       setTotal(Math.round(total/100))
  //       const tax = Math.round((total * .05) * 100) / 100;
  //       setTax(tax);
  //       const totalandTax = Math.round((total + tax) * 100) / 100;
  //       setTotalAndTax(totalandTax)
  // }

  function getUserOrderInfo(dataCall: any) {
    setCart(dataCall);
    localStorage.clear();
    localStorage.setItem("cart", JSON.stringify(dataCall));

    const totalSum = dataCall.map((cartItem:any) => cartItem.product_price);
    const total = Math.round(sumArray(totalSum)) / 100;
    setTotal(Math.round(total/100))

    const tax = Math.round((total * .05) * 100) / 100;
    setTax(tax);
    localStorage.setItem("tax", JSON.stringify(tax));

    const totalandTax = Math.round((total + tax) * 100) / 100;
    setTotalAndTax(totalandTax)
    localStorage.setItem("totalandTax", JSON.stringify(totalandTax));
}

  // Remove current user state
  function clearCartStorage() {
    localStorage.removeItem("cart");
    localStorage.removeItem("tax");
    localStorage.removeItem("totalandTax");
    setCart([] as any[]);
    setOrderId(Math.floor(Math.random()*90000) + 10000);
  }

  // Set order state

  const [orderId, setOrderId] = useLocalStorage("orderId", "");
  const [cartId, setCartId] = useState('');
  const [recipientId, setRecipientId] = useState("");

  const [plant, setPlant] = useState({
    product_id: "",
    plant_name: "",
    image_url: "",
    description: "",
    price_in_cents: ""
  });

  const [recipient, setRecipient] = useState({
    first_name: "",
    last_name: "",
    relationship: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    country: "",
    postal_code: "",
  });

  const recipientRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/recipients"


  //handle recipient post to the database
  const handleRecipientCardSubmit = () => {
    axios.post(recipientRoute, recipient)
    .then((response) => {
      const recipientIdSQL = response.data[0].recipient_id;
      setRecipientId(recipientIdSQL);
  })
  .catch((error) => {
    if (error.response) {
      alert(`Error! ${error.message}`);
    } else if (error.request) {
      console.log("network error");
    } else {
      console.log(error);
    }
  });
};

  const handlePreValidationStep = () => {
    const userId = user.user_id;
    const validateRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/validate/" + userId
  
    axios.get(validateRoute, userId)
    .then((response) => {
      const orderId = response.data[0].order_id;
      setOrderId(orderId);
      localStorage.setItem("orderId", JSON.stringify(orderId));
      const cartId = response.data[0].cart_id;
      setCartId(cartId);
    })
    .catch((error) => {
      if (error.response) {
        alert(`Error! ${error.message}`);
      } else if (error.request) {
        console.log("network error");
      } else {
        console.log(error);
      }
    });
  }

  const cartCreation = () => {

    const productId = plant.product_id;

    const recipientIdNumber = recipientId;
    const cart_id = cartId;
    console.log(productId, recipientIdNumber, cart_id);
    const cartItem = {
      cart_id: cart_id,
      product_id: productId,
      recipient_id: recipientIdNumber,
    }
    
    const cartItemRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/cart-items"
  
    axios.post(cartItemRoute, cartItem)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      if (error.response) {
        alert(`Error! ${error.message}`);
      } else if (error.request) {
        console.log("network error");
      } else {
        console.log(error);
      }
    });
  }

  return (
    <>
     <BrowserRouter>
    <Header user={user} orderId={orderId} updateStorage={updateUserStorage} clearStorage={clearUserStorage} products={products} getUserOrderInfo={getUserOrderInfo} cart={cart}/>
    <Routes>
      <Route path="/" element={<Home products={products}/>} />
      <Route path="/products" element={<Plants products={products} />} /> 
      <Route path="/products/:name" element={<PlantDetail products={products} />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/card" element={<CardIndex plant={plant} setPlant={setPlant} recipient={recipient} setRecipient={setRecipient} products={products} user={user} cartCreation={cartCreation} handlePreValidationStep={handlePreValidationStep} handleRecipientCardSubmit={handleRecipientCardSubmit} />} />
      <Route path="/confirmation" element={<CartConfirm/>} />
      <Route path="/cart" element = {<Cart user={user} cart={cart} tax={tax} totalandTax={totalandTax} clearCartStorage={clearCartStorage} />} />
      {/* <Route path="/card/configure" element={<CardConfigure />} /> */}
    </Routes>
  </BrowserRouter>
  <Footer />
    </>
  );
}

export default App;
