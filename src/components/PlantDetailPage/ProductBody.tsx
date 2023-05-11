import React, { Fragment } from "react";
import './ProductBody.css'

//import components
import { PageTitle } from "../_partials/_PageTitle";

interface ProductBodyProps {
  product?:any
}

export const ProductBody: React.FC<ProductBodyProps> = ({product}) => {
  console.log("productbody:", product);
  return (
    <Fragment>
      <div className="product_body">
        <PageTitle message={"Sunlight"} />
        <br></br>
        <br></br>
        <p>{product?.sun_description}</p>
        <br></br>
        <br></br>
        <PageTitle message={"Watering"} />
        <br></br>
        <br></br>
        <p>{product?.water_description}</p>
      </div>
    </Fragment>
  );
};
