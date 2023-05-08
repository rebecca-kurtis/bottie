import React from "react";
import { Login } from "./_Login";

//import offcanva
// import '@coreui/coreui/dist/css/coreui.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

//import photos
import logo from "./images/BottieLogo.png";
import commentIcon from "./images/comment_icon.png";
import plantIcon from "./images/plant_icon.png";

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

interface _HeaderProps {}

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

  return (
    <header>
      <div className="nav-container">
        <a href="/">
          <img src={logo} alt="Bottie Logo" className="logo" />
        </a>
        <nav className="nav">
          <a className="nav-link" aria-current="page" href="/card/cardconfigure">
            Get Started with Bottie
            <img src={commentIcon} alt="Comment Icon" className="nav-icon" />
          </a>
          <a className="nav-link" href="/products">
            All Plants
            <img src={plantIcon} alt="Plant Icon" className="nav-icon" />
          </a>
        </nav>
        <div className="user-icons">
          <Login/>
          <FontAwesomeIcon className="icon" icon={faCartShopping} />
        </div>
        
      </div>
    </header>
  );
};
