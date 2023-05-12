import React from "react";
import { User } from "./_User";
import useApplicationData from "../../hooks/useApplicationData";
import { useCallback, useState } from "react";
import { Login } from "./_Login";

// import hooks
import useVisualMode from "../../hooks/useVisualMode";
import useLoginToggle from "../../hooks/useLoginToggle";
import AuthService from "../../services/authservice";


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

interface _HeaderProps {
  // onChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

// type State = {
//   currentUser: IUser | undefined

// }

export const Header: React.FC<_HeaderProps> = () => {
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
  const ACCOUNT = "ACCOUNT";

  const { mode, transition, back } = useVisualMode(LOGIN);
  //
  const [visible, setVisible] = useState(false)
  
  const openSide = useCallback(() => setVisible(true), [])
  const closeSide = useCallback(() => setVisible(false), [])
  const toggleSide = useCallback(() => setVisible(!visible), [visible])

  const [user, setUser] = useState(undefined)

  const checkUser = () => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setUser(user);
    }
  }

  checkUser()


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
        <div className="user-icons">
        {!user &&
                  <div>
                  <FontAwesomeIcon className="icon" icon={faUser} onClick={toggleSide} />
                  <COffcanvas placement="end" visible={visible} onHide={closeSide}>
                    <COffcanvasHeader>
                      <COffcanvasTitle className="title"></COffcanvasTitle>
                      <CCloseButton className="text-reset" onClick={closeSide} />
                    </COffcanvasHeader>
                    <COffcanvasBody>
                      <Login/>
                      {/* {mode === ACCOUNT && (
                        <CreateAccount  name="Register" />
                      )}  */}             
                    </COffcanvasBody>
                  </COffcanvas>
              </div>
        } 
        {user &&
          <div>
            <p>"Hello" ${user}</p>
            <FontAwesomeIcon className="icon" icon={faCartShopping} />
          </div>
        }
        </div>
         
        
      </div>
    </header>
  );
};
