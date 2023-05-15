import React from "react";
import './Card.css';
import './Step5.css';
import { PageTitle } from "../_partials/_PageTitle";
import { CardMessage } from "../CardConfigure/CardMessage";



interface Step5Props {
  chatGPTMessage: string;
  recipientFName: string;
  from: string; 
}

export const Step5: React.FC<Step5Props> = ({chatGPTMessage, recipientFName, from}) => {
  return (
    <div>
        <PageTitle message ="5 / 6" />
        <PageTitle message ="Preview your card" />
        <br></br>
        <br></br>
        <div className="container">
        <div className="card-message">
            <CardMessage
              message={chatGPTMessage}
              recipient={recipientFName}
              from={from}
            />
          </div>
        </div>
    </div>
  );
};