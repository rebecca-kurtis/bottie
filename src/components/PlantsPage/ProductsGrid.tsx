import React from "react";
import './ProductsGrid.css';
import products from "../data/products.json";
import { ProductCard } from "./ProductCard";


interface ProductsGridProps {
  labelname: string;
}

export const ProductsGrid: React.FC<ProductsGridProps> = ({labelname}) => {


  const mappedProduct = products.map((product) => {
    return <ProductCard
      key={product.id} 
      name={labelname}
      //name={product.name} 
      description={product.description} 
      price={product.price_in_cents}
      imageSrc={product.image_draw}
    /> 
  });
  
  return <ul className="grid">{mappedProduct}</ul>;
};
