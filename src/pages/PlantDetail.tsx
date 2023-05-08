import React, { Fragment } from "react";

//import components
import { ProductHeader} from "../components/PlantDetailPage/ProductHeader";
import { ProductBody} from "../components/PlantDetailPage/ProductBody";

interface PlantDetailProps {}

export const PlantDetail: React.FC<PlantDetailProps> = () => {
  return (
    <Fragment>
      <div className="spacer-tag"></div>
      <ProductHeader />
      <ProductBody />
    </Fragment>
  );
};
