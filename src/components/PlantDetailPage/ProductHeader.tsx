import React, { Fragment } from "react";
import './ProductHeader.css';

//import components
import { PlantHeadingVisuals } from "./PlantHeadingVisuals";
import { PlantHeadingInfo } from "./PlantHeadingInfo";


interface ProductHeaderProps {
  product?:any[]
}

export const ProductHeader: React.FC<ProductHeaderProps> = ({product}) => {
  console.log("productHeader:", product);
  return (
    <Fragment>
      <div className="product_header">
        <PlantHeadingVisuals product={product} />
        <PlantHeadingInfo product={product} />
      </div>
    </Fragment>
  );
};
