import React from "react";
// import products from "../data/products.json";
import { Step1Card } from './Step1Card';


interface Step1CardListProps {
  products?:any[];
}

export const Step1CardList: React.FC<Step1CardListProps> = ({products}) => {

  const mappedProduct = products?.map((product) => {
    const price = (product.price_in_cents/100).toString();
    return <Step1Card
      key={product.id} 
      name={product.name} 
      description={product.description} 
      price={price}
      imageSrc={product.drawing_url}
    /> 
  });
  
  return <ul className="list">{mappedProduct}</ul>;
};
