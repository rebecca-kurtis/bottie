import React, { Fragment } from "react";


interface SecondaryButtonProps {
  name: string;
  onChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
}


export const SecondaryButton: React.FC<SecondaryButtonProps> = ({ onChange, name }) => {
  return (
    <Fragment>
      <button className="secondary-button" onClick={onChange}>{name}</button>
    </Fragment>
  );
};