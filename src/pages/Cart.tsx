import React, {useEffect, useState} from "react";
import axios from "axios";
import "./Cart.css";
import { CartItem } from "../components/cart/Cart_Item";

import { PageTitle } from "../components/_partials/_PageTitle";

interface CartProps {}

export const Cart: React.FC<CartProps> = () => { 
  const [userId, setUserId] = useState(3); //This needs to be taken from the props of user once set.
  const [cart, setCart] = useState([] as any[]);


  const route = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/cart"

  //on page load check to see if the user has any unfinished orders
  //if unfinished return the cart items
  //else cart items

  useEffect(() => {
    const params = {
            userId: userId
          }
    axios.get(route, { params })
    .then(response => {
      const cartItems = [...response.data];
      setCart(cartItems);
    }). catch (error => {
      console.log(error);
    });
  },[]);

  return (
  
  <div className="cart-root">

    <PageTitle
    message={"Cart"}
  />

    <div className="spacer-tag card-configure" /> 
    <div>

      <div className="Cart">
        {cart?.map((cartItem) => (
          <div>
             <CartItem
             key={cartItem.cart_item}
             cartItem ={cartItem}
             />
          </div>
        ))}
     
      </div>
    </div>
  </div>
  )
};