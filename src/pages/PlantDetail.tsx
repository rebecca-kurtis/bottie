import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";

//import components
import { ProductHeader} from "../components/PlantDetailPage/ProductHeader";
import { ProductBody} from "../components/PlantDetailPage/ProductBody";
import { resolve } from "path";

interface PlantDetailProps {}

export const PlantDetail: React.FC<PlantDetailProps> = () => {
  const [plants, setPlants] = useState({});
  const id = useParams().id;
  
  return (

    <Fragment>
      <div className="spacer-tag"></div>
      <ProductHeader />
      <ProductBody />
    </Fragment>
  );
};
