import React, {useState} from "react";
import axios from "axios";
import "./Cart.css";

import { PageTitle } from "../components/_partials/_PageTitle";

interface CartProps {}

export const Cart: React.FC<CartProps> = () => { 
  const [userId, setUserId] = useState(3); //This needs to be taken from the props of user once set.
  const [cartItems, setcartItems] =useState([{
    cartItemsId: 0,
    product: "Product from previous"
  }]);


  const route = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/cart"

  //on page load check to see if the user has any unfinished orders
  //if unfinished return the cart items
  //else cart items

  async function handleCartClick(event: any) {
    event.preventDefault();
    const params = {
      userId: userId
    }

  try {
    const response = await axios.get(route, { params });
    console.log("cartResponse", response.data);
  }catch (error) {
    console.log(error);
  }
}
  return (
  <div className="cart-root">

    <PageTitle
    message={"Cart"}
  />

  <div className="spacer-tag card-configure" /> 
  
  <button onClick={handleCartClick}>Get Cart</button>

  </div>
  );
};