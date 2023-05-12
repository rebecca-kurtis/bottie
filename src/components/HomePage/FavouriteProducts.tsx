import React from 'react';
import "./FavouriteProducts.css"

import { ProductCard } from "../PlantsPage/ProductCard"

interface FavouriteProductsProps {
products?:any[];
}



export const FavouriteProducts: React.FC<FavouriteProductsProps> = ({products}) => {

  const mappedProduct = products?.filter((item, idx) => idx < 3).map((product) => {
    const price = (product.price_in_cents/100).toString();
    return <ProductCard
      key={product.id} 
      name={product.name} 
      description={product.description} 
      price={price}
      imageSrc={product.drawing_url}
    /> 
  });
    return (
      <div className='favourite-products-section'>
        <div className="favourite-products-title">
          <h3>Bottie's Favourites</h3>
        </div>
        <ul className="home-page-grid"> {mappedProduct} </ul> 
        <a href="/products" className="main_button">View All Products</a>
      </div>
    );
}

