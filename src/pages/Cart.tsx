import React, {useEffect, useState, Fragment} from "react";
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
    const params = {
            userId: userId
          }
    axios.get(route)
    .then(response => {
      const cartItems = [...response.data];
      setCart(cartItems);
      const totalSum = [];
      for (let i in cart) {
        totalSum.push(cart[i].product_price);
      }
      // get the total
      setTotal(totalSum.reduce((a, b) => {
        return a+b;
      }))
      //get the tax
      setTax((Math.round((total * .5)/100) * 100) / 100);
    }). catch (error => {
      console.log(error);
    });
  },[]);

  return (
  
  <main className="cart-index">
    <div className="spacer-tag cart" /> 
    <section >
    <HeroBanner message="Complete Your Order"/>
      <div className="cart row align-items-start">
        <div className="cart-items col">
        {cart?.map((cartItem) => (
          <div>
             <CartItem
             key = {cartItem.cart_item}
             cartItem ={cartItem}
             />
          </div>
        ))}
      </div>
      <div className="Summary col">
        <h4>Order Summary</h4>
      {cart?.map((cartItem) => (
          <div>
             <Summary
             key = {cartItem.cart_item}
             cartItem ={cartItem}
             />
          </div>
        ))}
        <p><span>Taxes</span><span>${tax / 100}</span></p>
        <h4><span>Estimated Total</span><span>${(total+tax) / 100}</span></h4>
        <div>STRIPE STUFF</div>
      </div>
      </div>
    </section>
  </main>
  )
};