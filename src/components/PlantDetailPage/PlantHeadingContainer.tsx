import React from "react";
import "./PlantHeadingContainer.css";

interface PlantHeadingContainerProps {
  product?: any;
}

export const PlantHeadingContainer: React.FC<PlantHeadingContainerProps> = ({
  product,
}) => {
  return (
    <div className="plant-heading-container">
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

      <div className="product_info">
        <h1>{product?.name}</h1>
        <p className="product_info__latin">{product?.latin_name}</p>
        <p>{product?.description}</p>
        <br></br>
        <h4>For someone who</h4>
        <ul className="product_info__intended">
          <li>{product?.intended_for[0]}</li>
          <li>{product?.intended_for[1]}</li>
          <li>{product?.intended_for[2]}</li>
          <li>{product?.intended_for[3]}</li>
        </ul>
        <a href="/card" className="main_button">Start with Bottie</a>
      </div>
    </div>
  );
};
