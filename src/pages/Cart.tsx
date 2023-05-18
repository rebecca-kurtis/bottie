import React, {useEffect, useState, Fragment, useMemo} from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css'
import "./Cart.css";


//import components
import { CartItem } from "../components/cart/Cart_Item";
import { HeroBanner } from "../components/PlantsPage/HeroBanner";
import { PageTitle } from "../components/_partials/_PageTitle";
import { Summary } from "../components/cart/Summary";

interface CartProps {
}

export const Cart: React.FC<CartProps> = () => { 
  const [userId, setUserId] = useState(3); //This needs to be taken from the props of user once set.
  const [cart, setCart] = useState([] as any[]);
  const [total, setTotal] = useState(0);
  const [totalandTax, setTotalandTax] = useState(0);
  const [tax, setTax] = useState(0);
  const route = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/cart/" + userId;


  const sumArray = (arr: number[]) => {
    const totalReduce = arr.reduce((a, b) => {
      return (a+b);
    });
    return totalReduce;
  }

  //on page load check to see if the user has any unfinished orders and returns them

  useEffect(() => {
    console.log(userId);
    if (userId) {
    axios.get(route)
      .then(response => {
        const cartData = response.data;
        setCart(cartData);
        const totalSum = cartData.map((cartItem:any) => cartItem.product_price);
        const total = Math.round(sumArray(totalSum)) / 100;
        setTotal(Math.round(total/100))
        const tax = Math.round((total * .05) * 100) / 100;
        setTax(tax);
        const totalandTax = Math.round((total + tax) * 100) / 100;
        setTotalandTax(totalandTax);
      })
      .catch (error => {
        console.log(error);
      });
    }
  },[]);


  return (
  
  <main className="cart-index">
    <div className="spacer-tag plants" /> 
    <section >
    <HeroBanner message="Complete Your Order"/>
    <PageTitle message="Cart"/>
      <br></br>
      <br></br> 
    <div className="container">
      <div className="cart_items">
        {cart?.map((cartItem) => (
             <CartItem
             cartItem ={cartItem}
             />
        ))}
      </div>
      <div className="summary">
        <h4>Order Summary</h4>
        <br></br>
        {cart?.map((cartItem) => (
          <div className="summary-row">
            <p className="canva_body">{cartItem.product_name}</p>
            <p className="canva_body">${cartItem.product_price / 100}</p>
          </div>
          
          // <Summary cartItem ={cartItem} />
              
          ))}
       
          <p><span>Taxes</span><span>${tax}</span></p>
          <div className="divider"></div>
          <h5><span>Estimated Total $</span><span>{totalandTax}</span></h5>
          <div>STRIPE STUFF</div>
      </div>
    </div>
      {/* <div className="cart row align-items-start">
      <h2>My Cart</h2>
      <br></br>
      <br></br> */}


        {/* <div className="cart-items col">
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
        <Summary cartItem ={cartItem} />
            
        ))}
        </ul>
        <p><span>Taxes</span><span>${tax}</span></p>
        <hr />
        <h5><span>Estimated Total $</span><span>{totalandTax}</span></h5>
        <div>STRIPE STUFF</div>
      </div>
      </div> */}
    </section>
  </main>
  )
};

<section>
<HeroBanner message="Thank you for your order!" />
<br></br>
<br></br>
<div className="container no-bg">
  <div className="center_content">
    <h4 className="center">You can follow your gift preparation and delivery in your account.</h4>
    <h4 className="center">You will receive a notification once delivered.</h4>   
    <br></br>
    <br></br>
    <a href="/" className="main_button">Back to homepage</a>
  </div>
</div>
</section>