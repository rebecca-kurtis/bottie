import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MainButton } from "../MainButton";
import { SecondaryButton } from "../SecondaryButton";
import useApplicationData from "../../hooks/useApplicationData";
import "./User.css";
import e from "express";

//import Formik
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// import hooks
import useVisualMode from "../../hooks/useVisualMode";
import useLoginToggle from "../../hooks/useLoginToggle";


interface _LoginProps {
  // name: string;
  // onChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Login: React.FC<_LoginProps> = () => {

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    address: "", 
    city: "", 
    state: "",
    country: "",
    postal_code: ""
  });


  // Set the value of a single element of the object
  const setValue = (key: any, value: any) => {
    setUser({...user, [key]: value})
  }

  const canva = useLoginToggle()

  let navigate = useNavigate();
  const routeChange = () => {
  let path = `/`;
  navigate(path);
  window.scrollTo(0, 0);
  };

  const usersRoute = process.env.REACT_APP_SERVER + ":" + process.env.REACT_APP_SERVER_PORT + "/login"

  const handleUserSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setUser(user)
    
    axios.post(usersRoute, user)
    .then((response) => {
      if (response.data.accessToken) {
         localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response.status, response.data);
      console.log("accessToken", response.data.accessToken);
      console.log("Hello ",response.data[0].first_name);
      return response.data;
      // routeChange()
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log("server responded");
      } else if (error.request) {
        console.log("network error");
      } else {
        console.log(error);
      }
    });
  };

  return (
    <div className="user">
        <form onSubmit={handleUserSubmit} className="login-form">
        <h2>Login</h2>
        <br></br>
        <br></br>
        <label className="form-label">Email</label>
        <input className="input-text"
            type="text"
            name="email"
            value={user.email}
            placeholder="Enter your email"
            onChange={e => setValue("email", e.target.value)}>
            </input>

        <label className="form-label">Password</label>
        <input className="input-text"
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter your password"
            onChange={e => setValue("password", e.target.value)}>
            </input>

        <button type="submit" className="main_button" onClick={canva.closeCanva}>Login</button>
        {/* <MainButton type="submit" name="Login"/> */}
      </form>

      <div className="register-container">
        <h4 className="white-text">Don't have an account?</h4>
        {/* <SecondaryButton class="secondary-button white-text" onChange={onChange} name="Register"/> */}
      </div>
  </div>
  );
};