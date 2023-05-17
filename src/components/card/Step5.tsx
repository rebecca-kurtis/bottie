import React from "react";
import "./Card.css";
import "./Step5.css";
import logo from "../_partials/images/BottieLogo.png";
import { PageTitle } from "../_partials/_PageTitle";
import { CardMessage } from "../CardConfigure/CardMessage";

interface Step5Props {
  chatGPTMessage: string;
  recipientFName: string;
  from: string;
  plant: any;
}

export const Step5: React.FC<Step5Props> = ({
  chatGPTMessage,
  recipientFName,
  from,
  plant,
}) => {
  const plantName = plant.plant_name;
  const imageURL = plant.image_url;

  return (
    <div>
      <PageTitle message="5 / 6" />
      <PageTitle message="Preview your card" />
      <br></br>
      <br></br>
      <div className="container no-bg">
        <div className="card-preview-container">
          <div className="card-image-portion">
            <img src={logo} alt="Bottie Logo" className="card-logo" />
            <img className="card-image" src={imageURL} alt={plantName}></img>
            <h3>Here is a {plantName}</h3>
            <h3>from {from}</h3>
          </div>

          <div className="card-message">
            <CardMessage
              message={chatGPTMessage}
              recipient={recipientFName}
              from={from}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
