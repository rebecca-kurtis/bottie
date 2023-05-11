import React from "react";
import './ProductsGrid.css';
//import products from "../data/products.json";
import { ProductCard } from "./ProductCard";


interface ProductsGridProps {
  products?:any[];
}

export const ProductsGrid: React.FC<ProductsGridProps> = ({products}) => {
  console.log("grid",products);
  
  const mappedProduct = products?.map((product) => {
    const price = (product.price_in_cents/100).toString();
    return <ProductCard
      key={product.id} 
      name={product.name} 
      description={product.description} 
      price={price}
      imageSrc={product.drawing_url}
    /> 
  });
  
  return <ul className="grid">{mappedProduct}</ul>;
};
