import React from "react";
import "./PlantHeadingVisuals.css";

interface PlantHeadingVisualsProps {
  product?:any;
}

export const PlantHeadingVisuals: React.FC<PlantHeadingVisualsProps> = ({product}) => {
  console.log("productheadingVis:", product);
  return (
     <div className="product_visuals">
       <img
         className="product_visuals__img"
         src={`${product?.image_url}`}
         alt="Product"
       ></img>
       
       <div className="product_visuals__info">
         <div className="info">
           <img src="/images/products/temp.png" alt="Sun"></img>
           <p>{product?.temp}</p>
       </div>
         <div className="info">
           <img src="/images/products/water.png" alt="Water"></img>
           <p>{product?.water}</p>
         </div>
         <div className="info">
           <img src="/images/products/height.png" alt="Height"></img>
           <p>{product?.height}</p>
         </div>
         <div className="info">
           <img src="/images/products/sun.png" alt="Sun"></img>
           <p>{product?.sun}</p>
         </div>
       </div>
    </div>
  );
};
