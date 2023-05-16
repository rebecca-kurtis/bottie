import React, { Fragment } from "react";


interface MainButtonProps {
  name: string;
  type?: "button" | "submit" | "reset" | undefined
  onChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
}


export const MainButton: React.FC<MainButtonProps> = ({ type, onChange, name}) => {
  return (
    <Fragment>
      <button className="main_button" type={type} onClick={onChange}>{name}</button>
    </Fragment>
  );
};
