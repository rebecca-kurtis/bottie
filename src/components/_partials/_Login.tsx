import React from "react";
import "./User.css";

interface _LoginProps {
  onCreate: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Login: React.FC<_LoginProps> = (props) => {

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
        <button className="main_button" type="submit">Login</button>
      </form>

      <div className="register-container">
        <h4 className="white-text">Don't have an account?</h4>
        <button className="secondary-button white-text" id="register-btn" type="button" onClick={props.onCreate}>Register</button> 
      </div>
  </div>
  );
};