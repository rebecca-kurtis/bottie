import React, { Fragment } from "react";


interface SecondaryButtonProps {
  class?: string;
  name: string;
  onChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
}


export const SecondaryButton: React.FC<SecondaryButtonProps> = (props) => {
  return (
    <Fragment>
      <button className={props.class} onClick={props.onChange}>{props.name}</button>
    </Fragment>
  );
};