import React from "react";
import { useCallback, useState } from "react";
import { Login } from "./_Login";
import { Account } from "./_Account";
import { Register } from "./Register";
import { MiniCart } from "./_MiniCart";

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


interface _HeaderProps {
  user?: any;
  updateStorage: any;
  clearStorage: any;
  products:any;
}


export const Header: React.FC<_HeaderProps> = ({user, updateStorage, clearStorage, products}) => {
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
  const CART = "CART";

  const { mode, transition, back } = useVisualMode(user? ACCOUNT : LOGIN)

  const [visible, setVisible] = useState(false)
  
  const openSide = useCallback(() => setVisible(true), [])
  const closeSide = useCallback(() => setVisible(false), [])
  const toggleSide = useCallback(() => setVisible(!visible), [visible])

  const toggleLogin = () => {
    transition(LOGIN);
    setVisible(true);
  }

  const toggleAccount = () => {
    transition(ACCOUNT);
    setVisible(true);
  }

  const toggleCart = () => {
    transition(CART);
    setVisible(true);
  }

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
          {user === null &&
            <div className="nav">
                    <FontAwesomeIcon className="icon" icon={faUser} onClick={toggleLogin} />
                    <COffcanvas placement="end" visible={visible} onHide={closeSide}>
                      <COffcanvasHeader>
                        <COffcanvasTitle className="title"></COffcanvasTitle>
                        <CCloseButton className="text-reset" onClick={closeSide} />
                      </COffcanvasHeader>
                      <COffcanvasBody>
                        {mode === LOGIN && (
                          <Login toggleAccount={toggleAccount} onChange={() =>transition(REGISTER)} updateStorage={updateStorage}/>
                        )}   
                        {mode === REGISTER && (
                          <Register onChange={() => transition(LOGIN)} />
                        )}    
                      </COffcanvasBody>
                    </COffcanvas>
            </div>
          } 
          {user !== null &&
            <div className="nav">
                <p className="userName">Hello {user.first_name} </p>
                <FontAwesomeIcon className="icon" icon={faUser} onClick={toggleAccount} />
                <FontAwesomeIcon className="icon" icon={faCartShopping} onClick={toggleCart} />
                    <COffcanvas placement="end" visible={visible} onHide={closeSide}>
                      <COffcanvasHeader>
                        <CCloseButton className="text-reset" onClick={closeSide} />
                      </COffcanvasHeader>
                      <COffcanvasBody>
                        {mode === ACCOUNT && (
                          <Account closeSide={closeSide} updateStorage={updateStorage} clearStorage={clearStorage} user={user} />
                        )}
                        {mode === CART && (
                          <MiniCart products={products} closeSide={closeSide}/>
                        )}
                      </COffcanvasBody>
                    </COffcanvas>
            </div>
            
          }
        </div> 
      </div>
    </header>
  );
};
