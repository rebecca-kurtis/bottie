import React from "react";

interface CardMessageProps{
  recipient: string;
  message: string;
  from: string;
}

export const CardMessage: React.FC<CardMessageProps> = ({recipient, message, from}) => {
  // first break each paragraph into an item in an array
  const verseArray = message.split(/\n\n/g);
  let pnum = 0;
  let lnum = 0;
  //then map through each verse to then map through each line
  //and render out the components.
  const finalMessage = verseArray.map((verse: string) => {
    pnum = pnum + 1;
    const lines =  verse.split(/\n/g);
    return (
      <p key={pnum}>{lines.map((line) => {
        lnum = lnum + 1
        return (<span key={lnum}>{line}<br/></span>)
      })}
      </p>
    )
  });

  return (
    <div>
      <h4>Dear {recipient},</h4>
      {finalMessage}
      <h4>From {from} </h4>
    </div>
  );
};