import React, { useState } from "react";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./User.css";
import "./MiniCartCard.css";


interface _MiniCartCardProps {
  cartItem: any;
}

export const MiniCartCard: React.FC<_MiniCartCardProps> = ({cartItem}) => {

  return (
    <div>
      <li className="mini-card">
        <img className="mini-card__image" src={cartItem.product_drawing} alt="Products"></img>
        <div className="mini-card__info">
          <div className="mini-card__header">
            <p className="mini-title">{cartItem.product_name}</p>
            <p className="mini-price">${cartItem.product_price/100}</p>
          </div>
          <p className="canva_body">For {cartItem.rname}</p>
          
        </div>
        
        
      </li>
      <div className="divider"></div>
    </div>
  );
};

