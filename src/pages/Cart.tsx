import React, {useEffect, useState, Fragment, useMemo} from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css'
import "./Cart.css";


//import components
import { CartItem } from "../components/cart/Cart_Item";
import { HeroBanner } from "../components/PlantsPage/HeroBanner";
import { PageTitle } from "../components/_partials/_PageTitle";
import { Summary } from "../components/cart/Summary";

interface CartProps {}

export const Cart: React.FC<CartProps> = () => { 
  const [userId, setUserId] = useState(3); //This needs to be taken from the props of user once set.
  const [cart, setCart] = useState([] as any[]);
  const [total, setTotal] = useState (0);
  const [tax, setTax] = useState (0);
  const route = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/cart/" + userId;

  //on page load check to see if the user has any unfinished orders
  //if unfinished return the cart items
  //else cart items

  useEffect(() => {
    callData();
  },[]);

const callData = () =>
  axios.get(route)
  .then(response => {
    const cartItems = [...response.data];
    setCart(cartItems);
    console.log(cart);
    const totalSum = [];
    for (let i in cart) {
      totalSum.push(cart[i].product_price);
    }
    console.log(totalSum);
    return totalSum
  })
  .then (totalSum => { 
    // get the total
    setTotal(totalSum.reduce((a, b) => {
      return (a+b) / 100;
    })) 
    console.log(total);
    //get the tax
    setTax(Math.round((total * .05/100) * 100) / 100);
    console.log(tax);
  }).catch (error => {
    console.log(error);
  });

  return (
  
  <main className="cart-index">
    <div className="spacer-tag cart" /> 
    <section >
    <HeroBanner message="Complete Your Order"/>
      <div className="cart row align-items-start">
      <h5>My Cart</h5>
        <div className="cart-items col">
        {cart?.map((cartItem) => (
             <CartItem
             cartItem ={cartItem}
             />
        ))}
      </div>
      <div className="Summary col">
        <h5>Order Summary</h5>
        <ul>
      {cart?.map((cartItem) => (
        
             <Summary
             cartItem ={cartItem}
             />
  
        ))}
        </ul>
        <p><span>Taxes</span><span>${tax}</span></p>
        <hr />
        <h5><span>Estimated Total $</span><span>{Math.round(total+tax) / 100}</span></h5>
        <div>STRIPE STUFF</div>
      </div>
      </div>
    </section>
  </main>
  )
};