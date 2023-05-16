import React from "react";
import './Card.css';
import confirmation from "./images/confirmation.png";
import { PageTitle } from "../_partials/_PageTitle";



interface Step7Props {}

export const Step7: React.FC<Step7Props> = () => {
  return (
    <div>
        <PageTitle message ="Your order has been added to your cart!"/>
        <br></br>
        <br></br>
        <div className="container no-bg">
          <img src={confirmation} alt="Confirmation" className="confirmation-image" />       
        </div>
    </div>
  );
};