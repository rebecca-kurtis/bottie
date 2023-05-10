import React from "react";
import { MainButton } from "../MainButton";
import { SecondaryButton } from "../SecondaryButton";
import "./User.css";

interface _LoginProps {
  onChange: React.MouseEventHandler<HTMLButtonElement> | undefined;
  name: string;
}

export const Login: React.FC<_LoginProps> = ({onChange, name}) => {

  return (
    <div className="user">
        <form method="POST" action="/users/login" className="login-form">
        <h2>Login</h2>
        <br></br>
        <br></br>
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
        <MainButton onChange={onChange} name="Login"/>
        {/* <button className="main_button" type="submit">Login</button> */}
      </form>

      <div className="register-container">
        <h4 className="white-text">Don't have an account?</h4>
        <SecondaryButton class="secondary-button white-text" onChange={onChange} name="Register"/>
      </div>
  </div>
  );
};