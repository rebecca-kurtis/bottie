import React, { Fragment } from "react";


interface SecondaryButtonProps {
  class?: string;
  type?:any;
  name: string;
  onChange: any;

  // onChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
}


export const SecondaryButton: React.FC<SecondaryButtonProps> = (props) => {
  return (
    <Fragment>
      <button className={props.class} type={props.type} onClick={props.onChange}>{props.name}</button>
    </Fragment>
  );
};