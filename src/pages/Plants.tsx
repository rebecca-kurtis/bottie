import React, { Fragment } from "react";
import './Plants.css';

//import components
import { HeroBanner } from "../components/PlantsPage/HeroBanner";
import { PageTitle } from "../components/PlantsPage/PageTitle";
import { ProductsGrid } from "../components/PlantsPage/ProductsGrid";


interface PlantsProps {}

export const Plants: React.FC<PlantsProps> = () => {
  return (
    <Fragment>
      <div className="spacer-tag plants" />
      <HeroBanner
        message={"Find the perfect gift from our curated plants collection!"}
      />
      <PageTitle message={"All Plants"} />
      <ProductsGrid />
    </Fragment>
  );
};
