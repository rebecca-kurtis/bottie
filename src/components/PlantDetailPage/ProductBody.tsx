import React, { Fragment } from "react";
import products from "../data/products.json";
import './ProductBody.css';

//import components
import { PageTitle } from "../_partials/_PageTitle";

interface ProductBodyProps {}

export const ProductBody: React.FC<ProductBodyProps> = () => {
  return (
    <Fragment>
      <div className="product_body">
        <PageTitle message={"Sunlight"} />
        <br></br>
        <br></br>
        <p>{products[0].sun_description}</p>
        <br></br>
        <br></br>
        <PageTitle message={"Watering"} />
        <br></br>
        <br></br>
        <p>{products[0].water_description}</p>
      </div>
    </Fragment>
  );
};
