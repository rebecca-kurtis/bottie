import React from "react";
import { useNavigate } from "react-router-dom";
import './Card.css';

interface Step1CardProps {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
}

export const Step1Card: React.FC<Step1CardProps> = ({name, description, price, imageSrc}) => {
  // let navigate = useNavigate();
  // const routeChange = () => {
  // let path = `/products/id`;
  // navigate(path);
  // window.scrollTo(0, 0);
  // };

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <li className="step-card">
      <img className="step-card__image" src={imageSrc} alt="Products"></img>
      <div className="step-card__info">
        <div className="step-card__header">
          <h4 className="header__name">{name}</h4>
          <h4>{price}</h4>
        </div>
        <p>
          {description.length > 250
            ? `${description.substring(0, 250)}...`
            : description}
        </p>
        <div className="checkbox">
          <input type="radio" value="Select this plant" name="plant" /> Select this plant
        </div>      
      </div>
    </li>
  );
};
