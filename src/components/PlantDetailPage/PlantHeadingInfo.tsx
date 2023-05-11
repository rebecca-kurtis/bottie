import React from "react";
import "./PlantHeadingInfo.css";
//import products from "../data/products.json";

interface PlantHeadingInfoProps {
  product?:any;
}

export const PlantHeadingInfo: React.FC<PlantHeadingInfoProps> = ({product}) => {
  console.log('PlantHeadingInfo:', product);
  return (
    <div className="product_info">
      <h1>{product?.name}</h1>
      <p className="product_info__latin">{product?.latin_name}</p>
      <p>{product?.description}</p>
      <br></br>
      <h4>For someone who</h4>
      <ul className="product_info__intended">
        <li>{product?.intended_for[0]}</li>
        <li>{product?.intended_for[1]}</li>
        <li>{product?.intended_for[2]}</li>
        <li>{product?.intended_for[3]}</li>
      </ul>
      <button className="main_button">Start with Bottie</button>
    </div>
  );
};
