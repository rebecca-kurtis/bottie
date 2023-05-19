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

  const product = products?.find(element => element.name === name);

  return (

    <Fragment>
      <div className="spacer-tag"></div>
      <ProductInfo products={products} product={product} />
    </Fragment>
  );
};
