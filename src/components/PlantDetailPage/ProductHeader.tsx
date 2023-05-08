import React, { Fragment } from "react";
import './ProductHeader.css';

//import components
import { PlantHeadingVisuals } from "./PlantHeadingVisuals";
import { PlantHeadingInfo } from "./PlantHeadingInfo";


interface ProductHeaderProps {}

export const ProductHeader: React.FC<ProductHeaderProps> = () => {
  return (
    <Fragment>
      <div className="product_header">
        <PlantHeadingVisuals></PlantHeadingVisuals>
        <PlantHeadingInfo></PlantHeadingInfo>
      </div>
    </Fragment>
  );
};
