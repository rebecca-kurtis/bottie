import React, { Fragment } from "react";
import { HeroBanner } from "../components/PlantsPage/HeroBanner";
import "./CartConfirm.css";


interface CartConfirmProps {

}

export const CartConfirm: React.FC<CartConfirmProps> = () => {

  return (
    <main className="card-index">
      <div className="spacer-tag plants" />
      <section>
        <HeroBanner message="Thank you for your order!" />
        <br></br>
        <br></br>
        <div className="no-bg">
          <div className="center_content">
            <h4 className="center">You can follow your gift preparation and delivery in your account.</h4>
            <h4 className="center">You will receive a notification once delivered.</h4>   
            <br></br>
            <br></br>
            <a href="/" className="main_button">Back to homepage</a>
          </div>
        </div>
      </section>
    </main>
  );
};
