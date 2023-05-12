import React, { useCallback } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Login } from "./_Login";
import { CreateAccount } from "./_CreateAccount";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// import hooks
import useVisualMode from "../../hooks/useVisualMode";
import useLoginToggle from "../../hooks/useLoginToggle";


//import COffcanvas
import { COffcanvas } from '@coreui/react';
import { COffcanvasBody } from '@coreui/react'
import { COffcanvasHeader } from '@coreui/react'
import { COffcanvasTitle } from '@coreui/react'
import { CCloseButton } from "@coreui/react";


interface _UserProps {
  // onChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const LOGIN = "LOGIN";
const ACCOUNT = "ACCOUNT";

export const User: React.FC<_UserProps> = () => {
  
  const { mode, transition, back } = useVisualMode(LOGIN);
//
  const [visible, setVisible] = useState(false)

  const openSide = useCallback(() => setVisible(true), [])
  const closeSide = useCallback(() => setVisible(false), [])
  const toggleSide = useCallback(() => setVisible(!visible), [visible])
//

  return (
    <div>
    <FontAwesomeIcon className="icon" icon={faUser} onClick={toggleSide} />
    <COffcanvas placement="end" visible={visible} onHide={closeSide}>
      <COffcanvasHeader>
        <COffcanvasTitle className="title"></COffcanvasTitle>
        <CCloseButton className="text-reset" onClick={closeSide} />
      </COffcanvasHeader>
      <COffcanvasBody>
  
        {mode === LOGIN && <Login/>} 

        {/* {mode === ACCOUNT && (
          <CreateAccount  name="Register" />
        )}  */}
      
      </COffcanvasBody>
    </COffcanvas>
  </div>
  );
};



