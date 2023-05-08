import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./login.css";

//import COffcanvas
import { COffcanvas } from '@coreui/react';
import { COffcanvasBody } from '@coreui/react'
import { COffcanvasHeader } from '@coreui/react'
import { COffcanvasTitle } from '@coreui/react'
import { CCloseButton } from "@coreui/react";

interface _LoginProps {}

export const Login: React.FC<_LoginProps> = () => {

  const [visible, setVisible] = useState(false)

  return (
    <div className="login">
    {/* <CButton onClick={() => setVisible(true)}>Toggle offcanvas</CButton> */}
    <FontAwesomeIcon className="icon" icon={faUser} onClick={() => setVisible(true)} />
    <COffcanvas placement="end" visible={visible} onHide={() => setVisible(false)}>
      <COffcanvasHeader>
        <COffcanvasTitle className="title">Login</COffcanvasTitle>
        <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
      </COffcanvasHeader>
      <COffcanvasBody>
        <form method="POST" action="/users/login" className="login-form">
        <label className="form-label">Email</label>
        <input className="input-text"
            type="email"
            name="email"
            placeholder="Enter your email"></input>
        <label className="form-label">Password</label>
        <input className="input-text"
            type="password"
            name="password"
            placeholder="Enter your password"></input>
        <button className="main_button" type="submit">Login</button>
      </form>

      <div className="register-container">
        <h4 className="white-text">Don't have an account?</h4>
        <button className="secondary-button"
                id="register-btn"
                type="button">Sign up</button>
      </div>
        
      </COffcanvasBody>
    </COffcanvas>
  </div>
  );
};



// user_id SERIAL PRIMARY KEY NOT NULL,
// first_name VARCHAR(255) NOT NULL,
// last_name VARCHAR(255) NOT NULL,
// email VARCHAR UNIQUE NOT NULL,
// password VARCHAR(255) NOT NULL,
// phone VARCHAR(255) NOT NULL,
// address VARCHAR(255) NOT NULL,
// city VARCHAR(255) NOT NULL,
// state VARCHAR(255) NOT NULL,
// country VARCHAR(255) NOT NULL,
// postal_code VARCHAR(255) NOT NULL