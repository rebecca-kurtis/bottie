import React from 'react';
import "./FavouriteProducts.css"
import products from "../data/products.json";

import { ProductCard } from "../PlantsPage/ProductCard"

interface FavouriteProductsProps {

}



export const FavouriteProducts: React.FC<FavouriteProductsProps> = () => {

  const mappedProduct = products.filter((item, idx) => idx < 3).map((product) => {
    return <ProductCard
      key={product.id} 
      name={product.name} 
      description={product.description} 
      price={product.price_in_cents}
      imageSrc={product.image_draw}
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