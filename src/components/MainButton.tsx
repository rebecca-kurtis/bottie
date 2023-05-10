import React, { Fragment } from "react";


interface MainButtonProps {
  name: string;
  onChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
}


export const MainButton: React.FC<MainButtonProps> = ({ name, onChange }) => {
  return (
    <Fragment>
      <button className="main_button" type="button" onClick={onChange}>{name}</button>
    </Fragment>
  );
};
