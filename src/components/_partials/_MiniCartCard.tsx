import React, { useState } from "react";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./User.css";
import "./MiniCartCard.css";


interface _MiniCartCardProps {
  products: any;

}

export const MiniCartCard: React.FC<_MiniCartCardProps> = ({products}) => {


const product = products[0];


  return (
    <div>
      <li className="mini-card">
        <img className="mini-card__image" src={product.drawing_url } alt="Products"></img>
        <div className="mini-card__info">
          <div className="mini-card__header">
            <p className="mini-title">{product.name}</p>
            <p className="mini-price">${product.price_in_cents/100}</p>
          </div>
          <p className="canva_body">For Annie Brocoli</p>
          
        </div>
        
        
      </li>
      <div className="divider"></div>
    </div>
  );
};

