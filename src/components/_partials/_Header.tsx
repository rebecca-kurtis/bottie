import React from "react";
import { useCallback, useState } from "react";
import { Login } from "./_Login";

// import hooks
import useVisualMode from "../../hooks/useVisualMode";

//import photos
import logo from "./images/BottieLogo.png";
import commentIcon from "./images/comment_icon.png";
import plantIcon from "./images/plant_icon.png";

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import "./Header.css";

//import COffcanvas
import { COffcanvas } from '@coreui/react';
import { COffcanvasBody } from '@coreui/react'
import { COffcanvasHeader } from '@coreui/react'
import { COffcanvasTitle } from '@coreui/react'
import { CCloseButton } from "@coreui/react";
import { Account } from "./_Account";
import { Register } from "./Register";

interface _HeaderProps {
  user?: any;
  updateStorage: any;
  clearStorage: any;
}


export const Header: React.FC<_HeaderProps> = (props) => {
  const className = "scroll";
  const scrollTrigger = 60;

  window.onscroll = function () {
    // We add pageYOffset for compatibility with IE.
    if (
      window.scrollY >= scrollTrigger ||
      window.pageYOffset >= scrollTrigger
    ) {
      document.getElementsByTagName("header")[0].classList.add(className);
    } else {
      document.getElementsByTagName("header")[0].classList.remove(className);
    }
  };

  const LOGIN = "LOGIN";
  const REGISTER = "REGISTER";
  const ACCOUNT = "ACCOUNT";

  const { mode, transition, back } = useVisualMode(LOGIN)

  const [visible, setVisible] = useState(false)
  
  const openSide = useCallback(() => setVisible(true), [])
  const closeSide = useCallback(() => setVisible(false), [])
  const toggleSide = useCallback(() => setVisible(!visible), [visible])

  return (
    
    <header>
      <div className="nav-container">
        <a href="/">
          <img src={logo} alt="Bottie Logo" className="logo" />
        </a>
        <nav className="nav">
          <a className="nav-link" aria-current="page" href="/card">
            Get Started with Bottie
            <img src={commentIcon} alt="Comment Icon" className="nav-icon" />
          </a>
          <a className="nav-link" href="/products">
            All Plants
            <img src={plantIcon} alt="Plant Icon" className="nav-icon" />
          </a>
        </nav>
        <div className="nav user-icons">
          {props.user === null &&
            <div>
                    <FontAwesomeIcon className="icon" icon={faUser} onClick={toggleSide} />
                    <COffcanvas placement="end" visible={visible} onHide={closeSide}>
                      <COffcanvasHeader>
                        <COffcanvasTitle className="title"></COffcanvasTitle>
                        <CCloseButton className="text-reset" onClick={closeSide} />
                      </COffcanvasHeader>
                      <COffcanvasBody>
                        {mode === LOGIN && (
                          <Login closeSide={closeSide} onChange={() =>transition(REGISTER)} updateStorage={props.updateStorage}/>
                        )}   
                        {mode === REGISTER && (
                          <Register onChange={() => transition(LOGIN)} />
                        )}    
                      </COffcanvasBody>
                    </COffcanvas>
            </div>
          } 
          {props.user !== null &&
            <div>
              <div className="nav-link">
                <p className="userName">Hello {props.user.first_name} </p>
                <FontAwesomeIcon className="icon" icon={faUser} onClick={toggleSide} />
                <FontAwesomeIcon className="icon" icon={faCartShopping} />
              </div>
                    <COffcanvas placement="end" visible={visible} onHide={closeSide}>
                      <COffcanvasHeader>
                        <COffcanvasTitle className="title"></COffcanvasTitle>
                        <CCloseButton className="text-reset" onClick={closeSide} />
                      </COffcanvasHeader>
                      <COffcanvasBody>
                          <Account closeSide={closeSide} updateStorage={props.updateStorage} clearStorage={props.clearStorage} user={props.user} />
                      </COffcanvasBody>
                    </COffcanvas>

            </div>
          }
        </div>
         
      </div>
    </header>
  );
};
