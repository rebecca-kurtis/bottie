import React from "react";
import "./PlantHeadingInfo.css";
import products from "../data/products.json";

interface PlantHeadingInfoProps {}

export const PlantHeadingInfo: React.FC<PlantHeadingInfoProps> = () => {
  return (
    <div className="product_info">
      <h1>{products[0].name}</h1>
      <p className="product_info__latin">{products[0].latin_name}</p>
      <p>{products[0].description}</p>
      <h4>For someone who</h4>
      <ul className="product_info__intended">
        <li>{products[0].intended_for[0]}</li>
        <li>{products[0].intended_for[1]}</li>
        <li>{products[0].intended_for[2]}</li>
        <li>{products[0].intended_for[3]}</li>
      </ul>
      <button className="main_button">Start with Bottie</button>
    </div>
  );
};
