import React, {useEffect, useState, Fragment, useMemo} from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css'
import "./Cart.css";


//import components
import { CartItem } from "../components/cart/Cart_Item";
import { HeroBanner } from "../components/PlantsPage/HeroBanner";
import { PageTitle } from "../components/_partials/_PageTitle";
import { Summary } from "../components/cart/Summary";
import { MainButton } from "../components/MainButton";
import { useNavigate } from "react-router-dom";

interface CartProps {
  user?: any;
  cart: any;
  tax: any;
  totalandTax: any;
  clearCartStorage: any;

}

export const Cart: React.FC<CartProps> = ({ user, cart, tax, totalandTax, clearCartStorage }) => { 
  // const [userId, setUserId] = useState(3); //This needs to be taken from the props of user once set.
  // const [cart, setCart] = useState([] as any[]);
  // const [total, setTotal] = useState(0);
  // const [totalandTax, setTotalandTax] = useState(0);
  // const [tax, setTax] = useState(0);
  // const route = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/cart/" + userId;


  // const sumArray = (arr: number[]) => {
  //   const totalReduce = arr.reduce((a, b) => {
  //     return (a+b);
  //   });
  //   return totalReduce;
  // }

  // on page load check to see if the user has any unfinished orders and returns them
// 
  // useEffect(() => {
  //   console.log(userId);
  //   if (userId) {
  //   axios.get(route)
  //     .then(response => {
  //       const cartData = response.data;
  //       setCart(cartData);
  //       const totalSum = cartData.map((cartItem:any) => cartItem.product_price);
  //       const total = Math.round(sumArray(totalSum)) / 100;
  //       setTotal(Math.round(total/100))
  //       const tax = Math.round((total * .05) * 100) / 100;
  //       setTax(tax);
  //       const totalandTax = Math.round((total + tax) * 100) / 100;
  //       setTotalandTax(totalandTax);
  //     })
  //     .catch (error => {
  //       console.log(error);
  //     });
  //   }
  // },[]);
  let navigate = useNavigate();
  
  const routeChange = () => {
    let path = `/confirmation`;
    navigate(path);
    window.scrollTo(0, 0);
  };
  
  const payment = () => {
    routeChange()
    clearCartStorage()
  };
  

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
          {cart?.map((cartItem :any) => (
              <CartItem
              cartItem ={cartItem}
              />
          ))}
        </div>
        <div className="summary">
          <h4>Order Summary</h4>
          <br></br>
          {cart?.map((cartItem: any) => (
            <div className="summary-row">
              <p className="canva_body">{cartItem.product_name}</p>
              <p className="canva_body">${cartItem.product_price / 100}</p>
            </div>           
          ))}
            <div className="divider"></div>
            <div className="summary-row">
              <p className="canva_body">Taxes</p>
              <p className="canva_body">${tax}</p>
            </div>
            <div className="divider"></div>
            <div className="summary-row">
              <h5>Estimated Total</h5>
              <h5>${totalandTax}</h5>
            </div>
            <br></br>
            <MainButton type="submit" name="Proceed to payment" onChange={payment}/>
        </div>
      </div>
    </section>
  </main>
  )
};

