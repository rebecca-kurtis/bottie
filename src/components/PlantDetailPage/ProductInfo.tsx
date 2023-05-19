import React, { Fragment } from "react";

import "./ProductInfo.css";

//import components
import { PlantHeadingContainer } from "./PlantHeadingContainer";
import { PageTitle } from "../_partials/_PageTitle";
import { useNavigate } from "react-router-dom";
import { SecondaryButton } from "../SecondaryButton";

interface ProductInfoProps {
  product: any;
  products: any;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ products, product }) => {

  const currentIndex = products.indexOf(product);
  const prevProduct = products[currentIndex - 1];
  const nextProduct = products[currentIndex + 1];


  let navigate = useNavigate();
  
  const prevRouteChange = () => {
  let path = `/products/${prevProduct.name}`;
  navigate(path);
  window.scrollTo(0, 0);
  };

  const nextRouteChange = () => {
    let path = `/products/${nextProduct.name}`;
    navigate(path);
    window.scrollTo(0, 0);
    };


  return (
    <Fragment>
      <div className="product_header">
        <PlantHeadingContainer product={product} />
      </div>
      <div className="product_body">
        <PageTitle message={"Sunlight"} />
        <br></br>
        <br></br>
        <p>{product.sun_description}</p>
        <br></br>
        <br></br>
        <PageTitle message={"Watering"} />
        <br></br>
        <br></br>
        <p>{product.water_description}</p>
        <br></br>
        <br></br>
        <div className="plant-nav">

        {currentIndex > 0 &&
          <div className="nav-item">
            <img className="card__image" src={prevProduct.drawing_url} alt="Product"></img>
            <h4 className="card__name">{prevProduct.name}</h4>
            <SecondaryButton type="submit" class="secondary-button" name="Previous" onChange={prevRouteChange}/>
          </div>
        }
        {currentIndex < products.length -1 &&

          <div className="nav-item">
            <img className="card__image" src={nextProduct.drawing_url} alt="Product"></img>
            <h4 className="card__name">{nextProduct.name}</h4>
            <SecondaryButton type="submit" class="secondary-button" name="Next" onChange={nextRouteChange}/>
          </div>
        }
      </div>

      </div> 

    </Fragment>
  );
};
