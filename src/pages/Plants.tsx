import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import './Plants.css';

//import components
import { HeroBanner } from "../components/PlantsPage/HeroBanner";
import { PageTitle } from "../components/_partials/_PageTitle";
import { ProductsGrid } from "../components/PlantsPage/ProductsGrid";


interface PlantsProps {}

export const Plants: React.FC<PlantsProps> = () => {
  const [products, setProducts] = useState('');
  
  const route = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/products"
  console.log(route);

  useEffect(() => {
      axios.get(route)
     .then((response) => {
    setProducts(response.data);
    })
  });

  return (

    <Fragment>
      <div className="spacer-tag plants" />
      <HeroBanner
        message={"Find the perfect gift from our curated plants collection!"}
      />
      <PageTitle message={"All Plants"} />
      <ProductsGrid 
      labelname={products}/>
      <div>{products}</div>

    </Fragment>
  );
};
