import React from "react";
import "./Card.css";
import "./Step5.css";
import logo from "../_partials/images/BottieLogo.png";
import { PageTitle } from "../_partials/_PageTitle";
import { CardMessage } from "../CardConfigure/CardMessage";

interface Step5Props {
  chatGPTMessage: string;
  recipientFName: string;
  plant: any;
  user?: any;
}

export const Step5: React.FC<Step5Props> = ({
  chatGPTMessage,
  recipientFName,
  plant,
  user
}) => {
  const plantName = plant.plant_name;
  const imageURL = plant.image_url;

  return (
    <div>
      <PageTitle message="4 / 5" />
      <PageTitle message="Preview your card" />
      <br></br>
      <br></br>
      <div className="container-center">
        <div className="card-preview-container">
          <div className="card-image-portion">
            <img src={logo} alt="Bottie Logo" className="card-logo" />
            <img className="card-image" src={imageURL} alt={plantName}></img>
            <h3>Here is a {plantName}</h3>
            <h3>from {user.first_name}</h3>
          </div>

          <div className="card-message">
            <CardMessage
              message={chatGPTMessage}
              recipient={recipientFName}
              from={user.first_name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
