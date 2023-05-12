import React, { Fragment } from "react";

import "./ProductInfo.css";

//import components
import { PlantHeadingContainer } from "./PlantHeadingContainer";
import { PageTitle } from "../_partials/_PageTitle";

interface ProductInfoProps {
  product?: any;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <Fragment>
      <div className="product_header">
        <PlantHeadingContainer product={product} />
      </div>
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
