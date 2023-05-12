import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

//import components
import {ProductInfo} from "../components/PlantDetailPage/ProductInfo";
// import { resolve } from "path";

interface PlantDetailProps {
  products?:any[];
}

export const PlantDetail: React.FC<PlantDetailProps> = ({products}) => {
  const name = useParams().name;
  console.log(name)
  console.log("productDetails:", products);
  const product = products?.find(element => element.name === name);
  console.log("productPDetail:", product);
  return (

    <Fragment>
      <div className="spacer-tag"></div>
      <ProductInfo product={product} />
    </Fragment>
  );
};
