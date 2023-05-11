import React from "react";
import products from "../data/products.json";
import { Step1Card } from './Step1Card';


interface Step1CardListProps {}

export const Step1CardList: React.FC<Step1CardListProps> = () => {


  const mappedProduct = products.map((product) => {
    return <Step1Card
      key={product.id} 
      name={product.name} 
      description={product.description} 
      price={product.price_in_cents}
      imageSrc={product.image_draw}
    /> 
  });
  
  return <ul className="list">{mappedProduct}</ul>;
};