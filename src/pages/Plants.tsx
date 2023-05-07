import React, { Fragment } from "react";

//import components
import { HeroBanner } from "../components/PlantsPage/HeroBanner";

interface PlantsProps {}

export const Plants: React.FC<PlantsProps> = ({}) => {
  return (
    <Fragment>
      <div className="spacer-tag plants" />
      <HeroBanner
        message={"Find the perfect gift from our curated plants collection!"}
      />
      <PageTitle message={"All Plants"} />
      <ProductGrid />
      {/* <ProductCard
        name={"Azalea"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        price={"22.95$"}
        imageSrc={"/images/1.png"}
      /> */}
    </Fragment>
  );
};
