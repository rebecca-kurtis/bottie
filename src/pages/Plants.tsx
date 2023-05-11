import React, { Fragment } from "react";
import './Plants.css';

//import components
import { HeroBanner } from "../components/PlantsPage/HeroBanner";
import { PageTitle } from "../components/_partials/_PageTitle";
import { ProductsGrid } from "../components/PlantsPage/ProductsGrid";


interface PlantsProps {
  products?:any[];
}

export const Plants: React.FC<PlantsProps> = ({products}) => {
  console.log("plantspage:",products);
  return (

    <Fragment>
      <div className="spacer-tag plants" />
      <HeroBanner
        message={"Find the perfect gift from our curated plants collection!"}
      />
      <PageTitle message={"All Plants"} />
      <ProductsGrid 
        products={products}
      />

    </Fragment>
  );
};
