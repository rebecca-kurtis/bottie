import React from "react";
import { useNavigate } from "react-router-dom";
import './ProductCard.css';

interface ProductCardProps {
  key: number;
  name: string;
  description: string;
  price: string;
  imageSrc: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({key, name, description, price, imageSrc}) => {
  let navigate = useNavigate();
  const routeChange = () => {
  let path = `/products/id`;
  navigate(path);
  window.scrollTo(0, 0);
  };

  return (
    <li className="card" onClick={routeChange}>
      <img className="card__image" src={imageSrc} alt="Products"></img>
      <div className="card__info">
        <h4 className="card__name">{name}</h4>
        <p className="card__description">
          {description.length > 65
            ? `${description.substring(0, 65)}...`
            : description}
        </p>
        <p className="card__price">{price}</p>
      </div>
    </li>
  );
};
