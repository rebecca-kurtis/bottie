import React from "react";
import './Card.css';
import confirmation from "./images/confirmation.png";
import { PageTitle } from "../_partials/_PageTitle";



interface Step6Props {}

export const Step6: React.FC<Step6Props> = () => {
  return (
    <div>
        <PageTitle message ="Your order has been added to your cart!"/>
        <br></br>
        <br></br>
        <div className="container confirm">
          <img src={confirmation} alt="Confirmation" className="confirmation-image" />       
        </div>
    </div>
  );
};