import React from "react";
import { useNavigate } from "react-router-dom";
import './Card.css';

interface Step1CardProps {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  plant: string;
  setPlant: any;
}

export const Step1Card: React.FC<Step1CardProps> = ({name, description, price, imageSrc, setPlant}) => {
  
  let navigate = useNavigate();

  const routeChange = () => {
  let path = `/products/${name}`;
  navigate(path);
  window.scrollTo(0, 0);
  };

  return (
    <li className="step-card">
      <img className="step-card__image" src={imageSrc} alt="Products"></img>
      <div className="step-card__info">
        <div className="step-card__header">
          <h4 className="header__name link" onClick={routeChange}>{name}</h4>
          <h4>${price}</h4>
        </div>
        <p>
          {description.length > 250
            ? `${description.substring(0, 250)}...`
            : description}
        </p>
        <div className="checkbox">
          <input type="radio" value={name} name="plant" onClick={(plant) => setPlant((plant.target as HTMLInputElement).value)}/> Select this plant
        </div>      
      </div>
    </li>
  );
};
