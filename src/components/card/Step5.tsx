import React from "react";
import './Card.css';
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
        <PageTitle message ="5 / 5" />
        <PageTitle message ="Validate your order and add it to your cart" />
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus metus, egestas tempus dui eu, accumsan egestas lacus. Nunc a leo ut velit porttitor mattis et eget nibh. Nunc eget congue sem. Aenean laoreet ultricies hendrerit. Morbi venenatis molestie sagittis. Nullam fringilla rutrum hendrerit. Sed a leo a turpis commodo viverra quis id quam. Nam libero nibh, malesuada non pharetra sit amet, vulputate ut leo. Phasellus nec dolor sem.</p>
        </div>
    </div>
  );
};